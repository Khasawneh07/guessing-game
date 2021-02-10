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
            userAnswers[0] = userAnswers[0].toLowerCase();
            if (userAnswers[0] === 'yes' || userAnswers[0] === 'y') {
                //console.log('Correct');
                alert('Correct , I do love programming \n');
                score++;
            }
            else if (userAnswers[0] === 'no' || userAnswers[0] === 'n') {
                //console.log('Incorrect');
                alert('Incorrect , I do love programming \n');
            }
            else {
                alert('Try again');
            }
            break;
        case 1:
            userAnswers[1] = userAnswers[1].toLowerCase();
            if (userAnswers[1] === 'yes' || userAnswers[1] === 'y') {
                //console.log('Incorrect');
                alert('Incorrect , I am from Irbid \n');
            }
            else if (userAnswers[1] === 'no' || userAnswers[1] === 'n') {
                //console.log('Correct');
                alert('Correct , I am from Irbid \n');
                score++;
            }
            else {
                alert('Try again');
            }
            break;
        case 2:
            userAnswers[2] = userAnswers[2].toUpperCase();
            if (userAnswers[2] === 'YES' || userAnswers[2] === 'Y') {
                //console.log(favColor +' Correct');
                alert('Correct , I like it \n');
                score++;
            }
            else if (userAnswers[2] === 'NO' || userAnswers[2] === 'N') {
                //console.log('Incorrect');
                alert('Incorrect , Orange is my favourite color \n');
            }
            else {
                alert('Try again');
            }
            break;
        case 3:
            userAnswers[3] = userAnswers[3].toLowerCase();
            if (userAnswers[3] === 'yes' || userAnswers[3] === 'y') {
                //console.log('Incorrect');
                alert('Incorrect , I\'m 24 years old \n');
            }
            else if (userAnswers[3] === 'no' || userAnswers[3] === 'n') {
                //console.log('Correct');
                alert('Correct , I\'m 24 years old \n');
                score++;
            }
            else {
                alert('Try again');
            }
            break;
        case 4:
            userAnswers[4] = userAnswers[4].toLowerCase();
            if (userAnswers[4] === 'yes' || userAnswers[4] === 'y') {
                //console.log('Correct');
                alert('Yes her name is Lama \n');
                score++;
            }
            else if (userAnswers[4] === 'no' || userAnswers[4] === 'n') {
                //console.log('Incorrect');
                alert('Incorrect , I have a daughter \n');
            }
            else {
                alert('Try again');
            }
            break;
        case 5:
            let attempt = 0;
            do {
                if (parseInt(userAnswers[5]) > 6) {
                    userAnswers[5] = prompt('Too High ,Try Again');
                }
                else if (parseInt(userAnswers[5]) < 6) {
                    userAnswers[5] = prompt('Too Low , Try again');
                }
                else if (parseInt(userAnswers[5]) == 6) {
                    alert('Good guessing, you Win');
                    score++
                    break;
                }
                else {
                    userAnswers[5] = prompt('Invalid value , Try again');
                }
                attempt++;
            } while (attempt !== 3);

            //console.log(no_);
            if (parseInt(userAnswers[5])) {
                alert(`Hard luck ${userName} , I have 6 brothers and sisters`);
            }
            break;
        case 6:
            let fov_lan = ['javascript', 'html', 'android', 'c++'];
            let flag = false;

            //console.log(fov_lan.length);

            for (let i = 0; i < 5; i++) {

                //console.log(userinput.toLowerCase());
                for (let j = 0; j < fov_lan.length; j++) {
                    //console.log(userinput.toLowerCase() === fov_lan[j]);
                    if (userAnswers[6].toLowerCase() === fov_lan[j]) {
                        alert(`Good Job ${userName} , I like ${fov_lan[0]} , ${fov_lan[1]} , ${fov_lan[2]} and ${fov_lan[3]}`);
                        flag = true;
                        score++;
                        break;
                    }
                }
                if (flag) {
                    break;
                }
                userAnswers[6] = prompt('Try Again');
            }
            if (!flag) {
                alert(`Hard luck ${userName} , I like ${fov_lan[0]} , ${fov_lan[1]} , ${fov_lan[2]} and ${fov_lan[3]}`);
            }
            break;
        default:
            break;
    }
}
alert(`Thank you ${userName} \n your score is ${score} out of 7 , I wish to see you again`);