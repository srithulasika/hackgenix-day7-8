//Convert a number of seconds into hh:mm:ss using Math.floor, % and padStart(2, "0").

let totalSeconds = Number(prompt("Enter seconds:"));
let hours = Math.floor(totalSeconds / 3600);
let minutes = Math.floor((totalSeconds % 3600) / 60);
let seconds = totalSeconds % 60;
hours = hours.toString().padStart(2, "0");
minutes = minutes.toString().padStart(2, "0");
seconds = seconds.toString().padStart(2, "0");
console.log(`${hours}:${minutes}:${seconds}`);
