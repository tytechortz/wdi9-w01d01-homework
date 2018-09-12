//1.
// Intepolation allows the insertion of variables into strings
// example:
// const favoriteGratefulDeadSong = 'Truckin';
// console.log(' I want to hear ' + favoriteGratefulDeadSong);
// Concatenation allows strings to be added together 
// console.log('Get Back' + 'Truckin') => 'Get Back Truckin'

//2. DRY = Do Not Repeat Yourself.  We shold pay attention to it to keep code as clean and 
// readable as possinle and to save time.  The for loop is a tool with which to 
//write DRY code.

//3. When a variable is declared, it means that it will be used later in the code
  // When a variable is assigned a value, the variable starts out with that value.
  // A variable is defined when it is assigned a value.

//4.Const is used for a variable whos value will not change.
  //Let is used when the value can be re-assigned

//5.Parent directories contain other directories and files.

//6.Info about a command can be accessed with man + the command

//7.Tab completion lets you type the first letter or letters of a directory or file
  // and tab will auto complete

// PART 2

//1
/*
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b );
console.log(c > d);
console.log('Name' == 'Name');
console.log(a < b < c);
console.log(a < a < d);
console.log(e == 'Kevin');
console.log(48 == '48');
*/

//Part 3

//1. I think it is an infinite loop because there is no condition to be met to exit the loop

//2. I don't think this is an infinite loop becasue runProgram is a constant, so the 
//runProgram = false won't exit the loop

//3. 

// a variable letter is set to the string "A"
let letters = "A";
// variable i is set to 0
let i = 0;
//starting at i's value of 0, and continuing as long as i is less than 20
while (i < 20) {
    //concatentate an A onto the string letters
    letters += "A";
    //add 1 to variable i
	i++;
}
//console log variable letters
console.log(letters);


//Part 4
//1. 
// While loops have variables declared outside of the loop, and for loops
//have the conditions inside the loop.  They will both run code until a condition is met or changes.

//2.

for (let i = 0; i < 1000; i++) {
    console.log(i);
}


//3.
// The first part of the control statement is let i = 0 -this sets the starting condition for the loop
// The second part of the control statement is i < 100 -this is the condition that must be met for the loop to end
// The third part of the control statement is i++ -this tells how i will change on each loop, in this case adding 1 to i each loop.

//4.

for (let i = 999; i >= 0; i--) {
    console.log(i);
}


for (let i = 1; i <= 10; i++) {
    console.log('The value of i is ' + i + ' of 10');
}