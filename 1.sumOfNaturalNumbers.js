// sum of first n natural numbers

function naturalnums(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum = sum + i
    }
    return sum

    // return n * (n + 1) / 2
}
console.log(naturalnums(6));

const naturalnums2 = n => n * (n + 1) / 2;

console.log(`naturalnums2:${naturalnums2(6)}`);