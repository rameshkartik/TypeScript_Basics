//Typical JS Code
function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error("Enter Valid input!");
    }
    return x + y;
}


//TS Code
function addNew(x: number, y: number): number {
    return x + y;
}

class TS_Advantages {

    AddNumbers_Any(param1, param2, param3) {
        var data = param1 + param2 + param3;
        alert(data);
    }


    AddNumbers(param1: number, param2: number, param3: number) {
        var data = param1 + param2 + param3;
        alert(data);
    }

    VariableName_TypeError() {
        var isBo: boolean = true;
        //isB = false;
    }

    
}
