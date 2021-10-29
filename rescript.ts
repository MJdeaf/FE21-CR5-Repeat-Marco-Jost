"use strict";
class location {
    this.hotspot = hotspot;
    this.adress = adress;
    this.zipcode = zipcode;
    this.place = place;
}
printData(); {
    return `If you are visiting Vienna, you should start your travel spot at ${this.hotspot}, ${this.adress}, ${this.zipcode} ${this.place}.`
}

let location1 = new location("St. Charles Church", "Karlsplatz 1", 1010, "Vienna");
console.log(location1.printData());