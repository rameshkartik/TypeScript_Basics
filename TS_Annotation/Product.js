var Product = (function () {
    function Product() {
    }
    Product.prototype.PurchaseProduct = function () {
        var prodDetailsToy;
        var ManufacturerDetails;
        ManufacturerDetails = ['ITC Ltd', 1001];
        alert(ManufacturerDetails[0]);
        alert(ManufacturerDetails[1]);
        prodDetailsToy = {
            ProductName: "KidsToy_Level2",
            ProductSerialCode: 1234,
            ProductType: "Toy"
        };
        alert("Product Purchased");
        this.DeliverProduct(prodDetailsToy);
    };
    Product.prototype.SellProduct = function () {
        alert("Product Sold");
    };
    Product.prototype.DeliverProduct = function (Prod) {
        alert(Prod.ProductName);
        alert(Prod.ProductSerialCode);
        alert(Prod.ProductType);
        alert("Product Deliverd");
    };
    Product.prototype.reverse = function (items) {
        var toreturn = [];
        for (var i = items.length - 1; i >= 0; i--) {
            toreturn.push(items[i]);
        }
        return toreturn;
    };
    Product.prototype.OrderingProducts = function () {
        var Sample = [1, 2, 3];
        // Sample[1] = '4';
        var reversed = this.reverse(Sample);
        alert(reversed);
        var SampleString = ['A', 'B', 'C'];
        var reversed1 = this.reverse(SampleString);
        alert(reversed1);
    };
    Product.prototype.formatCommandline = function (command) {
        var line = '';
        if (typeof command === 'string') {
            line = command.trim();
        }
        else {
            line = command.join(' ').trim();
        }
        alert(line);
        // Do stuff with line: string
    };
    return Product;
}());
//# sourceMappingURL=Product.js.map