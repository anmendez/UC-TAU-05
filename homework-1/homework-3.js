//Exercise 3
function func3 (elements, meta){
    let array = [];
    let flattened = elements.flat();
    for(let i = 0; i < flattened.length - 1; i++){
        for(let j = i + 1; j < flattened.length; j++){
            let possibleMeta = flattened[i] + flattened[j];
            if(possibleMeta == meta){
                let printElement = [flattened[i], flattened[j]];
                let printIndex = [i, j];
                array.push(printElement, printIndex);
            }
        }
    }
    return array
}
console.log(func3(['super','bow','bowl','tar','get','book','let'], "superbowl"));
//hacer return de las dos palabra s y sus indices