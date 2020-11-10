// import jsonOBJ from './whitesnake.js';

import jsonOBJ from './whitesnakeAudio.js'

//button click shows different stories 
let rightBtn = document.getElementById("rightBtn");
let leftBtn = document.getElementById("leftBtn");
let questions = document.getElementById("questions");
let qsContent = document.createElement("button");
questions.appendChild(qsContent);
qsContent.id = "qsContent";

let blue = document.getElementById("blue");
let white = document.getElementById("white");
let green = document.getElementById("green");
let red = document.getElementById("red");

let state = "";
let index = 0;

function getQs(color) {
    let questionArr = [];
    let contentArr;
    if (color == "blue") {
        contentArr = jsonOBJ.Blue;
    }
    if (color == "white") {
        contentArr = jsonOBJ.White;
    }
    if (color == "red") {
        contentArr = jsonOBJ.Red;
    }
    if (color == "green") {
        contentArr = jsonOBJ.Green;
    }

    contentArr.forEach(e => {
        questionArr.push(e.Question)
    });

    return questionArr;
}

//need to load the sounds first 
function getAudio(color) {
    let audioArr = [];
    let contentArr;
    if (color == "blue") {
        contentArr = jsonOBJ.Blue;
    }
    if (color == "white") {
        contentArr = jsonOBJ.White;
    }
    if (color == "red") {
        contentArr = jsonOBJ.Red;
    }
    if (color == "green") {
        contentArr = jsonOBJ.Green;
    }
    contentArr.forEach(e => {
        audioArr.push(e.Audio)
    });
    console.log(audioArr);

    return audioArr; //this shows the src of the audio files 
}


function getAns(color) {
    let answerArr = [];
    let contentArr;
    if (color == "blue") {
        contentArr = jsonOBJ.Blue;
    }
    if (color == "white") {
        contentArr = jsonOBJ.White;
    }
    if (color == "red") {
        contentArr = jsonOBJ.Red;
    }
    if (color == "green") {
        contentArr = jsonOBJ.Green;
    }
    contentArr.forEach(e => {
        answerArr.push(e.Answer)
    });
    // console.log(answerArr);

    return answerArr;

}

let blueArr = getQs("blue");
let whiteArr = getQs("white");
let greenArr = getQs("green");
let redArr = getQs("red");

// let blueAudioArr = getAudio("blue");

let blueAnswerArr = getAns("blue");
let whiteAnswerArr = getAns("white");
let greenAnswerArr = getAns("green");
let redAnswerArr = getAns("red");

// console.log(blueAnswerArr)

qsContent.innerHTML = blueArr[index];

function showRQs(questionsArray) {

    if (index >= questionsArray.length - 1) {
        index = 0;
    } else {
        index++;

    }
    qsContent.innerHTML = questionsArray[index];
    console.log(questionsArray.length)
    console.log("right click ", index)


}


function showLQs(questionsArray) {

    index--;

    if (index < 0) {
        index = questionsArray.length - 1;
    }
    qsContent.innerHTML = questionsArray[index];

    console.log(questionsArray.length)
    console.log("left click ", index);

}


rightBtn.addEventListener("click", function () {

    if (state == "blue") {
        showRQs(blueArr)
    }
    if (state == "white") {
        showRQs(whiteArr)
    }
    if (state == "green") {
        showRQs(greenArr)
    }
    if (state == "red") {
        showRQs(redArr)
    }

})

leftBtn.addEventListener("click", function () {
    if (state == "blue") {
        showLQs(blueArr)
    }
    if (state == "white") {
        showLQs(whiteArr)
    }
    if (state == "green") {
        showLQs(greenArr)
    }
    if (state == "red") {
        showLQs(redArr)
    }

})



blue.addEventListener("click", function () {
    state = "blue";
    counter = 0;
    qsContent.innerHTML = blueArr[index];

})


red.addEventListener("click", function () {
    state = "red";
    counter = 0;
    qsContent.innerHTML = redArr[index];


})


white.addEventListener("click", function () {
    state = "white";
    counter = 0;
    qsContent.innerHTML = whiteArr[index];


})


green.addEventListener("click", function () {
    state = "green";
    counter = 0;
    qsContent.innerHTML = redArr[index];


})

//if qscontent is clicked, find the one it's selected and show the corresponding answers 
//only have four options of the questions 
let answers = document.getElementById("answers");
let anContent = document.createElement("p");
answers.appendChild(anContent);
anContent.id = "anContent";
answers.style.position = "absolute";

let counter = 0;
let score = document.getElementById("score");
let scoreContent = document.createElement("p");
score.appendChild(scoreContent)
scoreContent.style.textAlign = "center";
scoreContent.textContent = "0/4";


//get the index - select the correponding answers 

qsContent.addEventListener("click", function () {
    if (state == "blue") {
        showAnswers(blueAnswerArr);
        playAudios(blueAudioArr); //play the audio
    }

    if (state == "white") {
        showAnswers(whiteAnswerArr);
    }

    if (state == "green") {
        showAnswers(greenAnswerArr);
    }

    if (state == "red") {
        showAnswers(redAnswerArr);
    }
});


//change the state if the four for each character is finished 
//show intro information 
//show outro information - gets to vote - two buttons - show different outcome 

function showAnswers(answerArrays) {

    if (counter > 3) {
        anContent.innerHTML = "It's time to move on to the next candidate"
    } else {
        anContent.innerHTML = answerArrays[index];
        console.log("counter less than 4")
        console.log("index in answers", index)
        scoreContent.textContent = `${(counter+1)}/4`;

    }
    counter++;

}
let blueAudioArr = getAudio("blue");

//pause audio when it goes to another index/click 
function playAudios(audioArrays) {

    let audioURL,audio;

    if (counter > 3) {
        anContent.innerHTML = "It's time to move on to the next candidate"
    } else {
        audioURL = `../${audioArrays[index]}`
        audio = new Audio(audioURL);
        audio.play();
        console.log(audio.paused)
        scoreContent.textContent = `${(counter+1)}/4`;
      

    }
    counter++;
}


function togglePause(myAudio) {
    if (myAudio.paused && myAudio.currentTime > 0 && !myAudio.ended) {
        myAudio.play();
        console.log("why not working")
    } else {
        myAudio.pause();
    }
}