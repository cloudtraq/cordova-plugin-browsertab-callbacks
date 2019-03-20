/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

var exec = require('cordova/exec');

//TODO: promisify these functions
var doNothing = function() {};
exports.isAvailable = function(success, error) {
	console.log('browsertab.js isAvailable called')
  return exec(success, error, 'BrowserTab', 'isAvailable', []);
};

exports.openUrl = function(url, opt_success, opt_error) {
	console.log('browsertab.js openUrl called')
  var error = (!opt_error) ? doNothing : opt_error;
	var success = (!opt_success) ? doNothing : opt_success;
  return exec(success, error, 'BrowserTab', 'openUrl', [url]);
};

exports.close = function(opt_success, opt_error) {
	console.log('browsertab.js close called')
	var success = (!opt_success) ? doNothing : opt_success;
  var error = (!opt_error) ? doNothing : opt_error;
  return exec(success, error, 'BrowserTab', 'close', []);
};
