function GetUserNumber() {
    var userNumber = document.getElementById("fieldUser").value
    var handleError = document.getElementById("error");
     
    
    if (userNumber < 100 || userNumber > 1000 || userNumber % 10 !== 0) {
        handleError.innerHTML = "Atenção! Digite um número múltiplo de 10, entre 100 e 1000"
        return CleanInput();
        
    } else {
       handleError.innerHTML = "";   
                         
    }   
    var userNumberArray = [1,2,3,4,5,6,7,8,9,10];
    var calcArrayEven = userNumberArray.map(calcFunctionArrayEven);
    var calcArrayOdd = userNumberArray.map(calcFunctionArrayOdd);
    
    
    function calcFunctionArrayEven(num) {
        for(var i = 0; i < userNumberArray.length; i++) {
            if(userNumberArray[i] % 10 === 0) {
               return num * 0.1 * userNumber;
 
            }
        }
                  
    }
    var outputNumbers = document.getElementById("fieldElements").innerHTML = calcArrayEven          
    function calcFunctionArrayOdd(num) {
        for(var i = 0; i < userNumberArray.length; i++) {
            if(userNumberArray[i] % 3 === 0) {
               return num * 0.3 * userNumber;
 
            }
        }

        
}
   var outputNumbers = document.getElementById("fieldElementsOdd").innerHTML = calcArrayOdd;             

    var sum = 0;
    var sumOddArray = 0;
    for(var i = 0; i < userNumberArray.length; i++) {
            if(userNumberArray[i] % 2 === 0) {
                sum += calcArrayEven[i]
 
            } else {
             sumOddArray += calcArrayOdd[i];
            }
        } 
 
 var sumEven = document.getElementById("sumEven");
 sumEven.innerHTML = 'A soma dos pares são: ' + sum;
 
 var sumOdd = document.getElementById("sumOdd");
 sumOdd.innerHTML = 'A soma dos Ímpares são: ' + sumOddArray;
   
  
}




function CleanInput() {
    var inputClean = document.getElementById("fieldUser").value = "";
    var errorClean = document.getElementById("fieldElements").innerHTML = "";
    var errorClean = document.getElementById("fieldElementsOdd").innerHTML = "";
    var sumEvenClean = document.getElementById("sumEven").innerHTML = "";
    var sumEvenClean = document.getElementById("sumOdd").innerHTML = "";
}

