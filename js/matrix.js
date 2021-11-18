const matrix = [
    [5, 3, 6], 
    [7, 11, 2],
    [15, 9, 4]
   ]

function minNumber(matrix) {
    return Math.min(...matrix.flat());
}

function multiplyOdd(matrix) {
    
    const smallestNumber = minNumber(matrix)
    let result = new Array;

    for ( array in matrix ) {
        let idOdd = matrix[array].map(num => {
            if ( num % 2 !== 0 ) {
                return num * smallestNumber;
            } else return num;
        })
        result.push(idOdd);
    }
    return result
}

console.log(multiplyOdd(matrix))
