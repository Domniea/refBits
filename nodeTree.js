function TreeConstructor(strArr) { 
    let result = true
    const arr = strArr.map((tupple, i) => {
      const noParens = tupple.replace('(', '').replace(')', '')
      const  test = noParens.split(',')
      return test
    })
  
  // console.log(arr)
  
    for(i = 0; i < arr.length; i++) {
      let count = 0
      const parent = arr[i][1]
  
      for(j = 0; j < arr.length; j++) {
        const compared = arr[j][1]
    
        if(parent === compared) {
          count += 1
          // console.log(count)
        }
        if(count > 2) {
          result = false
        }
      }
  
    }
    return result
  
  
  
  }
     