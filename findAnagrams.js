/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagramsSPlogP = (s,p) => {
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

const findAnagrams2 = (s,p) => {
    // there is a faster way of solving this without sort
    const ans = []
    const store = {}
    const letterCount = p.length

    for (let i =0; i<p.length; i++) {
        if (store[p[i]] !== undefined) {
            store[p[i]]++
        } else {
            store[p[i]] = 1
        }
    }

    for (let i=0; i<s.length; i++) {
        let end = letterCount+i-1
        let start = i
        currStr = (s.slice(start, end+1))
        
        if (isValidAnagram(currStr, store)) {
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

const isValidAnagram = (string, store) => {
    const copyStore = {...store}
    // console.log(copyStore)

    for (let i = 0; i<string.length;i++) {
        if (copyStore[string[i]] !== undefined) {
            copyStore[string[i]]--
            if (copyStore[string[i]] === 0) delete copyStore[string[i]]
        } else {
            return false
        }

    }
    if (Object.keys(copyStore).length !== 0) return false
    return true

}

const findAnagrams = (s,p) => {
    // there is a faster way of solving this without sort
    const ans = []
    const pStore = {}
    const letterCount = p.length

    for (let i =0; i<p.length; i++) {
        if (pStore[p[i]] !== undefined) {
            pStore[p[i]]++
        } else {
            pStore[p[i]] = 1
        }
    }

    sStore = {}

    for (let i=0; i<s.length; i++) {
        if (sStore[s[i]] === undefined) {
            sStore[s[i]] = 1
        } else {
            sStore[s[i]]++
        }


        if (i >= letterCount) {
            // console.log(s[letterCount-i],letterCount-i)
            sStore[s[i-letterCount]]--
            if (sStore[s[i-letterCount]] === 0) delete sStore[s[i-letterCount]]
        }
        // console.log(sStore)

        if (compareStore(pStore, sStore)) {
            ans.push(i-letterCount+1)
        }
        
    }

    return ans

};

const compareStore = (pStore, sStore) => {
    for (let key in pStore) {
        if (sStore[key] === undefined) return false
        if (sStore[key] !== pStore[key]) return false
    }
    return true
}




let s = "cbaebabacd", p = "cba"
console.log(findAnagrams(s, p), [0, 6])

s= "abab", p="ab"
console.log(findAnagrams(s,p), [0, 1, 2])

s= "abacbabc",p ="abc"
console.log(findAnagrams(s,p), [1,2,3,5])

s="baa", p="aa"
console.log(findAnagrams(s,p), [1])



