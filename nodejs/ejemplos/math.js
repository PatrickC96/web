const Math = {};

function add(x1,x2){
    return x1+x2
}

function substract(x1,x2) {  
    return x1-x2
}

function multiply(x1,x2){
    return x1*x2
}

function divide(x1,x2){
    if(x2 == 0){
        console.log("no se puede dividir a 0")
    }else{
        return x1/x2
    }
}

Math.add = add;
Math.substract=substract;
Math.multiply=multiply;
Math.divide=divide;

//esto es para exportar las funciones
// exports.add=add

// esto es para expoertar los objetos
module.exports = Math;