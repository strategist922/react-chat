'use strict';

var i18n = require('node-translate');
i18n.requireLocales({
  'en-gb': require('./en-gb')
});

module.exports = i18n;
