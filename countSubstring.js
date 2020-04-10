/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = s => {
    
    let palindromeCount = 0

    for (let i=0; i<s.length;i++) {

        palindromeCount++

        let start = i
        let end = i+1

        while (s[end] !== undefined && s[start] !== undefined && s[start] === s[end] ) {
            //keep expanding the palindrome
            palindromeCount++
            start--
            end++
        }

        start = i-1
        end = i+1

        while(s[end] !== undefined && s[start] !== undefined && s[start] === s[end] ) {
            //keep expanding the palindrome
            palindromeCount++
            start--
            end++
        }

    }


    return palindromeCount
};

/*

sample strings:

      i
ABBACABBA

*/

let s = "abc"
console.log(countSubstrings(s), 3)
// Explanation: Three palindromic strings: "a", "b", "c".
 

s = "aaa"
console.log(countSubstrings(s), 6)
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".


s = "abbacabba"
console.log(countSubstrings(s),17)