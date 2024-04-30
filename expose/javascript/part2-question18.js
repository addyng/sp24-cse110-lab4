// Original code:
// let d = new Date();
// let time = d.toLocaleTimeString();
// console.log(time);

// Modified code:
function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

// 1000 ms is 1 second
const secondInterval = setInterval(printTime, 1000);