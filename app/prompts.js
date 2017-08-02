'use strict';
const utils = require('../utils/all');

module.exports = [
  {
    type: 'input',
    name: 'appName',
    default: utils.yeoman.getAppName()
  }
];
