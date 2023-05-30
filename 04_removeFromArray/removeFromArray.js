const removeFromArray = function(arreglo, n) {

    let arregloNuevo = [];

    for (let i = 0; i <= arreglo.length -1; i++){
        if (arreglo[i] == n){
            continue
        }
        else {
            arregloNuevo.push(arreglo[i])
        }
        
    }
       
    return arregloNuevo
};

// Do not edit below this line
module.exports = removeFromArray;
