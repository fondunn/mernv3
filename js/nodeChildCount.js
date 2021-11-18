const div = document.createElement('div');
const p = document.createElement('p');
const span = document.createElement('span');

p.appendChild(span);
div.appendChild(p);

function nodeChildCount(node, deep = null) {
    let result = 0
    const children = node.children;
    if (deep === 0 || !children.length) {
        return 0;
    }
    for ( let child in el.children ) {
        result += nodeChildCount(child, deep ? - 1 : null) + 1;
    }
    return result;
}
console.log(nodeChildCount(div))
console.log(nodeChildCount(div, 1))
