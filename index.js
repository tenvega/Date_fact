const moment = require("moment");
const chalk = require("chalk");


console.log("It is " + chalk.blue(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")));

console.log("It is " + chalk.red(moment().format("DDD")) + "th day of the year");

console.log("It is " + chalk.yellow(Math.floor((moment() - moment().startOf("day")) / 1000)) + "seconds into the day");
let x
if (moment().isDST("GGGG") === true) {
  x = " is"
} else {
  x = "It is not"
};

console.log("It" + chalk.magenta(x) + " during daylight savings time")

let z
if (moment(2017).isLeapYear() === false) {
  z = "It is"

};

console.log(chalk.green(z) + " a not leap year")
