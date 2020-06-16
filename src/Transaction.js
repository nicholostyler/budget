const { Component } = require("react");

class Transaction extends Component {
    constructor(description, amount) {
        this.description = description;
        this.amount = amount;
    }
}