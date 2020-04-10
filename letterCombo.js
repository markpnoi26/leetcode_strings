/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = digits => {
    if (!digits) return []
    const letters = [
        null,
        null,
        "abc",
        "def",
        "ghi",
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz'
    ]

    const digitStr = digits.split("")
    const letterBank = []
    const digitLen = digits.length

    for (let el of digitStr) {
        if (letters[parseInt(el, 10)] === null) return []
        letterBank.push(letters[parseInt(el, 10)])
    }
    return permuteLetter(0, digitLen, letterBank)
    

}

const permuteLetter = (idx=0, digitLen, letterBank, currStr="", collect = []) => {
    if (idx === digitLen) {
        collect.push(currStr)
        return
    }

    if (idx < digitLen) {
        let idxLen = letterBank[idx].length
        for (let i=0; i<idxLen;i++) {
            let original = currStr
            currStr+=letterBank[idx][i]
            permuteLetter(idx+1, digitLen, letterBank, currStr, collect)
            currStr = original
        }
    }
    return collect
}

console.log(letterCombinations("234"))