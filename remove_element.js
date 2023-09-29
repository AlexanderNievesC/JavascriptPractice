function removeEveryOther(arr) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) { // Check if the index is even
        result.push(arr[i]);
      }
    }
  
    return result;
  }

  console.log(removeEveryOther([1,2,5,6,7,2]))