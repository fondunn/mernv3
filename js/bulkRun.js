const f1 = (cb) => {cb(1)}
const f2 = (a, cb) => {cb(a)}
const f3 = (a, b, cb) => {setTimeout(() => cb([a, b]), 1000)}

function bulkRun(tasks) {
    return new Promise(function(resalve, reject) {
        const result = [];

        function cb(...args) {
            for (let arg of args) {
                result.push(arg)
            }
        }

        tasks.map(el => {
            const func = el[0];

            if (el[1].length > 0) {
                func(...el[1], function(...values) {
                    cb(values);
                })
            } else {
                func(function(num) {
                    cb(num)
                });
            }
        });

        setTimeout(() => resalve(result), 1000);
    })
}

bulkRun(
    [
        [f1, []],
        [f2, [2]],
        [f3, [3, 4]] 
    ]
).then(console.log)