import { curryRight, flow, join, split, reverse } from "lodash";

/**
 * Reversed curry of lodash#split function.
 *
 * @example
 * ```
 * splitCurry(limit)(separator)(string)
 * ```
 * @link https://github.com/lodash/lodash/blob/4.17.4/lodash.js#L6856
 */
const splitCurry:Function = curryRight(split);

/**
 * Reversed curry of lodash#join function.
 *
 * @example
 * ```
 * joinCurry(separator)(string)
 * ```
 * @link https://github.com/lodash/lodash/blob/4.17.4/lodash.js#L7608
 */
const joinCurry:Function = curryRight(join);

/**
 * Retrieves reverted string.
 * 
 * @param {string} string 
 * @returns {string}
 */
export default flow([
    splitCurry(undefined)(""),  // "abc" => ["a", "b", "c"] 
    reverse,                    // ["a", "b", "c"] => ["c", "b", "a"]  
    joinCurry(""),              // ["c", "b", "a"] => "cba"
]);