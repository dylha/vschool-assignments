function pwGenerator() {
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowerChars = "abcdefghijklmnopqrstuvwxyz"
    var numbers = "1234567890"
    var symbols = "!@#$%^&*"
    var upperLength = 1
    var lowerLength = 7
    var numLength = 1
    var symLength = 1
    var password = ""
    
    for (var i = 0; i < upperLength; i++) { 
        password += upperChars[Math.floor(Math.random() * upperChars.length)]; 
    }   
        for (var i = 0; i < lowerLength; i++) { 
        password += lowerChars[Math.floor(Math.random() * lowerChars.length)]; 
    }   
    
    for (var i = 0; i < numLength; i++) { 
        password += numbers[Math.floor(Math.random() * numbers.length)]; 
    }
        
    for (var i = 0; i < symLength; i++) { 
        password += symbols[Math.floor(Math.random() * symbols.length)]; 
    }
    
    return password;
}


console.log(pwGenerator());