'strict use';

let userName = prompt('What is your Name?');
alert(`Welcome ${userName}, I hope to enjoy in my page`);


let love = prompt('Do I love programming?');
love = love.toLowerCase();
if(love === 'yes' || love === 'y')
{
    //console.log('Correct');
    alert('Correct , I do love programming \n');
}
else if(love === 'no' || love === 'n') {
    //console.log('Incorrect');
    alert('Incorrect , I do love programming \n');
}
else {
    alert('Try again');
}


let from = prompt('Am I from Amman?');
from = from.toLowerCase();
if(from === 'yes' || from === 'y')
{
    //console.log('Incorrect');
    alert('Incorrect , I am from Irbid \n');
}
else if(from === 'no' || from === 'n') {
    //console.log('Correct');
    alert('Correct , I am from Irbid \n');
}
else {
    alert('Try again');
}


let favColor = prompt('Is Orange my favourite color?');
favColor = favColor.toUpperCase();
if(favColor === 'YES' || favColor === 'Y')
{
    //console.log(favColor +' Correct');
    alert('Correct , I like it \n');
}
else if(favColor === 'NO' || favColor === 'N') {
    //console.log('Incorrect');
    alert('Incorrect , Orange is my favourite color \n');
}
else {
    alert('Try again');
}



let old = prompt('Am I 25 years old?');
old = old.toLowerCase();
if(old === 'yes' || old === 'y')
{
    //console.log('Incorrect');
    alert('Incorrect , I\'m 24 years old \n');
}
else if(old === 'no' || old === 'n') {
    //console.log('Correct');
    alert('Correct , I\'m 24 years old \n');
}
else {
    alert('Try again');
}

let noChildren = prompt('Do I have duaghter?');
noChildren = noChildren.toLowerCase();
if(noChildren === 'yes' || noChildren === 'y')
{
    //console.log('Correct');
    alert('Yes her name is Lama \n');
}
else if(noChildren === 'no' || noChildren === 'n'){
   //console.log('Incorrect');
   alert('Incorrect , I have a daughter \n');
}
else {
    alert('Try again');   
}

alert(`Thank you ${userName} , it was very easy , I wish to see you again`)