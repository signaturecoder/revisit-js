
/**
 * 
 *Input: "u__hello_world123"
Output: true

 */

const btnEle = document.getElementById("btn");

function CodelandUsernameValidation(str) { 

    // code goes here  
    console.log("String :", str);
    let bool = false;
    if(str.length >= 4 && str.length <= 25){

        if(str[0] >='a' && str[0] <='z' && str[str.length - 1] !== '_') {
            bool = true;
        }
        
    }

    return bool; 
  
}

btnEle.addEventListener("click", function(){
    const inputStr = document.getElementById("input_string").value;
    console.log(CodelandUsernameValidation(inputStr));
});


