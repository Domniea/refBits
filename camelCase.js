function CamelCase(str) { 

    const strArr = str.replace(/[^A-Za-z0-9]/g, ' ').toLowerCase().split(' ')
  
    const preCamel = strArr.map((word, i) => {
        const fLetter = word[0]
        if(i > 0) {
          return word.replace(word[0], word[0].toUpperCase())
        } else {
          return word
        } 
    })
  
    // code goes here  
    return preCamel.join('')
  
  }
     

