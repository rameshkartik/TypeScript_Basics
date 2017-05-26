interface ProductDetails {
    ProductName: string;
    ProductSerialCode: number;
    ProductType: string;
}


class Product {

    PurchaseProduct() {
        var prodDetailsToy: ProductDetails;

        type StrOrNum = string|number;

        var ManufacturerDetails: [string, number];

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
    }

    SellProduct() {
        alert("Product Sold");
    }

    DeliverProduct(Prod) {
        alert(Prod.ProductName);
        alert(Prod.ProductSerialCode);
        alert(Prod.ProductType);
        alert("Product Deliverd");
    }

    reverse<T>(items: T[]): T[] {
        var toreturn = [];
        for (let i = items.length - 1; i >= 0; i--) {
            toreturn.push(items[i]);
        }
        return toreturn;
    }

    OrderingProducts() {
        var Sample = [1, 2, 3];
       // Sample[1] = '4';

        var reversed = this.reverse(Sample);
        alert(reversed);

        var SampleString = ['A', 'B', 'C'];
        var reversed1 = this.reverse(SampleString);
        alert(reversed1);
    }

    formatCommandline(command: string[] | string) {
        var line = '';
        if (typeof command === 'string') {
            line = command.trim();
        } else {
            line = command.join(' ').trim();
        }

        alert(line);
        // Do stuff with line: string
    }

}