

//function expression and declaration

const bikeNames = [
    {
        name: "MT-15",
        regiNumber: 9812,
        model: 2022,
        price: 200000,
    },
    {
        name: "R15",
        regiNumber: 3700,
        model: 2021,
        price: 250000,
    },
    {
        name: "RR-310",
        regiNumber: 1999,
        model: 2020,
        price: 300000,
    },
    {
        name: "ninja",
        regiNumber: 1412,
        model: 2023,
        price: 400000,
    },
];


//function declartion

// let number = prompt("Enter your registed bike number :" );  
// let regiNumber = parseInt(number);

// if (isNaN(regiNumber) || regiNumber === number) {
//     alert("dont enter words use number!");
// } else {
//     function bikeTrace() {
//         if (number === regiNumber) {
//             console.log(`The entered registration number TN- ${regiNumber} is not here...!!!`);
//         } else {
//             console.log(`The entered registration number TN-${regiNumber} is  here...!!!`);
//         }
//     }
//     bikeTrace();

// }


//function expression with argument passing

// let calculate = function(operation) {
//     return function(a, b) {
//         if (operation === 'add') {
//             return a + b;
//         } else if (operation === 'subtract') {
//             return a - b;
//         }
//         else {
//             return "Invalid operation";
//         }
//     };
// };

// let addFunction = calculate('add');
// let subtractFunction = calculate('subtract');

// console.log(addFunction(5, 3));      
// console.log(subtractFunction(8, 4)); 


//immediately invoked function

let favBike = "MT-15";
(function race() {
    if (favBike === "MT" || favBike === "R15") {

        
    
        return trackRace();
    } else {
        console.log("Riyaz's Favourite bike is not here...!!!");
    }
})();

function trackRace() {
    console.log(`${favBike} is Riyaz's Favourite Bike  `);
}


//return function
function square(x) {
    return x * x;
}
let squared2 = square(4); 
console.log(squared2);
        







