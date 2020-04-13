/**
 * @param {string} s
 * @return {string}
 */
const decodeString = s => {
    let string = ""
    for (let i=0; i<s.length; i++) {

        if (!isNaN(s[i])) {
            let x = i
            while(!isNaN(s[x+1])) {
                x++
            }
            let number = parseInt(s.slice(i, x+1),10)
            let openIdx = x+2
            let closeIdx = x+1
            let openCount = 0
            let pointer = x+1
            while (true) {
                if (s[pointer] === "[") {
                    openCount++
                } 
                
                if (s[pointer] === "]") {
                    openCount--
                }

                if (openCount === 0) break
                closeIdx++
                pointer++
            }
            
            newStr = decodeString(s.slice(openIdx, closeIdx))
            string+=newStr.repeat(number)
            // can change the for loop pointer with this reassignment.
            i=pointer

        } else {
            string+=s[i]
        }
    }

    return string
    
};





let s = "3[a]2[bc]"
console.log(decodeString(s) === "aaabcbc", decodeString(s), "aaabcbc") 

s = "3[a2[c]]"
console.log(decodeString(s) === "accaccacc", decodeString(s),"accaccacc") 

s = "a2[c]"
console.log(decodeString(s) === "acc", decodeString(s),"acc") 

s = "2[abc]3[cd]ef"
console.log(decodeString(s) === "abcabccdcdcdef", decodeString(s), "abcabccdcdcdef") 


s = "100[leetcode]"
console.log(decodeString(s) === "leetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcode")

