const palindromes = function (string) {
    let palabra =[];
    let palabraalreves = [];

    for (let i = 0; i <= string.length - 1; i++){
        palabra.push(string[i]);
    }
    for ( let i = palabra.length-1; i >= 0; i--){
        palabraalreves.push(palabra[i])
    }

    let palabracompactada = palabra.join('');
    let palabracompactadaalreves = palabraalreves.join('');


    let espalindromo = false;
    if (palabracompactada === palabracompactadaalreves){
        espalindromo = true;
    } else {
        espalindromo = false;
    }

    return espalindromo;

};

// Do not edit below this line
module.exports = palindromes;
