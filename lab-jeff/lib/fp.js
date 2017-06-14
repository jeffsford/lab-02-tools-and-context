'use strict';

const method = module.exports = {};

method.map = (list, callback) => Array.isArray(list) ?
Array.prototype.map.call(list, callback) : null;

method.filter = (list, callback) => Array.isArray(list) ?
Array.prototype.filter.call(list, callback) : null;

method.reduce = (list, callback) => Array.isArray(list) ?
Array.prototype.reduce.apply(list, callback) : null;

method.concat = (list, callback) => Array.isArray(list) ?
Array.prototype.concat.call(list, callback) : null;

method.splice = (list, callback) => Array.isArray(list) ?
Array.prototype.splice.apply(list, callback) : null;
