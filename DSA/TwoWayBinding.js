
/**
 * @param {{value: string}} state
 * @param {HTMLInputElement} element
 */
function model(state, element) {
  // your code here
  element.value = state.value;
  element.addEventListener('input', (event) => {
    state.value = event.target.value;
  });
  Object.defineProperty(state, "value", {
    get() {
      return element.value
    },
    set(newVal) {
      element.value = newVal;
      return;
    }
  })
}

