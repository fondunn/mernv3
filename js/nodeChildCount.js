const div = document.createElement('div');
const p = document.createElement('p');
const span = document.createElement('span');

p.appendChild(span);
div.appendChild(p);

function nodeChildCount(node, deep = 0) {
    let nodes = [];
    node.querySelectorAll("*").forEach(el => {
        nodes.push(el);
    })

    while (deep > 0) {
        let array = [];
        nodes.forEach(e => {
            for (let index = 0; index < e.children.length; index++) {
                array.push(e.children[index]);
            }
        });
        nodes = [...array];
        deep--;
    }
    return nodes.length;
}
console.log(nodeChildCount(div))
console.log(nodeChildCount(div, 1))