/* // Q1
let x = 5;
alert("-9*3 = " + -9*3);
alert("Value is " + 50);
alert("17%5 = " + 17%5);
alert("5%17 = " + 5%17);
alert("5/10 = " + 5/10);
alert(4==4);
alert(4 != 5);
alert(7 <= 8);
alert(Math.ceil(x) - Math.floor(x));

// Q2
alert(prompt("Enter Number"));

// Q3
let num1 = prompt("Enter Number 1");
let num2 = prompt("Enter Number 2");

( num1 > num2 ) ? alert( num2 + " " + num1 ) : alert( num1 + " " + num2 );

// Q4
num1 = prompt("Enter Number 1");
num2 = prompt("Enter Number 2");

( num1 > num2 ) ? alert( num1 ) : alert( num2 ); 

// Q5
num1 = prompt("Enter Number 1");
num2 = prompt("Enter Number 2");

alert(Number(num1) + Number(num2));

// Q6
let num6 = 5;
switch (num6) {
    case 1:
        alert(1)
        break;
    case 2:
        alert(2)
        break;
    case 3:
        alert(3)
        break;
    case 4:
        alert(4)
        break;
    case 5:
        alert(5)
        break;
    case 6:
        alert(6)
        break;
    case 7:
        alert(7)
        break;
    case 8:
        alert(8)
        break;
    case 9:
        alert(9)
        break;
    default:
        alert("PLEASE TRY AGAIN")
        break;
}



// Q7:

for (let index = 0; index <= 5; index++) {
    alert(index);
    
} 

// Q8:

let num8 = "";
for (let index = 0; index <= 5; index++) {

    num8 += index;
}
alert(num8);

// Q9:

for (let index = 0; index < 20; index+=3) {
        console.log(index);
} 

// Q10:
let num10 = 0;
num10 = prompt("Enter number of range 0 to 100");

while (num10 < 0 || num10 > 100) {
    num10 = prompt("missing input, Please Enter number of range 0 to 100");
}

// Q11:
let num11 = 0;
num = prompt("Enter number of range 0 to 100");

while (isNaN(num)) {
    num = prompt("missing input you most enter a number, Please Enter number of range 0 to 100");
} 


// Q12:
let num12 = prompt("Enter a number");
let sum12 = 0;
for (let index = 0; index <= num12; index++) {
    
    sum12 += index;
}
alert(sum12);

// Q13: 
let num13 = prompt("Enter a number");
let sum13 = 0;
for (let index = 0; index <= num13; index++) {
    
    sum13 += index;
}
alert(sum13 / (Number(num13) + 1));
 */

// Array Q1
function found (array, number) {

    for (let index = 0; index < array.length; index++) {
        if (array[index] === number) {
            return index;
        }
    }
    return -1;
}

// Array Q2
function missingNumber (array) {

    array.sort();

    for (let index = 0; index <= array.length; index++) {
        if (array[index] !== index+1) {
            return index+1;
        }
    }
    return -1;
}

// Array Q3
function duplicatesNumber (array1) {

    array2 = [];

    array1.sort();

    for (let index = 0; index < array1.length; index++) {

        if (!array2.includes(array1[index])) {
            array2.push(array1[index]);
        }
    }
    return array2;
}

// Array Q4
function averageNumber (array) {

    sum = 0;

    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return Math.floor(Number(sum / array.length));
}

// Array Q5
function arrayPowers (array) { 

    newArray = [];

    // for (let index = 0; index < array.length; index++) { 
    //     newArray.push(Math.pow(2, array[index]));
    // }

    // array.forEach( (value) => newArray.push(Math.pow(2, value)));

    newArray = array.map( (value) => Math.pow(2, value));

    return newArray;
}

// Array Q6
function oddOReven (array) { 
    newArray = [];

    newArray = array.map( (value) => {

        if(isNaN(value))
            return "N/A";
        return value % 2 == 0 ? "even" : "odd";
    });

    return newArray;
}

// Array Q7
function fizzbuzze (array) {

    let newArray = array.map( (value) => { 
            
        if (value % 3 === 0 && value % 5 === 0)
            return "FizzBuzz";

        else if (value % 3 === 0) 
            return "Fizz";

        else if (value % 5 === 0) 
            return "Buzz";
        
        return value;

    });

    return newArray;
}






