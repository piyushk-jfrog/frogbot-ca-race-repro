const _ = require('lodash');

const items = [3, 1, 4, 1, 5, 9];
const sorted = _.sortBy(items);
const unique = _.uniq(sorted);

console.log("Dashboard UI loaded");
console.log("Unique sorted:", unique);
