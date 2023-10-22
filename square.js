 function squareDigits(num){
     let array=String(num).split("")
     let result=""
    
     array.map(element=> result +=String(Number(element)**2))
    
     return Number(result);
   }

   console.log(squareDigits(9119))

