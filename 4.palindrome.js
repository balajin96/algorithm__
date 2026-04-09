function palindromeNum(x) {
    let copyNum = x, reverseNum = 0;
    while (copyNum > 0) {
        const lastDigit = copyNum % 10;
        reverseNum = reverseNum * 10 + lastDigit;
        copyNum = Math.floor(copyNum / 10)
    }
    return x === reverseNum
}
console.log(palindromeNum(121))

function palindromeString(x) {
    // let reverse = " "
    // reverse = x.split('').reverse().join('')
    // return x === reverse


    console.log(x[0])
    console.log(x[1])
    console.log(x[2])

    let reverse = ""
    for (let i = x.length - 1; i > 0; i--) {
        reverse += x[i]
    }
    return x === reverse
}
console.log(palindromeString("mak"))