class Student {
    public StudentName: string;

    //Annotations : number
    //Type inference
    getAge() {
        var age: number = 10;
        var RetireAge = 65;

        alert(age);
        alert(RetireAge);
    }


    //Annotations : string
    //Type inference
    getName() {
        var Name: string = 'Rameshkartik';
        var City = "Chennai";

        alert(Name);
        alert(City);
    }

    //Annotations : Boolean
    //Type inference
    getCityName() {
        var hasAllowance: boolean = true;
        var hasLoan = true;


        alert(hasAllowance);
        alert(hasLoan);

    }

    //Type Inference number
    AddData() {
        var data = 3;
        alert(data);
        var newData = data + 7;
        alert(newData);
    }

    //Type Inference string
    AddString() {
        var data = "Ramesh";
        var newData = data + "Kartik";
        alert(newData);
    }

    //Type Annotation number
    AddStringNumber() {
        var num1: number = 20;
        var data = num1 + "String Data";
        alert(data);
    }


    //Dynamic 
    getStaffAge_Dyn() {
        let Dynamic_StaffAge: any;
        Dynamic_StaffAge = "Dynamic Data Type";
        alert(Dynamic_StaffAge)
        Dynamic_StaffAge = true;
        alert(Dynamic_StaffAge);
    }

    //undefined
    getAccDetails() {
        var Accnum: number;
        var company: undefined;

        alert(Accnum);
        alert(company);
    }



}