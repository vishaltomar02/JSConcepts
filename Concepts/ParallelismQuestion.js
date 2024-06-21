// We are using webworkers here to achieve parallelism

import { isMainThread, Worker, parentPort, workerData } from "node:worker_threads";
import { cpus } from "node:os";
import path from "node:path";

const countLetters = (text) => {
  const frequencies = {};
  for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    frequencies[letter] = (frequencies[letter] || 0) + 1;
  }
  return frequencies;
}

const mergeFrequencies = (base, addition) => {
  for (let [key, value] of Object.entries(addition)) {
    base[key] = (base[key] || 0) + addition[key]
  }
  return base;
}

if (!isMainThread) {
  const frequencies = countLetters(workerData.text);
  parentPort.postMessage(frequencies);
}
else {
  function parallelLetterFrequency(text) {
    const numOfWorkers = cpus().length
    const textLength = text.length;
    const chunkSize = Math.ceil(textLength / numOfWorkers);
    const promises = [];

    for (let i = 0; i < numOfWorkers; i++) {
      const chunkText = text.slice(i * chunkSize, (i + 1) * chunkSize);
      console.log(chunkText);
      promises.push(new Promise((resolve, reject) => {
        const worker = new Worker(path.resolve(new URL(import.meta.url).pathname), { workerData: { text: chunkText } });
        worker.on("message", resolve);
        worker.on("error", reject);
        worker.on("exit", (code) => {
          if (code !== 0) {
            reject(new Error(`Worker stopped with error code: ${code}`));
          }
        })
      }))
    }
    console.log(numOfWorkers, textLength, chunkSize);

    return Promise.all(promises)
      .then((results) => {
        const finalFrequencies = {};
        for (let result of results) mergeFrequencies(finalFrequencies, result);
        return finalFrequencies;
      })

  }
  const text = 'Hello World! This is an example text to test parallel letter frequency counting using worker threads in Node.js.';
  parallelLetterFrequency(text).then((frequencies) => {
    console.log(frequencies);
  }).catch((err) => {
    console.error(err);
  });
}
