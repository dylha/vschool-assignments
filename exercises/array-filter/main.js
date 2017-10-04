//function BoyBandMembers(name, hairStyle, hasTattoos, swagLevel) {
//    this.name = name;
//    this.hairStyle = hairStyle;
//    this.hasTatoos = hasTattoos;
//    this.swagLevel = swagLevel;
//}
//
//BoyBandMembers.prototype.sing = function() {
//    console.log("LALALA my name is " + this.name);
//}
//
//var harry = new BoyBandMembers("Harry", "Long", true, 9);

// ------------

class BoyBandMembers {
    constructor(name, hairStyle, hasTattoos, swagLevel) {
        this.name = name;
        this.hairStyle = hairStyle;
        this.hasTatoos = hasTattoos;
        this.swagLevel = swagLevel;
    }
    sing() {
        console.log("LALALA my name is " + this.name);
    }
}

const harry = new BoyBandMembers("Harry", "Long", true, 9);

harry.sing();




