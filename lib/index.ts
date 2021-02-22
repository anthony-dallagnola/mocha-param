import { FunctionCallback } from './model/FunctionCallbackType';
import { MochaCallback } from './model/MochaCallbackType';
import { ParamTestFunction } from './model/ParamTestFunction';

const itEach: ParamTestFunction = <T>(title: string, data: T[], callback: FunctionCallback<T>, callbackMocha?: MochaCallback): void => {
  if (callback.length === 2) {
    callItAsync(title, data, callback, callbackMocha || it);
  } else {
    callItSync(title, data, callback, callbackMocha || it);
  }
};

itEach.only = <T>(title: string, data: T[], callback: FunctionCallback<T>): void => {
  itEach(title, data, callback, it.only);
};

itEach.skip = <T>(title: string, data: T[], callback: FunctionCallback<T>): void => {
  itEach(title, data, callback, it.skip);
};

/**
 * Call mocha it function synchronously
 *
 * @template T type of parameters
 * @param {string} title title of the test
 * @param {T[]} data parameters
 * @param {FunctionCallback} callback function to test
 * @param {MochaCallback} callbackMocha mocha function to call
 * @returns {Void} void
 */
function callItSync<T>(title: string, data: T[], callback: FunctionCallback<T>, callbackMocha: MochaCallback): void {
  data.forEach(function(val: T) {
    callbackMocha(renderTemplate(title, val), function() {
      return callback(val);
    });
  });
}

/**
 * Call mocha it function asynchronously
 *
 * @template T type of parameters
 * @param {string} title title of the test
 * @param {T[]} data parameters
 * @param {FunctionCallback} callback function to test
 * @param {MochaCallback} callbackMocha mocha function to call
 * @returns {Void} void
 */
function callItAsync<T>(title: string, data: T[], callback: FunctionCallback<T>, callbackMocha: MochaCallback): void {
  data.forEach(function(val) {
    callbackMocha(renderTemplate(title, val), function(done) {
      callback(done, val);
    });
  });
}

/**
 * Add value to description
 *
 * @param {string} template title template
 * @param {any} value value from parameter
 * @returns {string} title
 */
function renderTemplate(template: string, value: any): string {
  try {
    // ${value} is used with the value argument
    return eval('`' + template + '`;');
  } catch (err) {
    return template;
  }
}

export {
  itEach,
};
