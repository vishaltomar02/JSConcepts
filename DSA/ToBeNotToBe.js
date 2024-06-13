




/**
 * interface Matcher {
 *  toBe(data: any): void
 * }
 */
/**
 * @param {any} input
 * @returns {Matcher & {not: Matcher}}
 */
function myExpect(input) {
  // your code here
  function toBe(value) {
    if (Object.is(value, input)) return true;
    else {
      throw new Error("exception")
    }
  }
  let not = {
    toBe: (value) => {
      try {
        toBe(value);
      }
      catch {
        return true
      }
      throw new Error("exception")
    }
  }
  return {
    toBe,
    not
  }
}



