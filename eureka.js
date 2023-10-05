function mainFunction(a,b){
    let result=[]

    for(let j=a;j<=b;j++){
       if(supportFunction(j)){
        result.push(j)
       }
    }
    return result

}

function supportFunction(n){
    let number=String(n).split("")
    let suma = 0

    for(let i=0;i<number.length;i++){
        suma+=Math.pow(parseInt(number[i]),i+1)
    }

    return suma===n
}
      
  console.log(mainFunction(50,150))