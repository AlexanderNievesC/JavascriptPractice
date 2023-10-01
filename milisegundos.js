function past(h,m,s){
  0 <= h <= 23

  let segun= 1000*s,
      min= 60000*m,
      hor= 3600000*h;
  
  let result =segun+min+hor

  return result
}

console.log(past(-1,1,1))