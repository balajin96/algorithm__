function countDigits(num) {
    if (num === undefined || isNaN(num)) return 0;
    num = Math.abs(num); // + or - treats same
    let count = 0
    do {
        count++;
        num = Math.floor(num / 10);
    } while (num > 0);
    return count
}

console.log(countDigits(-765000))