/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
const minNumberOfFrogs = (croakOfFrogs) => {
    if (croakOfFrogs.length % 5 !== 0) return -1
    if (croakOfFrogs[0] !== "c") return -1
    
    let frogCount = 0
    const croaks = {
        "c": 0,
        "r": 0,
        "o": 0,
        "a": 0,
        "k": 0
        
    }
    
    for (let i = 0 ; i<croakOfFrogs.length; i++) {
        if (croakOfFrogs[i] === "c") {
            croaks["c"]++
        } else if (croakOfFrogs[i] === "r") {
            if (croaks["r"] > croaks["c"]) break
            croaks["r"]++
        } else if (croakOfFrogs[i] === "o") {
            if (croaks["o"] > croaks["r"]) break
            croaks["o"]++
        } else if (croakOfFrogs[i] === "a") {
            if (croaks["a"] > croaks["o"]) break
            croaks["a"]++
        } else if (croakOfFrogs[i] === "k") {
            if (croaks["k"] > croaks["a"]) break
            croaks["k"]++
            frogCount = Math.max(frogCount, croaks["c"] - croaks["k"] + 1)
        } 
    }

    for (let key in croaks) {
        if (croaks[key] !== croaks["c"]) return -1
    }
    
    return frogCount
    
};

let croakOfFrogs = "croakcroak"
console.log(minNumberOfFrogs(croakOfFrogs), 1)

croakOfFrogs = "crcoakroak"
console.log(minNumberOfFrogs(croakOfFrogs), 2)


croakOfFrogs = "croakcrook"
console.log(minNumberOfFrogs(croakOfFrogs), -1)

croakOfFrogs = "aoocrrackk"
console.log(minNumberOfFrogs(croakOfFrogs), -1)

croakOfFrogs = "okcracakroroakacckor"
console.log(minNumberOfFrogs(croakOfFrogs), -1)