
/**
 * 
 *Input: "u__hello_world123"
Output: true

 */

// const btnEle = document.getElementById("btn");

// function CodelandUsernameValidation(str) { 

//     // code goes here  
//     console.log("String :", str);
//     let bool = false;
//     if(str.length >= 4 && str.length <= 25){

//         if(str[0] >='a' && str[0] <='z' && str[str.length - 1] !== '_') {
//             bool = true;
//         }
        
//     }

//     return bool; 
  
// }

// btnEle.addEventListener("click", function(){
//     const inputStr = document.getElementById("input_string").value;
//     console.log(CodelandUsernameValidation(inputStr));
// });

let age = 100;
// setTimeout(() => {
function sayHello(){
    const age = 50;

    const anotherStudent = {
        name: "Sunny",
        age: 30,
        getAge() {
            return `${this.age}`;
        }
    };
    console.log(anotherStudent.getAge()); // 30
    console.log(anotherStudent.getAge.call(this)); // 100,  here it is pointing towards where fn is called which is global scope
    console.log("Scope of this ", this); // global scope
}
    // }, 0)

// sayHello();


const studentDetails = [{
    name: "Sanu Kumar",
    age: 27,
    address: "Bengaluru"
},
{
    name: "Sunny Kumar",
    age: 29,
    address: "Bengaluru"
},
{
    name: "Alka Kumari",
    age: 28,
    address: "Kharagpur"
}];

// function printStudentDetails(i) {
//     this.printDetails = function() {
//         console.log("#"+ i + " "+ this.name + " is a " +this.age+ " years student lived in " + this.address); 
//     }
//     this.printDetails();
// }

// for(let i = 0; i < studentDetails.length; i++) {
//     printStudentDetails.call(studentDetails[i], i);
// }

function printStudentDetails(i) {
    this.printDetails = function () {
        return `#${i} ${this.name} is a ${this.age} years student lived in ${this.address}`; 
    }
    console.log(this.printDetails());
}

studentDetails.forEach((student, i) => printStudentDetails.call(student, i));

// for(let i = 0; i < studentDetails.length; i++) {
//     printStudentDetails.call(studentDetails[i], i);
// }


function checkPassword(success, failure) {
    let password = prompt("Password? ", "");
    if (password === "matched") success();
    else failure();
}
  
let user2 = {
    name: "Sunny Narayan",
    loginSuccessful() {
        console.log(this.name + " is login successful");
    },
    loginFailure() {
        console.log(this.name + " login failed");
    }
};
  
// checkPassword(user2.loginSuccessful.bind(user2), user2.loginFailure.bind(user2));
  

const student = {
    name: "Sanu Kumar",
  };
  
function printDetails(age, address) {
    console.log(
        `My name is ${this.name}. I am ${age} years old lives in ${address}`
    );
}

printDetails.apply(student, 45, "Manpur"); // provide Array
  