var Student = (function () {
    function Student() {
    }
    //Annotations : number
    //Type inference
    Student.prototype.getAge = function () {
        var age = 10;
        var RetireAge = 65;
        alert(age);
        alert(RetireAge);
    };
    //Annotations : string
    //Type inference
    Student.prototype.getName = function () {
        var Name = 'Rameshkartik';
        var City = "Chennai";
        alert(Name);
        alert(City);
    };
    //Annotations : Boolean
    //Type inference
    Student.prototype.getCityName = function () {
        var hasAllowance = true;
        var hasLoan = true;
        alert(hasAllowance);
        alert(hasLoan);
    };
    //Type Inference number
    Student.prototype.AddData = function () {
        var data = 3;
        alert(data);
        var newData = data + 7;
        alert(newData);
    };
    //Type Inference string
    Student.prototype.AddString = function () {
        var data = "Ramesh";
        var newData = data + "Kartik";
        alert(newData);
    };
    //Type Annotation number
    Student.prototype.AddStringNumber = function () {
        var num1 = 20;
        var data = num1 + "String Data";
        alert(data);
    };
    //Dynamic 
    Student.prototype.getStaffAge_Dyn = function () {
        var Dynamic_StaffAge;
        Dynamic_StaffAge = "Dynamic Data Type";
        alert(Dynamic_StaffAge);
        Dynamic_StaffAge = true;
        alert(Dynamic_StaffAge);
    };
    //undefined
    Student.prototype.getAccDetails = function () {
        var Accnum;
        var company;
        alert(Accnum);
        alert(company);
    };
    return Student;
}());
//# sourceMappingURL=Student.js.map