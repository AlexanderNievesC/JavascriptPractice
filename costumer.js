function queueTime(customers, n) {

    if (n <= 0) {
        return 0; // If there are no checkout tills, no time is required
      }
    
      if (customers.length === 0) {
        return 0; // If there are no customers, no time is required
      }

    let tills = new Array(n).fill(0)
    
    for(i=0;i<customers.length;i++){
      let minimo = Math.min(...tills)
      let indexMin = tills.indexOf(minimo)
      
      tills[indexMin]+=customers[i]
      
    }
    
    return Math.max(...tills)
  }