function* chunkArray(data, piece) {
    for ( let i = 0; i < data.length; i +=piece ) {
        const chunk = data.slice(i, i + piece);
        yield chunk;
    }    
}
const iterator = chunkArray([1,2,3,4,5,6,7,8], 3);

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
