function inArray(array1,array2){
    let result =[]
    
    array1.map(array1_element=>{
        for (let i=0; i<array2.length;i++){
            if(array2[i].includes(array1_element) && !result.includes(array1_element) ) {
                result.push(array1_element)
            }
        }
    })

    return result.sort()
}

console.log(inArray(["xyz", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"]))

