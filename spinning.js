function spinWords(string){
    let array_string=string.split(" ")
    let result=[]

    array_string.map(element=>{
        (element.length>=5) ? result.push(element.split("").reverse().join("")) : result.push(element)   
    })
    
    return result.join(" ")
  }

console.log(spinWords("Just gniddik there is still one more"))