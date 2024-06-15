function SumMultiplier(arr) { 

    const sum = arr.reduce((acc, cur) => {
      return acc += cur
    }, 0)
    
    const double = 2 * sum
  
    // console.log(sum)
    // console.log(double)
  
    let highest = 0
  
    for(i = 0; i < arr.length; i++) {
      const numOne = arr[i]
      // console.log(arr[i])
      for(j = 0; j < arr.length; j++) {
        const total = numOne * arr[j]
        // console.log('total', total)
        if(total > highest) {
          highest = total
        }
      }
    }
   
    return highest > double ? 'true' : 'false' 
  }
