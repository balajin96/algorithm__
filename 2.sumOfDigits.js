// sum of digits of a number
// 1478 => 1 + 4 + 7 + 8 => 20
//1478 %10, remainder = 1 + 4 + 7 + 8, Q=147%10 = 147, 147%10 = 7, Q=14, 14%10=4, Q=1, 1%10=1, Q=0

function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10; // remainder: dividing by 10 always leaves the last digit as the remainder
        num = Math.floor(num / 10); //quotient : this chops off the last digit by dividing by 10 and discarding the decimal
    }
    return sum
}
console.log(sumOfDigits(123))