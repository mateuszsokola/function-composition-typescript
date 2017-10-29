import { curryRight, flow, join } from "lodash";

import match from "./match";
import reverse from "./reverse";

/**
 * Reversed curry of string#match function.
 *
 * @example
 * ```
 * matchCurry(RegExp)(string)
 * ```
 */
const matchCurry:Function = curryRight(match);

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
 * A Format factory.
 *
 * @example
 * ```
 * format(RegExp, separator)(string)
 * ```
 * @param {RegExp} match 
 * @param {string} string 
 * @returns {Fuction}
 */
export default function format(match:RegExp, separator:string):Function {
    return flow([
        reverse,                    
        matchCurry(match),  
        joinCurry(separator),
        reverse,
    ]);
}