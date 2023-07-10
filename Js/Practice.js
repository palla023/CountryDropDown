let num = 5.5;

if(Number.isInteger(num)){

    console.log(`${num}is Integer`);

}else{

    console.log(`${num} is Constant`);

}




let number = 5;

if(number%1 === 0){

    console.log(`${num} is Integer`);

}else{

    console.log(`${num} is Constant`);

}




//2. Check Vowel or Constant

function checkLetter(char){

    char = char.toLowerCase();

    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ){

        console.log(`${char} is Vowel`)

    }else{

        console.log(`${char} is Constant`)

    }

}

checkLetter('b')




//3. Factorial by Recursion

function findFact(num){

    if (num===0 || num === 1){

        return 1;

    }else{

        return num * findFact(num-1)

    }

}

let no = 5

let result = findFact(no)

console.log(`Factorial of ${no} is ${result}`)




//js to format the date

let today = new Date();

let day = today.getDate();

let month = today.getMonth()+1;

let year = today.getFullYear();

if (day < 10){

    day = '0' + day;

}

if (month < 10){

    month = '0' + month;

}

let formattedDate1 = day + '-'+month + '-'+ year;

let formattedDate2 = day + '/'+month + '/'+ year;

console.log(formattedDate1);

console.log(formattedDate2);




//Insert an Item into array




const array = [1,2,3,4]

const newValue = 5;

const index = 3;

array.splice(index,0,newValue);

// array.splice(index,1,newValue);

console.log(array)




//Perform Intersection

function performintersection(arr1, arr2){

    return arr1.filter(val => arr2.includes(val))

}

const array1 = [1,2,3,4,5]

const array2 = [6,7,3,4,5]

let Intersectionresult = performintersection(array1, array2);

console.log(Intersectionresult)

//------------------------------------07-07-2023----------------------------------------------------//
console.log("--------------------------------Javascript Program to Check Two Arrays equal or not?--------------")
function areArraysEqual(arr1, arr2) {
    // Check length
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    // Check each element 
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  
  const array3 = [1, 2, 3, 4];
  const array4 = [1, 2, 3, 4];
  const array5 = [1, 2, 3, 5];
  
  console.log(areArraysEqual(array3, array4)); 
  console.log(areArraysEqual(array4, array5)); 
  
console.log("---------How to split a sentence into array in javascript?----------------------------")
const sentence = "This is a sample sentence.";
const words = sentence.split(" ");
console.log(words);


console.log(" --------------How can you uppercase the first character in a string array?-----------")
const strings = ["apple", "banana", "cherry"];
const capitalizedStrings = strings.map((str) => str.charAt(0).toUpperCase() + str.slice(1));
console.log(capitalizedStrings);

console.log("--------How to find max and min value in a given array in java script?--------------------")
const numbers = [5, 2, 9, 1, 7, 3];

const max = Math.max(...numbers);
const min = Math.min(...numbers);

console.log("Maximum value:", max); 
console.log("Minimum value:", min); 

console.log("----------------------How to merge two arrays and sort them in javacsript? ----------")
const arr6=[9,8,7]
const arr7=[5,3,1]
const mergedArray = arr6.concat(arr7);
const sortedArray = mergedArray.sort((a, b) => a - b);
console.log("Merged and sorted array:", sortedArray);



