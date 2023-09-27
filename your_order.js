function order(words){
  let new_words=words.split(" ")
  let obj={}

  for (let element of new_words){
    number = test(element)
    obj[number]=element
  }
  return Object.values(obj).join(" ")
}

function test(item){
  return item.match(/\d/g)
}


console.log(order("3a is2 Thi1s T4est"))