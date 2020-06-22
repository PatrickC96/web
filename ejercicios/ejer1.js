//'use strit'

/*
Programa que pida dos numeros y que nos diga cual es el mayor, 
el menor y si son iguales. PLUS: Si los numeros no son un 
numero o son menores o iguales a cero, nos los vuelva a pedir.(ready)
*/

var estado = true
do{
    var numero1 = Number( prompt("Digite el primer numero: ",1))
    var numero2 = Number( prompt("Digite el segundo numero: ",1))
    if(typeof(numero1)=='number'&&typeof(numero2)=='number'){
        if(numero1>0&&numero2>0){        
            if(numero1==numero2){
                
                alert("los numeros son iguales ("+numero1+","+numero2+")")
            }else{
                if(numero1>numero2){
                    alert("el primer numero es mayor (", numero1+" )")
                }else{
                    alert("el segundo numero es mayor (", numero2+" )")
                }
            }
            estado=false
        }else{
            alert("Debe ingresar numeros positivos")
        }
    }else{
        alert("Debe ingresar numeros corectos")
    }
}while(estado)
