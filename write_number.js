function expandedForm(num) {
    let new_num =String(num).split("").reverse()
    let result=[]
    
    for (let i=0;i<new_num.length;i++){
        let value = Number(new_num[i])* (10 ** i)
        if (value != 0){
            result.push(value)
        }
    }
    
    return result.reverse().join(" + ")
  }

  console.log(expandedForm(70304))

