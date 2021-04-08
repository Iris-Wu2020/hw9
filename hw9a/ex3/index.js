const moment = require("moment");
const now = moment().format("dddd, MMMM Do YYYY");
const pastYear = moment("1976-11-26");
let years = moment().diff(pastYear, 'years');
console.log(now);
console.log(`${years} years ago`);
