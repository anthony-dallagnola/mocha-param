/*
 * Wrap calls to mocha "it" function in a forEach loop
 */

import { Done } from 'mocha';

// /*
//  * The library is wrapped in a function (IIFE) that allows
//  * mocha param to be required simply by using require('mocha-param')
//  * but ensures backwards compatibility with those still using require('mocha-param').itParam
//  */
// export function(desc: string, data: T[], callback: (value: T) => void) {
//     const wrapper = function (desc: string, data: T[], callback: (value: T) => void) {
//         run(desc, data, callback);
//     };

//     wrapper.itParam = run;
//     return wrapper;
// } ();
// export const itParam = function(desc: string, data: T[], callback: (value: T) => void) {
//   const wrapper = function(desc: string, data: T[], callback: (value: T) => void) {
//     run(desc, data, callback);
//   };

//   wrapper.itParam = run;
//   return wrapper;
// }();

/*
 * Call mocha "it" function either sync or async depending
 * on whether callback has one or two params
 */
function run<T>(desc: string, data: T[], callback: ((value: T) => void) | ((done: Done, value: T) => void)): void {
  if (callback.length === 2) {
    callItAsync(desc, data, callback);
  } else {
    callItSync(desc, data, callback);
  }
};

function callItSync(desc, data, callback) {
  data.forEach(function(val) {
    it(renderTemplate(desc, val), function() {
      return callback(val);
    });
  });
}

function callItAsync(desc, data, callback) {
  data.forEach(function(val) {
    it(renderTemplate(desc, val), function(done) {
      callback(done, val);
    });
  });
}

/*
 * Add value to description
 */
function renderTemplate(template, value) {
  try {
    return eval('`' + template + '`;');
  } catch (err) {
    return template;
  }
}

export {
  run,
};
