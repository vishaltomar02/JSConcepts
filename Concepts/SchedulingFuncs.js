// Need to create a function which sends request to the server every 5 seconds,
// but if server is overloaded then increase the interval by currnet*2
{
  let delay = 500;
  let serverOverloaded = true;
  let timerId = setTimeout(function request() {
    // send the request
    if (serverOverloaded) delay *= 2;
    console.log(delay)
    if (delay > 10000) {
      return "completed";
      clearTimeout(timerId)
    }
    timerId = setTimeout(request, delay);
  }, delay)
}