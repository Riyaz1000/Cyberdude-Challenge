let myIdol = {
    firstName: "Cristiano",
    lastName: "Ronaldo",
    worldCup: 0,
    isMarried: "yes",
    isChildrens: 4,
    clubs: ["manchester united", "juventus", "realmadrid"],
    isalive: true,

    currentField() {
        let balldor = "winner";
        if (balldor === "winner") {
            console.log(
                `He has 5 Times Ballon d'r Winner And He Got World Title GOAT ${this.firstName} ${this.lastName}...!!!`
            );
        } else {
            console.log("Ohh Noo..!!!");
        }
    },
};
function maritalStatus() {
    if (this.isMarried === 5 || this.isChildrens === "no") {
        console.log("he is unmarried");
    } else {
        console.log("Yes He Has a Beautiful family...!!!");
    }
}


//Read
// function readValues() {
//     console.log
//         (`first name : ${myIdol.firstName} 
// last name : ${myIdol.lastName}
// worldcup : ${myIdol.worldCup} 
// isMarried : ${myIdol.isMarried} 
// isChildrens : ${myIdol.isChildrens} 
// clubs :${myIdol.clubs} 
// isAlive : ${myIdol.isalive}`);
// }
// readValues();

//Read - 2
// console.log(myIdol);
// console.log(`Name : ${(myIdol.firstName)}`);

//functions
// console.log(myIdol.currentField());
// myIdol.currentField();

// console.log(maritalStatus());
//   maritalStatus();

// console.log(myIdol);

//delete
// delete myIdol.clubs
// console.log(myIdol);



//update
// myIdol.firstName="CRISTIANO"
// myIdol.lastName = "RONALDO";
// console.log(myIdol);

//a in push method
// myIdol.clubs.push("EUROPEAN LEAGUE", "PORTUGAL")
// console.log(myIdol);

//add
//   myIdol.currentSalary="1750cr";
//   myIdol.Agreement= "2years"
//   console.log(myIdol);

//add
//   myIdol.clubs[3]="alnassar";

























//read
//   console.log(`First Name: ${myIdol.firstName}`);
// console.log(`Last Name: ${myIdol.lastName}`);
// console.log(`Number of World Cups: ${myIdol.worldCup}`);
// console.log(`Marries Status: ${myIdol.isMarried}`);
// console.log(`Played Clubs: ${myIdol.clubs}`);
// console.log(`How many childrens: ${myIdol.isChildrens}`);
// console.log(`Now My Idol is : ${myIdol.isalive}`);

//   this.isMarried = "yes",
//   this.isChildrens = 4
//   switch (this.isMarried === "yes" || this.isChildrens === 4){
//   case (this.isMarried==="yes"):
//       console.log("Yes he has a beautifull family...!");
//       break;
//       default:
//       console.log("he is unmarried");
//   }
