const players = [
    { id: 1, name: "cristiano ronaldo", age: 38, grade: "A", club: "alnassar", goals: 867 },
    { id: 2, name: "mohammed salah", age: 31, grade: "B", club: "liverfool", goals: 332 },
    { id: 3, name: "karim benzema", age: 35, grade: "C", club: "real madrid", goals: 353 },
    { id: 4, name: "sadio mane", age: 31, grade: "A", club: "alnassar", goals: 40 },
];

//Display all players for of

// for (let play of players) {
//     console.table(play);
// }



// //for each

// players.forEach((cr7) => {
//     console.log("Player Name :", cr7.name);
// });




//goal filter and for each pandrathu

// let filter = players.filter((player => player.goals >= 50));
// console.log(filter);
// filter.forEach((cr7) => {
//     console.log("Player Name :", cr7.name);
// });



//average age ah calculate panrom then using for loop

// function calculateAverageAge() {
//     let totalAge = players.reduce((sum, player) => sum + player.age, 0);
//     return totalAge / players.length;
// }

// let averageAge = calculateAverageAge();
// console.table(`Average Age of the player is :${averageAge}`);

// for (let i=0; i<= averageAge; i++){
//     if(i % 2 && i % 3 && i % 4 && i % 5  !==0){
//         console.log(i);
//     }
// }




//for in loop

// let filter1 = players.filter(player => player.id > 2);
// console.log(filter1);
// for(let key in filter1){
//     console.log(players[key]);
// }


//while loop

// let i= 0

// while (i < players.length) {
//     console.log(players[i]);
//     i++;
// }



//do while

// let i=1

// do {
//     console.log("Count number is : " + i);
//     i++;
// } while (i <= 5);



































