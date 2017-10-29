import { join } from "lodash";

import format from "./string/format";

/**
 * Decimal separator
 */
export const decimalSeparator:string = ".";

/**
 * Thousand separator
 */
export const thousandSeparator:string = ",";

/**
 * Thousand Regular Expression
 */
const thousandRegExp:RegExp = /[0-9]{1,3}/g;

/**
 * Dollar formatter
 */
const formatDollars:Function = format(thousandRegExp, thousandSeparator);

/**
 * Converts number to string. If amount of cents is lower than 10, appends "0" in front of the string. 
 *
 * @example
 * ```
 * formatCents(0)   // 00
 * formatCents(9)   // 09
 * formatCents(25)  // 25
 * formatCents(250) // 250
 * ```
 * @param {number} cents 
 * @returns {string}
 */
function formatCents(cents:number): string {
    if (cents < 10) {
        return `0${cents}`;
    }

    return `${cents}`;
}

/**
 * Formats given amount (in cents) to the US money format.
 * NOTE: Use cents (100 = $1)
 *
 * @example
 * ```
 * formatMoney(999)     // 9.99
 * formatMoney(129999)  // 1,299.99
 * ```
 * @param {number} amountInCents 
 * @returns {string}
 */
export default function formatMoney(amountInCents: number): string {
    // throws error if non-integer
    if (! Number.isInteger(amountInCents)) {
        throw new Error("Number must be integer");
    }

    // absolute number, it supports number below 0.
    const inCents = Math.abs(amountInCents);

    // take cents out
    const cents:number = inCents % 100;
    // dollars = (total - cents) / 100 
    const dollars:number = (inCents - cents) / 100;
    
    // format dollars and cents
    const moneyString:string = join([formatDollars(dollars), formatCents(cents)], decimalSeparator);
    
    // if below 0 append "-" in front of the output
    const amountChar:string = amountInCents < 0 ? "-" : "";
    
    // e.g. -1234.99
    return `${amountChar}${moneyString}`;
}
