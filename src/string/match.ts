/**
 * String#match
 * 
 * @param {string} string 
 * @param {RegExp} regexp 
 */
export default function match(string:string, regexp: RegExp):Array<string> {
    return string.match(regexp) || [];
}
