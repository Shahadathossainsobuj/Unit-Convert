function mileTokilometer(miles) {
    var km = miles * 1.60934;
    return km;
}
// var miles = 16.4;
var marathon = mileTokilometer(16.4);
console.log("marathon in km ", marathon);