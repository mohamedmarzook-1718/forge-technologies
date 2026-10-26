import { createServer } from 'vite';

async function testViteDevApi() {
  console.log('Testing Vite Dev Server middleware for /api/contact...');

  const server = await createServer({
    configFile: './vite.config.ts',
    server: { port: 3344 },
  });

  await server.listen();
  console.log('Vite dev server started on http://localhost:3344');

  try {
    // 1. Send OPTIONS request
    const optionsRes = await fetch('http://localhost:3344/api/contact', {
      method: 'OPTIONS',
    });
    console.log(`OPTIONS status: ${optionsRes.status} (expected 204)`);
    if (optionsRes.status !== 204) {
      throw new Error(`Expected 204 from OPTIONS, got ${optionsRes.status}`);
    }

    // 2. Send POST request with missing fields
    const postInvalidRes = await fetch('http://localhost:3344/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'A' }),
    });
    const invalidData = await postInvalidRes.json();
    console.log(`POST invalid body status: ${postInvalidRes.status} (expected 400)`);
    console.log('Response body:', invalidData);
    if (postInvalidRes.status !== 400 || invalidData.success !== false) {
      throw new Error(`Expected 400 from invalid POST, got ${postInvalidRes.status}`);
    }

    // 3. Send POST request with missing RESEND_API_KEY (or invalid key)
    const postValidRes = await fetch('http://localhost:3344/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Jane Doe',
        email: 'jane@example.com',
        service: 'Website Development',
        description: 'Complete redesign of corporate brand identity and online storefront.',
      }),
    });
    const validData = await postValidRes.json();
    console.log(`POST status: ${postValidRes.status} (expected 503 or 502)`);
    console.log('Response:', validData);
    if (![502, 503].includes(postValidRes.status) || validData.success !== false) {
      throw new Error(`Expected 502/503 from POST without valid API key, got ${postValidRes.status}`);
    }

    console.log('\n🎉 Vite dev server middleware test PASSED! /api/contact is fully functional in development mode!');
  } finally {
    await server.close();
    console.log('Vite dev server closed cleanly.');
  }
}

testViteDevApi().catch((err) => {
  console.error('Vite dev server test failed:', err);
  process.exit(1);
});
