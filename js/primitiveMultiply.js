function NotificationException() {}
function ErrorException() {}

function primitiveMultiply(a, b) {

    const rand = Math.random();

    if (rand < 0.5) {
        return a * b;
    } else if(rand > 0.85) {
        throw new ErrorException();
    } else {
        throw new NotificationException();
    }
}

function reliableMultiply(a, b) {
    do {
        try {
            return primitiveMultiply(a, b);
        } catch ( error ) {
            if ( error instanceof NotificationException ) {
                continue;
            } else if ( error instanceof ErrorException ) {
                return;
            }
        }
    } while ( false )
}

console.log(reliableMultiply(8, 8));
