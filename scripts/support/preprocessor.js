'use strict';
var six2five = require('6to5-jest').process;

module.exports = {
  process: function(src, filename) {
    return six2five(src, filename);
  }
};
