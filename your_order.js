function order(words){
  let arr=words.split(" ")

  let obj={}
  for(let ele of arr){
    let number=getNumber(ele)
    obj[number]=ele; 
  }
  return Object.values(obj).join(" ")
}

console.log(order("is6 Thi1s T4est 3a"))

function getNumber(str){
  return str.match(/\d/g)[0];
}