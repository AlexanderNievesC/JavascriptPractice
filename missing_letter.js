function findMissingLetter(array)
{
  let alphabet=[]
  let result =[]

  for(let i=97;i<=122; i++){
    alphabet.push(String.fromCharCode(i))
  }

    let section = alphabet.slice(alphabet.indexOf(array[0]),alphabet.indexOf(array[array.length -1])+1)

    section.map(element=>{
       if ((!array.includes(element))){
           result.push(element)
       }
     })

    return result
}

console.log(findMissingLetter(['a','b','c','d','f']))