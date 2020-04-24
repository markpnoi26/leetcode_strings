/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
    const usedLetter = new Array(s.length).fill(false)
    const letterIdx = {}
    const wordsLen = []
    let overLap = false

    // set up wordLength and idx of each first letter
    for (let i = 0; i<wordDict.length; i++) {
        if (wordDict[i][0] !== undefined) {
            letterIdx[wordDict[i][0]] = []
            wordsLen.push(wordDict[i].length)
        }
    }

    // find all starting idx (perhaps not necessary, we can do a single pass through s and figure it out from there)
    for (let i=0; i<s.length; i++) {
        if (letterIdx[s[i]] === undefined) continue
        letterIdx[s[i]].push(i)
    }

    for (let i = 0; i<wordDict.length; i++) {
        const stLetter = wordDict[i][0]
        const wordLen = wordsLen[i]
        for (let idx of letterIdx[stLetter]) {
            if (s.substring(idx, idx+wordLen) === wordDict[i]) {
                let set = usedLetter[idx]
                for (let j=idx; j<idx+wordLen; j++) {
                    if (set === usedLetter[j]) {
                        usedLetter[j] = true
                    } 
                }
            }
        }

    }

    for (let boolean of usedLetter) {
        if (boolean === false) return false
    }
    return true
};


let s = "leetcode", wordDict = ["leet", "code"]
console.log(wordBreak(s, wordDict), true)

s = "applepenapple", wordDict = ["apple", "pen"]
console.log(wordBreak(s, wordDict), true)

s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
console.log(wordBreak(s, wordDict), false)

s = "catsandogcats", wordDict = ["cats", "dog", "an", "c", "ats"]
console.log(wordBreak(s, wordDict), true)