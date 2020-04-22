/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s,p) => {
    // there is a faster way of solving this without sort
    const ans = []
    const letterCount = p.length
    // p(log(p))
    
    let sortedStr = p.split("").sort().join("")
    let currStr = ""

    // s*p(log(p))
    for (let i=0; i<s.length; i++) {
        let end = letterCount+i-1
        let start = i
        currStr = (s.slice(start, end+1))
        sortedCurrStr = currStr.split("").sort().join("")
        
        if (sortedCurrStr === sortedStr) {
            ans.push(i)
            while (s[i] === s[end+1]) {
                i++
                end++
                ans.push(i)
            }
        }
    }

    return ans

};



let s = "cbaebabacd", p = "cba"

console.log(findAnagrams(s, p), [0, 6])

 s= "abab", p="ab"
console.log(findAnagrams(s,p), [0, 1, 2])

s= "abacbabc",p ="abc"
console.log(findAnagrams(s,p), [1,2,3,5])