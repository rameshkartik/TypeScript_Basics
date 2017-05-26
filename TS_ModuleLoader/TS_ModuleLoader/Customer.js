"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Orders_1 = require("./Orders");
var Customer = (function () {
    function Customer() {
        //Order Object
        this.OrderObj = new Orders_1.Orders();
        //CustomerCode Variable
        this._CustomerCode = "";
    }
    Object.defineProperty(Customer.prototype, "CustomerCode", {
        //CustomerCode Getter Property
        get: function () {
            return this._CustomerCode;
        },
        //CustomerCode Setter Property
        set: function (value) {
            this._CustomerCode = value;
        },
        enumerable: true,
        configurable: true
    });
    //Add Customer Object
    Customer.prototype.AddCustomer = function () {
        alert("Customer Added");
    };
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=Customer.js.map