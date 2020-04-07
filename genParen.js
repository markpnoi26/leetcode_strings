// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// const generateParenthesis =  (n) => {
//     // brute force super duper slow
//     // need backtracking solution
//     let parenStr = ""
//     for (let i=0; i < n; i++) {
//         parenStr = "(" + parenStr + ")"
//     }

//     let set = new Set()

//     return permuteParen(parenStr, "", [], set)

// };

// const permuteParen = (parenStr, parenPerm = "", coll = [], set) => {

//     if (!parenStr) {
//         if (isValid(parenPerm) && !set.has(parenPerm)) {
//             set.add(parenPerm)
//             coll.push(parenPerm)
//         }
//         return
//     }

//     if (isValid(parenPerm)) {
//         for (let i = 0; i < parenStr.length; i++) {
//             let original = parenPerm
//             parenPerm += parenStr[i]
//             permuteParen(parenStr.slice(0, i) + parenStr.slice(i + 1), parenPerm, coll, set)
//             parenPerm = original
//         }
//     }

//     return coll
// }

// const isValid = (s) => {
//     if (!s) return true
//     const store = []

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === "(") {
//             store.push(s[i])
//         }

//         if (s[i] === ")") {
//             let popped = store.pop()
//             if (popped !== "(") return false
//         }
//     }
//     if (store.length > 0) return false
//     return true
// };



const genParenthesis = (n) => {
    // backtracking solution, more efficient!
    result = []

    validParen(n, n, "", result)

    return result

}

const validParen = (open, close, string, result) => {
    if (open>close) {
        return
    }

    if (open === 0 && close === 0) {
        result.push(string)
    }

    if (open > 0) validParen(open-1, close, string + "(", result)
    if (close > 0) validParen(open, close-1, string + ")", result)
}

// console.log(generateParenthesis(2))
console.log(genParenthesis(2))
// let paren = ""
// console.log("(" + paren +")")
