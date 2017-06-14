'use strict';

const fp = require('./lib/fp.js');

const main = module.exports = () => {
  let result = fp.map(process.argv, n =>
    n.toUpperCase());
  console.log(result);
  return result;
};
main();
