'strict use';

let userName = prompt('What is your Name?');
alert(`Welcome ${userName}, I hope to enjoy in my page`);
let score = 0;

function userAnswer(question) {
    let userInput = prompt(question);
    return userInput;
}

let myQuestions = ['Do I love programming?',
    'Am I from Amman?',
    'Is Orange my favourite color?',
    'Am I 25 years old?',
    'Do I have duaghter?',
    'Guess! How many brothers and sisters does I have ?\n #### YOU HAVE 4 ATTEMPTS ####',
    'What is my favourite Programming languages ? \n #### YOU HAVE 6 ATTMPTS ####']

let userAnswers = [' ' + ' ' + ' ' + ' ' + ' ' + ' ' + ' '];

for (let i = 0; i < 7; i++) {
    userAnswers[i] = userAnswer(myQuestions[i]);
    switch (i) {
        case 0:
            q1(userAnswers[0]);
            break;
        case 1:
            q2(userAnswers[1]);
            break;
        case 2:
            q3(userAnswers[2]);
            break;
        case 3:
            q4(userAnswers[3]);
            break;
        case 4:
            q5(userAnswers[4]);
            break;
        case 5:
            q6(userAnswers[5]);
            break;
        case 6:
            q7(userAnswers[6]);
            break;
        default:
            break;
    }
}
alert(`Thank you ${userName} \n your score is ${score} out of 7 , I wish to see you again`);

// Fuctions
function q1(answer) {
    answer = answer.toLowerCase();
    if (answer === 'yes' || answer === 'y') {
        //console.log('Correct');
        alert('Correct , I do love programming \n');
        score++;
    }
    else if (answer === 'no' || answer === 'n') {
        //console.log('Incorrect');
        alert('Incorrect , I do love programming \n');
    }
    else {
        alert('Try again');
    }
}

function q2(answer) {
    answer = answer.toLowerCase();
    if (answer === 'yes' || answer === 'y') {
        //console.log('Incorrect');
        alert('Incorrect , I am from Irbid \n');
    }
    else if (answer === 'no' || answer === 'n') {
        //console.log('Correct');
        alert('Correct , I am from Irbid \n');
        score++;
    }
    else {
        alert('Try again');
    }
}

function q3(answer) {
    answer = answer.toUpperCase();
    if (answer === 'YES' || answer === 'Y') {
        //console.log(favColor +' Correct');
        alert('Correct , I like it \n');
        score++;
    }
    else if (answer === 'NO' || answer === 'N') {
        //console.log('Incorrect');
        alert('Incorrect , Orange is my favourite color \n');
    }
    else {
        alert('Try again');
    }
}

function q4(answer) {
    answer = answer.toLowerCase();
    if (answer === 'yes' || answer === 'y') {
        //console.log('Incorrect');
        alert('Incorrect , I\'m 24 years old \n');
    }
    else if (answer === 'no' || answer === 'n') {
        //console.log('Correct');
        alert('Correct , I\'m 24 years old \n');
        score++;
    }
    else {
        alert('Try again');
    }
}

function q5(answer) {
    answer = answer.toLowerCase();
    if (answer === 'yes' || answer === 'y') {
        //console.log('Correct');
        alert('Yes her name is Lama \n');
        score++;
    }
    else if (answer === 'no' || answer === 'n') {
        //console.log('Incorrect');
        alert('Incorrect , I have a daughter \n');
    }
    else {
        alert('Try again');
    }
}

function q6(answer) {
    let attempt = 0;
    do {
        if (parseInt(answer > 6)) {
            answer = prompt('Too High ,Try Again');
        }
        else if (parseInt(answer) < 6) {
            answer = prompt('Too Low , Try again');
        }
        else if (parseInt(answer) == 6) {
            alert('Good guessing, you Win');
            score++
            break;
        }
        else {
            answer = prompt('Invalid value , Try again');
        }
        attempt++;
    } while (attempt !== 3);

    //console.log(no_);
    if (parseInt(answer)) {
        alert(`Hard luck ${userName} , I have 6 brothers and sisters`);
    }
}

function q7(answer) {
    let fov_lan = ['javascript', 'html', 'android', 'c++'];
    let flag = false;

    //console.log(fov_lan.length);

    for (let i = 0; i < 5; i++) {

        //console.log(userinput.toLowerCase());
        for (let j = 0; j < fov_lan.length; j++) {
            //console.log(userinput.toLowerCase() === fov_lan[j]);
            if (answer.toLowerCase() === fov_lan[j]) {
                alert(`Good Job ${userName} , I like ${fov_lan[0]} , ${fov_lan[1]} , ${fov_lan[2]} and ${fov_lan[3]}`);
                flag = true;
                score++;
                break;
            }
        }
        if (flag) {
            break;
        }
        answer = prompt('Try Again');
    }
    if (!flag) {
        alert(`Hard luck ${userName} , I like ${fov_lan[0]} , ${fov_lan[1]} , ${fov_lan[2]} and ${fov_lan[3]}`);
    }
}