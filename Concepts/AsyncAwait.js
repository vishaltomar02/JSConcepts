// The word "async" means that the function will always return a promise

async function f() {
  return 1;
}

f().then((res) => console.log(res))

async function fnAsync() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done"), 2000);
  });
  const result = await promise;
  console.log(result)
}

fnAsync();


// Try catch in async await
async function fn() {
  try {
    const result = await fetch("https://nosuchrul");
  }
  catch (err) {
    console.log("message", err.name)
  }
}
fn();

// loadjson async await example 
async function loadJSON(url) {
  const result = await fetch(url);
  if (result.status === 200) {
    const data = await result.json();
    return data;
  }
  Promise.reject(new Error(result.status));
}
loadJSON('https://javascript.info/no-such-user.json')
  .catch(console.log); // Error: 404 (4)