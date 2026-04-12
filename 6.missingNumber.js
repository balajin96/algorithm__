function findTheMissingNumber(n) {
    let sum = 0;
    // let missedNum = 0
    // for (let i = 0; i < n.length; i++) {
    //     sum += n[i];
    //     if (n[i] > missedNum) {
    //         missedNum = n[i]
    //     }
    // }
    // return missedNum * (missedNum + 1) / 2 - sum;
    for (let i = 0; i < n.length; i++) {
        sum += n[i] // i - index,  n[i] -  used to access a specific element by its position 
    }
    return n.length * (n.length + 1) / 2 - sum;


}
console.log(findTheMissingNumber([0, 1, 2, 3, 5]))