/**
 * Truncates a given text to a specified maximum length and appends "..." if it exceeds the limit.
 * 
 * @param {string} txt - The text to be truncated.
 * @param {number} [max=50] - The maximum length of the truncated text. Defaults to 50 if not provided.
 * @returns {string} The truncated text with "..." appended if it exceeds the specified length, or the original text if it does not.
 */
export function txtSlice(txt:string,max :number=50){
    if(txt.length>=max) return `${txt.slice(0,max)}...`
    return txt;
    
    }