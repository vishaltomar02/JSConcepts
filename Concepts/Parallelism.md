# Concurrency is when two or more tasks can start, run and complete in overlapping time periods, being executed by the same processing unit.
# Parallelism is when two or more tasks can start and run at the same time, being executed independently of eachother by separate processing units.

# Parallelism in Javascript
## Even though Javascript by default is single-threaded, there is a way to execute code in parallel fashion.

# If your running javascript in the browser (e.g. in a web app), then the way to achieve parallelism is through the Web Worker API. As described by MDN:

# Web Workers makes it possible to run a script operation in a background thread separate from the main execution thread of an application.

# On the other hand, if your javascript is running in Node.js, which is Exercism's target runtime, this same concept is known as Worker threads.