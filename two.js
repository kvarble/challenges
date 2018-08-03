// Using the JavaScript language, have the function 
// FirstReverse(str) take the str parameter being passed and 
// return the string in reversed order. For example: if the input string is 
// "Hello World and Coders" then your program should return the string 
// sredoC dna dlroW olleH.

function FirstReverse(str) {

    let splitString = str.split("");

    let reverseArray = splitString.reverse();

    let joinArray = reverseArray.join();

    let str = joinArray;
    // code goes here  
    return str;

}

// keep this function call here 
FirstReverse(readline());