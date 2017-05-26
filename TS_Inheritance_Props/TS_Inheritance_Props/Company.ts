class Company {
    public CompanyName: string = "";


    Validate(input: number): boolean {
        alert("Company Data Validated");
        return true;
    }

    SaveCompanyData(): void {
        alert("CompanyData Saved!");
    }

    private _companyCode: string = "";

    public set CompanyCode(value: string) {
        if (value.length == 0) {
            throw "CompanyCode is required";
        }
        this._companyCode = value;
    }

    public get CompanyCode(): string {
        return this._companyCode;
    }

}


class MidLevelCompany extends Company {

    public CompanyCode: string = "EMP123";

    Validate(input: number): boolean {
        alert("Midlevel Company Data Validated");
        return true;
    }
}