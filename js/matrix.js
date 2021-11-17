const baseMatrix = [
    [5, 3, 6], 
    [7, 11, 2],
    [15, 9, 4]
   ]

const testMatrix = [[2, 2],1, [2,2], 3, [2,2]]

function getSmallestNumber(matrix) {
    let array = matrix.flat();
    return Math.min.apply(null, array);
}

function isMatrix(matrix) {
    let result = true;
    matrix.map(el => {
        if ( typeof el !== 'object') {
            result = false
        }
    })
    return result
}

function multiplyOdd(inputMatrix) {
    const matrix = inputMatrix;
    const smallestNumber = getSmallestNumber(inputMatrix)
    const correctMatrix = isMatrix(inputMatrix)

    let result = new Array;

    if( correctMatrix === false ) {
        return new Error('Not a matrix');
    } else {
        for ( array in matrix ) {
            let idOdd = matrix[array].map(num => {
                if ( num % 2 !== 0 ) {
                    return num * smallestNumber;
                } else return num;
            })
            result.push(idOdd);
        }
    }
    return result
}

console.log(multiplyOdd(baseMatrix))