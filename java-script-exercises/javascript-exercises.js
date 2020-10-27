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
