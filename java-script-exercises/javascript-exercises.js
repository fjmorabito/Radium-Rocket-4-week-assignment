//                                                Variable and operators                                   

/* part a) create two numerical variables and use the operator sum for save the value of the sum of both numbers on a 3rd 
variable.*/

var var1 = 5;
var var2 = 25;
var var3 = var1 + var2;

/* part b) create two string type variables and concatenate them saving the result on a 3rd variable. */

var string1 = "Federico ";
var string2 = "Morabito";
var string3 = string1 + string2;

/* part c) create two string type variables and sum the long of each variable saving the result of the sum on a 3rd variable. */

var string1 = "Federico ";
var string2 = "Morabito";
var stringlenght = string1.length + string2.length;

//                                                   strings

//part a) create a variable string type with at least 10 characters, and change the text into uppercase.

var string1 = "Radium Rocket web developer program"; 
string1.toUpperCase();

//part b) create a string type variable with at least 10 characters and generate a new one with the first 5 characters from it.

var string1 = "Radium Rocket web developer program"; 
var string2 = string1.substring(0 , 4);

//part c) create a string type variable with at least 10 characters and generate a new one with the last 3 characters from it.

var string1 = "Radium Rocket web developer program"; 
var string2 = string1.substring(string1.lenght-2 , string1.length);

/*part d) create a string type variable with at least 10 characters and generate a new one with the first letter uppercased and the
 rest lowercased. Save the result in a new variable.*/

 var string1 = "Radium Rocket web developer program"; 
 var string2 = string1.substring(0,1).toUpperCase() + string1.substring(1 , string1.length).toLowerCase();

/*part e) create a string type variable with at least 10 characters and a blank space. Find the position of the first blank space
and save it on a new variable.*/

var string1 = "Radium Rocket web developer program"; 
var blankPosition = string1.indexOf(" ");

/*part f) create a type string variable with at least 2 words long. Use the methods of the above exercises to generate
 a new string that have the first letter of both words uppercased and the rest on lowercase.*/

var str = "Aggregated production";
var str2= str.substring(0,1).toUpperCase() +str.substring(1,str.indexOf(" ")).toLowerCase() +
" " + str.substring(str.indexOf(" ")+1,str.indexOf(" ")+2).toUpperCase() + str.substring(str.indexOf(" ")
+2, str.length).toLowerCase();
alert (str2);

//                                                 Arrays

/* part a) given the next array, show in console the month 5 and 11.*/

var month=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"];
console.log( month[4] , " and " , month[10]);

/* part b) sort the array of months alphabetically and show in console.*/

var month=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"];
month.sort();

/* part c) add an element at the beggining and the end of the array*/

var month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"];
month.unshift("First Element");
month.push("Last Element");
alert(month);

/* part d) remove an element at the beggining and end of the array*/

var month=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
 "Noviembre", "Diciembre"];
month.shift();
month.pop();
alert(month);

/* part e) invert the order of the array*/

var month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"];
month.reverse();
alert(month);

/* part f) Unite all the elements of the array in a single string where each month is separated by a hyphen */

var month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"];
month.join("-");

/* part g) create a copy of the array of months that contain from Mayo to Noviembre*/

var month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"];
var month2 = month.slice(4 , 11);

//                                                If Else

/* part a) create a random number between 0 and 1 using the function Math.random(), if the value is greater or equal than 0,5, 
show an alert with a message "Greater than 0,5", but an alert with a message "Lower than 0.5"  */

var randomNumber = Math.random(0 , 1);
if (randomNumber >= 0.5) {
    alert("Greater than 0,5" , randomNumber);
} else {
    alert ("Lower than 0,5" , randomNumber);
}

/* part b) Create an "Age" variable that contains an integer between 0 and 100 and displays the following alert messages:
"Bebé" if the age is less than 2 years
"Niño" if the age is between 2 and 12 years
"Adolescente" if the age is between 13 and 19 years
"Joven" if the age is between 20 and 30 years
"Adulto" between 31 and 60 years
“Adulto mayor” between 61 and 75 years
"Anciano" if older than 75 years*/

var age = Math.round(Math.random()*100);

if(age < 2) {
    alert("Bebe")
} else if (age <= 12) {
    alert("Niño")
}else if (age <= 19) {
    alert("Adolocente")
}else if (age <= 30) {
    alert("Joven")
}else if (age <=60) {
    alert("Adulto")
}else if (age <=75) {
    alert("Adulto mayor")
} else {
    alert("Anciano") 
}

//                                                  For

/* part a)  create an array that contain five words and go over the array using a loop for of JavaScript to show an alert using
each words.*/

var array1 = ["Hello" , "world" , "i" , "am" , "Federico"];
for (counter = 0; counter < array1.length; counter++) {
    alert(array1[counter]);    
}

/* part b) To the previous array, convert the first letter of each word to uppercase and show an alert for each modified word. */

var array1 = ["Hello" , "world" , "i" , "am" , "Federico"];
for (counter = 0; counter < array1.length; counter++) {
    alert(array1[counter].substring(0 , 1).toUpperCase() + array1[counter].substring (1));    
}

/*part c) Create a variable called "sentence" that has an empty string, then to the array from point a) go through it with 
a for loop to save each word within the sentence variable. At the end show a single alert with the complete chain.*/

var array1 = ["Hello" , "world" , "i" , "am" , "Federico"];
var sentence = "";
for (counter = 0 ; counter <= array1.length - 1; counter++) {
        sentence += (array1[counter]);
}
alert(sentence);

/* part d) 
Create an empty array and with a for loop of 10 repetitions, fill the array with the number of the repetition, that is, at the 
end of the execution of the for loop, there should be 10 elements within the array, from number 0 to number 9. 
Show by the browser console the to the final array*/

var array1 = [];
for(counter = 0 ; counter <= 9 ; counter++) {
     array1[counter] = counter;
}
console.log(array1);

//                                                Functions

/* part a) Create a sum function that receives two numeric values ​​and returns the result. Execute the function and save the 
result in a variable, showing the value of said variable in the browser console.*/

function sum(a , b) {
    return a + b;
}
var resSum = sum(5 , 4);
console.log(resSum);

/* part b) To the previous sum function, add a validation to control if any of the parameters is not a number, show an alert 
clarifying that one of the parameters has an error and return the NaN value as a result.*/

function sum(a , b) {
    if ( typeof a !== 'number') {
       alert("the a variable is not a number");
       return NaN;
       }   else if ( typeof b !== 'number' ) {
               alert("the b variable is not a number");
               return NaN;
           }
           else {
               return a + b;
           }
}
var resSum = sum(5 , 4);
console.log(resSum);

/* part c) Create a validate integer function that takes a number as a parameter and returns true if it is an integer.*/

function validateInteger(a) {
    if (a % 1 == 0) {
        return true;
    }
}

/* part d) 
To the sum function of exercise 6b) add a call that validates that the numbers are integers. In case there are decimals,
 show an alert with the error and return the number converted to integer (rounded).*/

function sum(a , b) {
    if ( typeof a !== 'number') {
       alert('the a variable is not a number');
       return NaN;
       }   else if ( typeof b !== 'number' ) {
               alert('the b variable is not a number');
               return NaN;
           } else if ( a % 1 != 0 || b % 1 != 0 ) {
               var result = Math.round(a + b);
                alert('One of the parameters is not integer. The result is gonna be rounded: ' + result);
                return result;
           }    else {
                    return a + b;
           }
}
console.log(sum(4 , 4.98));

/* part e) Convert the validation of exercise 6b) into a separate function and call it within the sum function, checking that
 everything continues to work the same.*/

 function validParameter(c) {
    if (typeof c !=='number') {
    alert("the parameter is not a number");
    return NaN;
    }
    return c;
}
function sum(a , b) {
    return (validParameter(a) + validParameter(b));
}
console.log(sum(5 , "mayo"));