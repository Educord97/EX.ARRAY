document.addEventListener('keypress', function(e) {
    if (e.which == 13) {
        GetUserNumber()
    }
}, false);

function GetUserNumber() {
    var userNumber = document.getElementById("fieldUser").value
    var handleError = document.getElementById("error");
     
    
    if (userNumber < 100 || userNumber > 1000 || userNumber % 10 !== 0) {
        handleError.innerHTML = "Atenção! Digite um número múltiplo de 10, entre 100 e 1000"
        CleanInput()
        
    } else {
       handleError.innerHTML = "";                     
    }   
    var userNumberArray = [1,2,3,4,5,6,7,8,9,10];
    var calcArrayEven = userNumberArray.map(calcFunctionArrayEven);
    var calcArrayOdd = userNumberArray.map(calcFunctionArrayOdd);

    function calcFunctionArrayEven(num) {
            return num * 0.3 * userNumber;
            
    }
    var outputNumbers = document.getElementById("fieldElements").innerHTML = calcArrayEven          
    
    function calcFunctionArrayOdd(num) {
        return num * 0.1 * userNumber;
}
var outputNumbers = document.getElementById("fieldElementsOdd").innerHTML = calcArrayOdd;             

}

    

   

function CleanInput() {
    var inputClean = document.getElementById("fieldUser").value = "";
    var errorClean = document.getElementById("fieldElements").innerHTML = "";
    var errorClean = document.getElementById("fieldElementsOdd").innerHTML = "";
    var askSumClean = document.getElementById("askSum").innerHTML = "";
}

