function repeatString (palabra, n) {
    let RepetirPalabra = '';

    for (let i = 0; i <= n-1; i++){
        RepetirPalabra += palabra;
    }
    return RepetirPalabra;
};

// Do not edit below this line
module.exports = repeatString;
