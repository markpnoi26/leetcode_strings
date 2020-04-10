/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs => {
    let store = {}
    let resp = []

    for (let i = 0; i < strs.length; i++) {
        let newStr = strs[i].split("").sort().join("")
        if (store[newStr] !== undefined) {
            store[newStr].push(i)
        } else {
            store[newStr] = [i]
        }
    }

    for (let key in store) {
        for (let i = 0; i < store[key].length; i++) {
            store[key][i] = strs[store[key][i]]
        }
        resp.push(store[key])
    }

    return resp
};