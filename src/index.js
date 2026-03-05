const minimist = require('minimist');
const qs = require('qs');
const _ = require('underscore');
const uuid = require('node-uuid');
const merge = require('merge');

// Safe usage patterns — CA should mark these as "Not Applicable"
const args = minimist(['--name', 'analytics', '--version', '1.0.0']);
const query = qs.stringify({ service: args.name, v: args.version });
const config = _.defaults({ port: 3000 }, { port: 8080, host: 'localhost' });
const id = uuid.v4();
const result = merge({ id, query }, config);

console.log('Service config:', JSON.stringify(result, null, 2));
