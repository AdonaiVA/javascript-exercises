const leapYears = function(year) {
    let bisiesto = false;

    if (year % 400 == 0){
        bisiesto = true;
    } else if (year % 100 == 0){
        bisiesto = false;
    } else if (year % 4 == 0){
        bisiesto = true;
    }
    return bisiesto;
};

// Do not edit below this line
module.exports = leapYears;
