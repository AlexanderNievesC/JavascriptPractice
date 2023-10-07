// function camelCase(n){
//     let array= n.replace(/[A-Z]/g, " $&")
//     return array
// }

function camelCase(n){
    let array = n.toUpperCase().split("")
    let original= n.split("")
    let result = []

    for(let i=0;i<original.length;i++){
        if (array[i]===original[i]){
            result.push(` ${original[i]}`)
        }else{
            result.push(original[i])
        }

    }
    
    return result.join("")
}

console.log (camelCase("CasadePapel"))