// Question 1//
//A//
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

function total() {
  let firstElement = ages.slice(0, 1);
  let lastElement = ages.slice(-1);
  console.log(lastElement - firstElement);
}

total();
// Created a funtion called total and found each element in the array we need to subtract, printed the toal to console log subtracting the two elements. I did it one other way and got -90 and counldnt figure out why I was wrong. Which landed me on this code, when looking back I had line 8 messed up & had the firstElement subtracting the lastELement. Good lesson to learn//

//B//

ages.push(13);

//I just took the array name ages and pushed the number to the end of the exisiting array, made for some really fun average numbers//

//C//
let average = 0;
for (let number of ages) {
  average += number;
}
let averageOfAges = average / ages.length;

console.log(averageOfAges);
console.log("End 1");

// I made a variable named average and gave it the value of 0, then I ran a for loop with the parameters of number and array ages, then took the average variable += to the number. Then outside of the loop  created another variable called averageOfAges to = my variable average divided by the array ages length which was 8 then printed the answer to a console log. The code works with any number in the age push//

//Question 2 Create an array called names that contains the..... A: Use a loop to iterate through the array and calculate the average number of letters per name. B: Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.//

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//Q2A//
let averageNumberOfLettersName = names.map(function (t) {
  return t.length;
});

//console.log(averageNumberOfLettersName);//

let add = averageNumberOfLettersName.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log("Q2 A" + " " + add / names.length);

//B//
let string = "";
for (let i = 0; i < names.length; i++) {
  string += names[i] + " ";
}

console.log(string);

const cat = names.join(" ");
console.log(cat);

console.log("End 2");

// On my googling journey I stumbled across this rad join method that appends whatever value you set in the () after your array.join, this way a loop I found but we cannot see how the loop is necessarily working//

//Question 3//
let lastItemArray = names[names.length - 1];

console.log(lastItemArray);

// I also saw the pop method and reverse method, pretty slick. Finding more out that reverse method is 2nd fastest while pop is lightning quick at retrieving the element from the array//

// Prints Bob in the Console Log//
console.log("End 3");

//Question 4//

let firstItemArrays = names[0];

console.log(firstItemArrays);

console.log("End 4");
//This is how to programatically find an element in an array, in this case I took the first element Sam and printed it to the Console Log//

// This is how you access the first element in an array- I used names array as an example name//

//Question 5//

let nameLengths = [];

for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
  console.log(nameLengths);
}

console.log("End 5");
//Question 6 Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.//

let sum = 0;
for (let i = 0; i < nameLengths.length; i++) {
  sum += nameLengths[i];
}
console.log(sum);
console.log("End 6");

//Question 7 Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello')//

let word = "Hello";
let n = 4;

function tripleWord(word, n) {
  for (let i = 0; i < n; i++) {
    return word;
  }
}
let result = tripleWord(word, n);

let thisFunction = (word, n) => {
  for (let i = 0; i < n; i++) {
    result += word;
  }
  return result;
};

console.log(thisFunction(word, n));
console.log("End 7");

//Question 8 Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space./

let firstName = "Troy";
let lastName = "Ericson";

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log(fullName(firstName, lastName));
console.log("End 8");

//Question 9 Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.//

let numbers = [1, 2, 3, 4, 5, 6, 10];

let arrayOfNumbers = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});

console.log(arrayOfNumbers >= 100);

console.log("End 9");

//Question 10 Write a function that takes an array of numbers and returns the average of all the elements in the array.//

let randomNumber = [17, 10, 7, 3, 63, 101];

let blackCat = randomNumber.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(blackCat / randomNumber.length);

console.log("End 10");

//Question 11 Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.//
let basesballs = [2, 4, 6, 8, 10, 12];
let basketballs = [1, 3, 5, 7, 9, 11];

function cheese(basesballs, basketballs) {
  let spice = basesballs.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  let pepper = basketballs.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  if (spice > pepper == true) {
    console.log(true);
  }
  return false;
}

cheese(basesballs, basketballs);

console.log("End 11");

//Question 12 Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.//

let isHotOutside = true;
let moneyInPocket = 1;

function buyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside == true) {
    if (moneyInPocket >= 10.5);
    {
      return true;
    }
  }
  return false;
}

buyDrink();

console.log(buyDrink(isHotOutside, moneyInPocket));

console.log("End 12");

//Question 13 Create a function of your own that solves a problem. In comments, write what the function does and why you created it.//

let abc = 3;
let def = 5;
let ghi = 7;

function addtionTotal(abc, def, ghi) {
  return abc + def + ghi;
}

addtionTotal(abc, def, ghi);

console.log(addtionTotal(abc, def, ghi));
console.log("End 13");
// I created a function that takes 3 variables and adds them up, then prints it to the console log. I created it cause it is something that is a simple tool used often and can be modified for many uses//
