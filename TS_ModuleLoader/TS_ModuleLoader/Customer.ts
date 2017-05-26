import { Orders } from "./Orders";
export class Customer {

    //Order Object
    public OrderObj: Orders = new Orders();

    //CustomerCode Variable
    private _CustomerCode: string = "";

    //CustomerCode Setter Property
    public set CustomerCode(value: string) {

        this._CustomerCode = value;
    }
    //CustomerCode Getter Property
    public get CustomerCode():string {
        return this._CustomerCode;
    }

    //Add Customer Object
    AddCustomer() {
        alert("Customer Added");
    }
}