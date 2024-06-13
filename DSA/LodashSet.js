



/**
 * @param {object} obj
 * @param {string | string[]} path
 * @param {any} value
 */
function set(obj, path, value) {
  // your code here
  const pathQueue = Array.isArray(path) ? path : path.replaceAll("[", ".").replaceAll("]", "").split(".");
  console.log(pathQueue);
  let object = obj;

  while (pathQueue.length > 1) {
    // check if curr is a number when coerced to Number
    const key = pathQueue.shift();
    console.log(object, key, object.hasOwnProperty[key])
    if (!(key in object)) {
      const nextProperty = pathQueue[0];
      object[key] = String(Number(nextProperty)) === nextProperty ? [] : {};
    }
    object = object[key];
  }
  object[pathQueue[0]] = value;
}

const obj = {
  a: {
    b: {
      c: [1, 2, 3]
    }
  }
}
set(obj, 'a.b.c.0', 'BFE')
console.log(obj.a.b.c[0]);