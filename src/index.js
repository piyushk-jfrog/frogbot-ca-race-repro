const _ = require('lodash');
const got = require('got');
const serialize = require('serialize-javascript');

// Safe usage - CA should mark vulnerabilities as "Not Applicable"
const data = { name: 'analytics', version: '1.0.0' };
const merged = _.merge({}, data, { timestamp: Date.now() });
const serialized = serialize(merged, { isJSON: true });
console.log('Config:', serialized);

async function healthCheck() {
  try {
    const response = await got('https://httpbin.org/get', { timeout: 5000 });
    return JSON.parse(response.body);
  } catch (err) {
    return { status: 'error', message: err.message };
  }
}

healthCheck().then(r => console.log('Health:', r.status || 'ok'));
