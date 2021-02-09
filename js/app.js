'strict use';


let userName = prompt('What is your Name?');
alert(`Welcome ${userName}, I hope to enjoy in my page`);
let score = 0;

let love = prompt('Do I love programming?');
love = love.toLowerCase();
if (love === 'yes' || love === 'y') {
    //console.log('Correct');
    alert('Correct , I do love programming \n');
    score++;
}
else if (love === 'no' || love === 'n') {
    //console.log('Incorrect');
    alert('Incorrect , I do love programming \n');
}
else {
    alert('Try again');
}


let from = prompt('Am I from Amman?');
from = from.toLowerCase();
if (from === 'yes' || from === 'y') {
    //console.log('Incorrect');
    alert('Incorrect , I am from Irbid \n');
}
else if (from === 'no' || from === 'n') {
    //console.log('Correct');
    alert('Correct , I am from Irbid \n');
    score++;
}
else {
    alert('Try again');
}


let favColor = prompt('Is Orange my favourite color?');
favColor = favColor.toUpperCase();
if (favColor === 'YES' || favColor === 'Y') {
    //console.log(favColor +' Correct');
    alert('Correct , I like it \n');
    score++;
}
else if (favColor === 'NO' || favColor === 'N') {
    //console.log('Incorrect');
    alert('Incorrect , Orange is my favourite color \n');
}
else {
    alert('Try again');
}



let old = prompt('Am I 25 years old?');
old = old.toLowerCase();
if (old === 'yes' || old === 'y') {
    //console.log('Incorrect');
    alert('Incorrect , I\'m 24 years old \n');
}
else if (old === 'no' || old === 'n') {
    //console.log('Correct');
    alert('Correct , I\'m 24 years old \n');
    score++;
}
else {
    alert('Try again');
}

let noChildren = prompt('Do I have duaghter?');
noChildren = noChildren.toLowerCase();
if (noChildren === 'yes' || noChildren === 'y') {
    //console.log('Correct');
    alert('Yes her name is Lama \n');
    score++;
}
else if (noChildren === 'no' || noChildren === 'n') {
    //console.log('Incorrect');
    alert('Incorrect , I have a daughter \n');
}
else {
    alert('Try again');
}

let no_ = prompt('Guess! How many brothers and sisters does I have ?\n #### YOU HAVE 4 ATTEMPTS ####')

let attempt = 0;
do {
    if (parseInt(no_) > 6) {
        no_ = prompt('Too High ,Try Again');
    }
    else if (parseInt(no_) < 6) {
        no_ = prompt('Too Low , Try again');
    }
    else if (parseInt(no_) == 6) {
        alert('Good guessing, you Win');
        score++
        break;
    }
    attempt++;
} while (attempt !== 3);

console.log(no_);
if (parseInt(no_) !== 6) {
    alert(`Hard luck ${userName} , I have 6 brothers and sisters`);
}


let fov_lan = ['javascript', 'html', 'android','c++'];
let userinput = prompt('What is my favourite Programming languages ? \n #### YOU HAVE 6 ATTMPTS ####');
let flag = false;

//console.log(fov_lan.length);

for (let i = 0; i <= 5; i++) {

    //console.log(userinput.toLowerCase());
    for (let j = 0; j < fov_lan.length ; j++){
        //console.log(userinput.toLowerCase() === fov_lan[j]);
        if(userinput.toLowerCase() === fov_lan[j]) {
            alert(`Good Job ${userName} , I like ${fov_lan[0]} , ${fov_lan[1]} , ${fov_lan[2]} and ${fov_lan[3]}`);
            flag = true;
            score++;
            break;
        }
    }
    if(flag){
        break;
    }
    userinput = prompt('Try Again');
}
alert(`Thank you ${userName} \n your score is ${score} out of 7 , I wish to see you again`);