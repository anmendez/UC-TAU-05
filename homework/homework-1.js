//Exercise 1
function uniq_c(a){
    let myVar = [];
    let sequence = 1;
    for (let i = 0; i < a.length -1; i++ ){
        if ( i < a.length) {
            if( a[i] == a[i + 1]){
                sequence++
                
            }
            else if(i == a.length - 2){
                
                let pushVar = [a[i], sequence];
                myVar.push(pushVar);
                sequence = 1;
                pushVar = [a[i + 1], sequence];
                myVar.push(pushVar);
            }
            else{
                let pushVar = [a[i], sequence];
                myVar.push(pushVar);
                sequence = 1;
            }
        }
    }
    return myVar;
}
let args = ['a','a','a','b','b','c','a','b','c'];
console.log(uniq_c(args));
























/* recibe cualquier número de argumentos y los aplana en una sola lista. 
Si alguno de los argumentos que se le pase es una lista, 
entonces los ojetos individuales en la secuencia serán aplanados de forma tal 
que existan al mismo nivel que los otros elementos. 
Cualquier secuencia o lista anidada, sin importar el nivel 
 de profundidad, deberá ser aplanado en una sola lista.
Los siguientes son ejemplos de como esta función sería utilizada y cuál sería 
el resultado esperado.
*/






/*Dada una lista de palabras y una palabra compuesta meta, tu objetivo es encontrar 
las dos palabras que combinadas forman la palabra meta, devolviendo ambas palabras 
en el mismo orden en que aparecen en la lista, y sus respectivos índices en el 
orden en que deben combinarse para formar la palabra meta. Las palabras en la lista 
que se recibe pueden repetirse, pero solo habrá un par único conforma la palabra meta. 
Si no hay palabras en la lista que conformen la palabra meta, puedes devolver null.
*/




/*Se te solicita elevar al cuadrado cada dígito de un número y 
luego concatenarlos todos juntos.
Por ejemplo, si tomamos 9119 y llamamos nuestra función con este número, 
la función debería devolver 811181, porque 9 al cuadrado es 81, 1 al cuadrado es 1, 
1 al cuadrado es 1 y 9 al cuadrado es 81*/