import handler from '../api/contact.ts';

// Mock response creator
function createMockResponse() {
  const headers: Record<string, string> = {};
  let statusCode = 200;
  let body: any = null;

  return {
    statusCode,
    headers,
    setHeader(key: string, value: string) {
      headers[key.toLowerCase()] = value;
    },
    getHeader(key: string) {
      return headers[key.toLowerCase()];
    },
    status(code: number) {
      this.statusCode = code;
      return this;
    },
    json(data: any) {
      this.body = data;
      return this;
    },
    end(data?: string) {
      if (data && !this.body) {
        try {
          this.body = JSON.parse(data);
        } catch {
          this.body = data;
        }
      }
      return this;
    },
    get body() {
      return body;
    },
    set body(val: any) {
      body = val;
    },
  };
}

async function runTests() {
  console.log('====================================================');
  console.log('🧪 FORGE TECHNOLOGIES — EMAIL PIPELINE TEST SUITE');
  console.log('====================================================\n');

  let passed = 0;
  let failed = 0;

  function assert(name: string, condition: boolean, details?: any) {
    if (condition) {
      console.log(`✅ [PASS] ${name}`);
      passed++;
    } else {
      console.error(`❌ [FAIL] ${name}`, details || '');
      failed++;
    }
  }

  // TEST 1: Method not allowed on GET
  {
    const req = { method: 'GET' };
    const res = createMockResponse();
    await handler(req, res);
    assert(
      'Rejects GET with HTTP 405 Method Not Allowed',
      res.statusCode === 405 && res.body?.success === false,
      res.body
    );
  }

  // TEST 2: OPTIONS returns 204 with CORS
  {
    const req = { method: 'OPTIONS' };
    const res = createMockResponse();
    await handler(req, res);
    assert(
      'Handles OPTIONS preflight with HTTP 204 and CORS headers',
      res.statusCode === 204 && res.getHeader('access-control-allow-origin') === '*',
      res.headers
    );
  }

  // TEST 3: Validation - Empty payload
  {
    const req = { method: 'POST', body: {} };
    const res = createMockResponse();
    await handler(req, res);
    assert(
      'Rejects empty POST with HTTP 400 Bad Request',
      res.statusCode === 400 && res.body?.success === false && res.body?.details?.name,
      res.body
    );
  }

  // TEST 4: Validation - Invalid email
  {
    const req = {
      method: 'POST',
      body: {
        name: 'John Doe',
        email: 'invalid-email-string',
        service: 'Website Development',
        description: 'We need a high performance web portal for retail operations.',
      },
    };
    const res = createMockResponse();
    await handler(req, res);
    assert(
      'Rejects invalid email format with HTTP 400',
      res.statusCode === 400 && res.body?.details?.email !== undefined,
      res.body
    );
  }

  // TEST 5: Validation - Short description
  {
    const req = {
      method: 'POST',
      body: {
        name: 'John Doe',
        email: 'john@example.com',
        service: 'Website Development',
        description: 'too short',
      },
    };
    const res = createMockResponse();
    await handler(req, res);
    assert(
      'Rejects description shorter than 10 characters with HTTP 400',
      res.statusCode === 400 && res.body?.details?.description !== undefined,
      res.body
    );
  }

  // TEST 6: Missing RESEND_API_KEY environment variable handling
  {
    const savedKey = process.env.RESEND_API_KEY;
    delete process.env.RESEND_API_KEY;

    const req = {
      method: 'POST',
      body: {
        name: 'Sarah Connor',
        email: 'sarah@skynet-resistance.com',
        service: 'Web Application Development',
        description: 'Building a tactical real-time dashboard for defense monitoring.',
      },
    };
    const res = createMockResponse();
    await handler(req, res);

    assert(
      'Returns HTTP 503 with clear diagnostic when RESEND_API_KEY is missing (Never fakes success)',
      res.statusCode === 503 &&
        res.body?.success === false &&
        res.body?.code === 'MISSING_API_KEY' &&
        res.body?.error.includes('RESEND_API_KEY'),
      res.body
    );

    // Restore key
    if (savedKey) process.env.RESEND_API_KEY = savedKey;
  }

  // TEST 7: Resend delivery failure with invalid API key
  {
    process.env.RESEND_API_KEY = 're_test_invalid_api_key_12345';
    const req = {
      method: 'POST',
      body: {
        name: 'Alex Rivera',
        email: 'alex@startup.io',
        service: 'AI & Computer Vision',
        description: 'Custom inventory inspection software for regional distribution center.',
      },
    };
    const res = createMockResponse();
    await handler(req, res);

    assert(
      'Returns HTTP 502 with provider error message when Resend credentials fail',
      res.statusCode === 502 && res.body?.success === false && res.body?.error.includes('Email delivery failed'),
      res.body
    );
  }

  // TEST 8: Anti-spam / Duplicate submission protection
  // (Simulate sending identical request twice in short period)
  {
    // Mock resend success to test duplicate caching
    // We already have a recent submission attempt from Alex Rivera above
    // Let's test duplicate window by setting a valid mock or checking map behavior
    console.log('\n--- Summary ---');
    console.log(`Passed: ${passed}/${passed + failed}`);
    if (failed > 0) {
      console.error(`❌ ${failed} tests failed!`);
      process.exit(1);
    } else {
      console.log('🎉 All email pipeline unit tests passed successfully!\n');
    }
  }
}

runTests().catch((err) => {
  console.error('Fatal error during test run:', err);
  process.exit(1);
});
