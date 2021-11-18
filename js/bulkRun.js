const f1 = (cb) => {cb(1)}
const f2 = (a, cb) => {cb(a)}
const f3 = (a, b, cb) => {setTimeout(() => cb([a, b]), 1000)}

function bulkRun(task) {
    const promises = [];
    for ( const [exec, param] of task) {
        if ( typeof exec === "function") {
            promises.push(new Promise(res => {
                exec(...param, res);
            }));
        }
    }
    return Promise.all(promises);
}

bulkRun(
    [
        [f1, []],
        [f2, [2]],
        [f3, [3, 4]] 
    ]
).then(console.log)
