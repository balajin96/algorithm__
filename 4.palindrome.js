function palindromeNum(x) {
    let copyNum = x, reverseNum = 0;
    while (copyNum > 0) {
        const lastDigit = copyNum % 10; //to get remainder 
        reverseNum = reverseNum * 10 + lastDigit;
        copyNum = Math.floor(copyNum / 10) //to get quotient
    }
    return x === reverseNum
}
console.log(palindromeNum(121))

function palindromeString(x) {
    // let reverse = " "
    // reverse = x.split('').reverse().join('')
    // return x === reverse

    console.log(`${x[0]} -- ${x[1]} -- ${x[3]}`)

    let reverse = ""
    for (let i = x.length - 1; i >= 0; i--) {
        reverse += x[i]
    }
    return x === reverse
    // let reverse = "";
    // let i = x.length - 1;
    // while (i >= 0) {
    //     reverse += x[i];
    //     i--;
    // }
    // return x === reverse
}
console.log(palindromeString("mak"))