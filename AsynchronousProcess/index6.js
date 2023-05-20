//Promise Static Method

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3])
    .then((values) => console.log(`Promise.all = ${values}`)) // [1, 2, 3] setelah 3 detik
    .catch((error) => console.log(error.message));

Promise.race([promise1, promise2, promise3])
    .then((value) => console.log(`Promise.race = ${value}`)) // 1 setelah 1 detik
    .catch((error) => console.log(error.message));

Promise.allSettled([promise1, promise2, promise3])
    .then((results) => console.log(`Promise.allSettled = ${results}`));
// [{status: "fulfilled", value: 1}, {status: "rejected", reason: Error}, {status: "fulfilled", value: 3}] setelah 3 detik

Promise.any([promise1, promise2, promise3])
    .then((value) => console.log(`Promise.any = ${value}`)) // 1
    .catch((error) => console.log(error.message));