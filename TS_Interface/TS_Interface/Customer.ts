//Interface Implementation
interface iDataAccessLayer {
    AddCustomer();
    DeleteCustomer();
}

//Customer Class
class Customer implements iDataAccessLayer
{
    private _CustCode: string = "";

    //Set Property
    public set CustomerCode(value: string) {
        this._CustCode = value;
    }

    //Get Property
    public get CustomerCode():string {
        return this._CustCode;
    }

    //Adds Customer
    AddCustomer() {
        alert("Customer Added!");
    }

    //Deletes Customer
    DeleteCustomer() {
        alert("Customer Deleted");
    }
}