//roller coaster ride with parents permission/age lessthan 55/greaterthan 16...////////////////////////////////////


// const age = 55;
// parentsPermission = false;
// if((age<=16 && parentsPermission === false) || age >=60){
//     console.log("you are not allowed for this roller coaster"); 
// }
// else{
//     console.log("you are allowed enjoy!!!");
// }




//prompt validation

const personName = "Riyaz";
const password = "1234";
const enterName = prompt("Enter Your Name", 'name');
const enterPassword = prompt ("Please Enter Your Pin", "*pin*");

if(enterName == personName && enterPassword == password ){
    console.log(`welcome ${personName}`);
}
else{
    console.log("Please enter Correct Name & Password");
}