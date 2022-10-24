"use strict";
/** Oh to be able to use [].flat - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 * Ignoring that... Recusion is the key.
 * And yes, it's stack-overflow based - I'm fully expecting to be able to access that day to day, short of the Apocalypse occuring. */

export let flatten = <T>(ary: Array<T>, ret: Array<T> = []): Array<T> => {
  return ary.reduce((ret, entry) => {
    Array.isArray(entry) ? flatten(entry, ret) : ret.push(entry);
    return ret;
  }, ret);
};
