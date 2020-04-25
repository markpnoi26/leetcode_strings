/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
    // improve lookup time of wordDict
    const ending = new Array(s.length + 1).fill(false)
    const words = {}
    // start has to be true, because the ending from previous word must be true in order to complete the word.
    ending[0] = true
    const end = ending.length-1

    for (let word of wordDict) {
        words[word] = true
    }

    for (let i = 1; i<=s.length; i++) {
        for (let j = 0; j<i; j++) {
            let currWord = s.substring(j, i)
            if (words[currWord] && ending[j]) {
                ending[i] = true
                break
            }
        }
    }

    return ending[end]
    
};


let s = "leetcode", wordDict = ["leet", "code"]
console.log(wordBreak(s, wordDict), true)

s = "applepenapple", wordDict = ["apple", "pen"]
console.log(wordBreak(s, wordDict), true)

s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
console.log(wordBreak(s, wordDict), false)

s = "catsandogcats", wordDict = ["cats", "dog", "an", "c", "ats"]
console.log(wordBreak(s, wordDict), true)