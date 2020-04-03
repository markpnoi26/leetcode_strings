/**
 * @param {string[]} 
 * @return {string[]}
 */
var commonChars = function (A) {

    let currStore = {}
    const common = []

    for (let i=0; i<A[0].length; i++) {
        if (currStore[A[0][i]] === undefined) {
            currStore[A[0][i]] = 1
        } else {
            currStore[A[0][i]]++
        }
    }

    for (let i=1; i<A.length;i++) {
        const nextStore = {}
        for (let j=0; j<A[i].length; j++) {

            if (currStore[A[i][j]] !== undefined && currStore[A[i][j]] > 0) {
                currStore[A[i][j]]--
                if (nextStore[A[i][j]] === undefined) {
                    nextStore[A[i][j]] = 1
                } else {
                    nextStore[A[i][j]]++
                }
            }
        }
        currStore = nextStore
    }

    for (let key in currStore) {
        while (currStore[key] > 0) {
            common.push(key)
            currStore[key]--
        }
    }
    return common
};


console.log(commonChars(["bella", "label", "roller"]), ["e", "l", "l"])