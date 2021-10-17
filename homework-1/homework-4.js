//Exercise 4
function func4 (elements){
    let sNumber = elements.toString();
    let output = '';
    for( let i = 0; i < sNumber.length; i++){
        output += Math.pow(parseInt(sNumber[i], 10), 2)
    }
    return output;
    //parsear el numero en digitos
    //elevar cada digito al cuadrado
    //printear todos los digitos concatenados
}
console.log(func4(9119));