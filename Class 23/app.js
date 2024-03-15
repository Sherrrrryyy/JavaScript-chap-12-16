// alert("Hello")


// CHAP 12-13

// var Z = prompt("Enter name");
// var z = Z.toUpperCase();
// console.log("Z is: " + typeof (Z))


// if (Z == z) {
//     console.log("Uppercase")
// } else {
//     console.log("Lowercase")
// }

// var firstNum = +prompt("Enter first number")
// var secondNum = +prompt("Enter second number")

// if (firstNum == secondNum) {
//     console.log("first number and second number are equals")
// } else if (firstNum < secondNum ){
//     console.log("first number is smaller than second one")
// }
// else {
//     console.log("First number is large than second one")
// }

// var numerCount1 = +prompt("Enter first number")

// if (numerCount1 > 0) {
//     console.log("This number is positive")
// } else if (numerCount1 < 0) {
//     console.log("This number is negative")
// } else {
//     console.log("This number is zero")
// }


// var vowelChar = prompt("Enter a single vowel character")

// if (vowelChar === "a" || vowelChar === "e" || vowelChar === "i" || vowelChar === "o" || vowelChar === "u") {
//     console.log("true")
// } else {
//     console.log("False")
// }

// var firstPass = "khan123"
// var loginPass = prompt("enter tour password")


// if(loginPass == 0){
//     console.log("Please enter your password")
// } else if(loginPass === firstPass){
//     console.log("Correct! The password you entered matches the original password")
// } else{
//     console.log("incorrect password")
// }


// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// } else {
// greeting = "Good evening";
// }


// CHAP 14-16 ARRAYS


// var studentName = [];

// var newstudentName = new Array();


// var stringArray = ["Salman","Kashif","Mohammad","kaif"];
// console.log(stringArray)

// var numberArray = [100,254,542,1000];

// var booleanArray = [true, false, true, false]
// console.log(booleanArray[3])

// var mixArray = [125, "Shaheer", true, false, undefined, null,]
// console.log(mixArray)

// var qualificationArray = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil", "PHD"]
// console.log(qualificationArray)


// var nameStudent = ["Michael", "John", "Tony"]
// var scoreArray = [320, 230, 480]
// var perArray = ["64%", "46%", "96%"]
// console.log( "score of " + nameStudent[0] + " is " + scoreArray[0] + " Percentage: " + perArray[0]);
// console.log( "score of " + nameStudent[1] + " is " + scoreArray[1] + " Percentage: " + perArray[1]);
// console.log( "score of " + nameStudent[2] + " is " + scoreArray[2] + " Percentage: " + perArray[2]);


// 9a

// var colorArray = ["red", "green", "brown", "pink", "orange", "purple", "yellow"];
// console.log(colorArray);

// colorArray.unshift("black")
// console.log(colorArray)   

// 9b

// var colorsecondArray = ["red", "green", "brown", "pink", "orange", "purple", "yellow"];
// console.log(colorsecondArray);

// var ask = prompt("Enter a color")

// colorsecondArray.push("black")
// console.log(colorsecondArray)   


// 9c

// colorArray.unshift("greenish", "Darkpink")
// console.log(colorArray)   

// 9d

// colorArray.shift();
// console.log(colorArray)   

// 9e

// colorArray.pop()
// console.log(colorArray)   


// 9f

// var addArray = prompt("Enter an Index")
// var addArray = prompt("Enter a Color")

// colorArray[4] = "Dark Brown";
// console.log(colorArray)   

// 9g

// var addanArray = prompt("Enter an Index to delete")
// var addanArray = prompt("Enter a Color to delete")

// colorArray.splice(2 , 3)
// console.log(colorArray)


// var studentScore = [320, 230, 480, 120];
// console.log(studentScore)
// studentScore.sort();
// console.log(studentScore)


// var cityName = ["Karachi", "Islamabad", "Rawalpindi", "Lahore", "Gujarnawala", "Hyderabad"];
// console.log("Citied list: "  + cityName)

// selectCity = cityName.slice(2,5);
// console.log("Selected cities list: " + selectCity)


// var arr = ["This", "is", "my", "cat"];
// console.log(arr)

// document.getElementById("demo").innerHTML = arr.join();


// var devicesArray = ["Keyboard", "Mouse", "Printer", "Monitor"];
// console.log(devicesArray)

// console.log(devicesArray[0]);
// console.log(devicesArray[1]);
// console.log(devicesArray[2]);
// console.log(devicesArray[3]);

// var newdevicesArray = ["Keyboard", "Mouse", "Printer", "Monitor"];
// console.log(newdevicesArray)

// console.log(newdevicesArray[3]);
// console.log(newdevicesArray[2]);
// console.log(newdevicesArray[1]);
// console.log(newdevicesArray[0]);


// var companyArray = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>")
// for (var i=0; i < companyArray.length; i++) {
//     document.write("<option value='" + companyArray[i] + "'>" + companyArray[i] + "</option>");
// }

// document.write("</select>")