const Account = require("./accounting");
const myAccount = new Account("Jeff");
myAccount.credict(150);
console.log(myAccount.describe());