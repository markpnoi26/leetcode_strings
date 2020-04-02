/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (!s) return false
    const store = []
    
    for (let i=0; i<s.length; i++) {
        if (s[i] === "[" || s[i] === "{" || s[i] === "(") {
            store.push(s[i])
        }

        if (s[i] === "]") {
            let popped = store.pop()
            if (popped !== "[") return false
        }
        
        if (s[i] === "}") {
            let popped = store.pop()
            if (popped !== "{") return false
        }

        if (s[i] === ")") {
            let popped = store.pop()
            if (popped !== "(") return false
        }


    }
    if (store.length > 0) return false
    return true
};

let input = "()"
console.log(isValid(input), true)

input = "()[]{}"
console.log(isValid(input), true)

input = "(]"
console.log(isValid(input), false)

input = "([)]"
console.log(isValid(input), false) 

input = "{[]}"
console.log(isValid(input),true)