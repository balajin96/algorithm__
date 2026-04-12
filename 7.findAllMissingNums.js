function missingNumbers(n) {
    /**
     * The Set approach is preferred for large arrays since .includes() is O(n) vs Set's O(1) lookup.
     */
    // const max = Math.max(...n);
    // return [...Array(max + 1).keys()].filter(i => !n.includes(i));

    //O(1) Big O notation
    const numSet = new Set(n); // Converts array to a Set for O(1) lookup
    const max = Math.max(...n)
    const missing = []

    for (let i = 0; i <= max; i++) { // Checks every number in the expected range
        if (!numSet.has(i)) { // If a number isn't in the set, it's missing
            missing.push(i) // Collects all missing numbers into an array
        }
    }
    return missing
}
console.log(missingNumbers([0, 4]))