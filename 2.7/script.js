function areArraysEqual(A, B) {
    for(var i = 0; i<A.length; i++) {
        if (!(A[i] === B[i])) {
            return false;
        }
    }
    return true;
}

console.log(areArraysEqual([1,2,3], [1,2]));
console.log(areArraysEqual([1,2,3], [1,4,3]));
console.log(areArraysEqual([1,2,3], ["1",2,3]));
console.log(areArraysEqual([1,2,3], [1,2,3]));


