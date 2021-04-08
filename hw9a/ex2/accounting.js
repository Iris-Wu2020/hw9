module.exports = class Account {
    constructor(firstName) {
        this.firstName = firstName;
    }
    credict(money) {
        this.money = money;

    }
    describe() {
        return `owner: ${this.firstName}, balance: ${this.money}`;
    }
};