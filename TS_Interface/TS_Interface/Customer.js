//Customer Class
var Customer = (function () {
    function Customer() {
        this._CustCode = "";
    }
    Object.defineProperty(Customer.prototype, "CustomerCode", {
        //Get Property
        get: function () {
            return this._CustCode;
        },
        //Set Property
        set: function (value) {
            this._CustCode = value;
        },
        enumerable: true,
        configurable: true
    });
    //Adds Customer
    Customer.prototype.AddCustomer = function () {
        alert("Customer Added!");
    };
    //Deletes Customer
    Customer.prototype.DeleteCustomer = function () {
        alert("Customer Deleted");
    };
    return Customer;
}());
//# sourceMappingURL=Customer.js.map