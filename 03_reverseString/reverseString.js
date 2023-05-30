const reverseString = function(oracion) {
    let guardarOracion = [];
    for (let i = 0; i <= oracion.length-1; i++){
        guardarOracion.push(oracion[i]);
    }
    let palabraalreves = '';
    for (let i = guardarOracion.length - 1; i >= 0; i--)
    {
        palabraalreves = palabraalreves + guardarOracion[i];
    }
    return palabraalreves;

};

// Do not edit below this line
module.exports = reverseString;
