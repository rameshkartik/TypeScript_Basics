var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Company = (function () {
    function Company() {
        this.CompanyName = "";
        this._companyCode = "";
    }
    Company.prototype.Validate = function (input) {
        alert("Company Data Validated");
        return true;
    };
    Company.prototype.SaveCompanyData = function () {
        alert("CompanyData Saved!");
    };
    Object.defineProperty(Company.prototype, "CompanyCode", {
        get: function () {
            return this._companyCode;
        },
        set: function (value) {
            if (value.length == 0) {
                throw "CompanyCode is required";
            }
            this._companyCode = value;
        },
        enumerable: true,
        configurable: true
    });
    return Company;
}());
var MidLevelCompany = (function (_super) {
    __extends(MidLevelCompany, _super);
    function MidLevelCompany() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CompanyCode = "EMP123";
        return _this;
    }
    MidLevelCompany.prototype.Validate = function (input) {
        alert("Midlevel Company Data Validated");
        return true;
    };
    return MidLevelCompany;
}(Company));
//# sourceMappingURL=Company.js.map