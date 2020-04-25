/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
    if (!s.length) return s

    let longestPalindrome = 1
    let currPalindrome = s[0]

    for (let i = 0; i<s.length; i++) {
        let left, right
        left = i
        right = i+1
        while (s[left] !== undefined && s[right] !== undefined && s[left] === s[right]) {
            let currLen = right-left+1
            if (currLen > longestPalindrome) {
                longestPalindrome = currLen
                currPalindrome = s.substring(left, right+1)
            }
            left--
            right++
        }

        left = i-1
        right = i+1
        while (s[left] !== undefined && s[right] !== undefined && s[left] === s[right]) {
            let currLen = right-left+1
            if (currLen > longestPalindrome) {
                longestPalindrome = currLen
                currPalindrome = s.substring(left, right+1)
            }
            left--
            right++
        }

    }

    return currPalindrome

};


//        i
let s = "babad"
// 
//

console.log(longestPalindrome(s), "bab")

s = "cbbd"
console.log(longestPalindrome(s), "bb")
