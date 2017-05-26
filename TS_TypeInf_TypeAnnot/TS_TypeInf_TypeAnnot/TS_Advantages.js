//Typical JS Code
function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error("Enter Valid input!");
    }
    return x + y;
}
//TS Code
function addNew(x, y) {
    return x + y;
}
var TS_Advantages = (function () {
    function TS_Advantages() {
    }
    TS_Advantages.prototype.AddNumbers_Any = function (param1, param2, param3) {
        var data = param1 + param2 + param3;
        alert(data);
    };
    TS_Advantages.prototype.AddNumbers = function (param1, param2, param3) {
        var data = param1 + param2 + param3;
        alert(data);
    };
    TS_Advantages.prototype.VariableName_TypeError = function () {
        var isBo = true;
        //isB = false;
    };
    return TS_Advantages;
}());
//# sourceMappingURL=TS_Advantages.js.map