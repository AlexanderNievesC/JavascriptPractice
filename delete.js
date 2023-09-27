function deleteNth(arr,n){
  let result= []

  for (let element of arr){
    let validation = result.filter(elem=>elem === element).length
    if (validation && validation ===n){
        continue
    } else{
        result.push(element)
    }
  }

  return result
}

console.log(deleteNth( [20,37,20,21], 1))