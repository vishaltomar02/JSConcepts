/**
 * @param {Element} root
 * @param {Element} target
 * @return {Elemnt | null}
 */
function previousLeftSibling(root, target) {
  const q = [root];

  while (q.length) {
    debugger;
    const n = q.length;
    let prev = null;

    for (let i = 0; i < n; i++) {
      const curr = q.shift();
      console.log(curr)

      if (curr === target) {
        return prev;
      }

      q.push(...curr.children);
      console.log(q)
      prev = curr;
    }
  }

  return null;
}
const target = document.getElementById("c");
const root = document.querySelector("body");
console.log(previousLeftSibling(root, target));
