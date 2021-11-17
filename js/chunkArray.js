

function chunkArray(data, split) {
    const arr = [];

    for ( let index = 0; index < data.length; index += split) {
        arr.push(data.slice(index, index + split));
    }

    return {
        next: () => {
            const slice = arr.length > 0
            ? arr.splice(0, 1)
            : undefined;

            return {
                value: slice,
                done: !slice
            }
        }
    }
}

const iterator = chunkArray([1,2,3,4,5,6,7,8], 2);

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
// iterator.next()
// iterator.next()
// iterator.next()