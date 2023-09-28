const firstName = "Hannes";
const LastName = "Väster";
const dateValue = require("./date_et");
const timeValue = require("./time");
console.log("Programmi autor on: " + firstName + " " + LastName);

let dateETNow = dateValue.dateETformatted();

console.log("Täna on: " + dateETNow);
console.log("Täna on tõesti " + dateValue.dateETformatted());
console.log("Kell on: " + timeValue());
