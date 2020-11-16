// import jsonOBJ from './whitesnake.js';

// Finished by Yiting on 11/12
// 1. composition 
// 2. collections of answers and questions

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

qsContent.innerHTML = "Choose one character to listen to their testimonies";

//collections will hold the questions and answers for each character 
//user click on the name to see the full info 

let colQs = [];
let colAns = [];

function showRQs(questionsArray) {
    index++;

    if (index > questionsArray.length - 1) {
        index = 0;
    }
    qsContent.innerHTML = questionsArray[index];
    console.log(questionsArray.length)
    console.log("right click ", index)

    colQs.push(questionsArray[index]);
}


function showLQs(questionsArray) {

    index--;

    if (index < 0) {
        index = questionsArray.length - 1;
    }
    qsContent.innerHTML = questionsArray[index];

    console.log(questionsArray.length)
    console.log("left click ", index);

    colQs.push(questionsArray[index]);


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



let buttonBg = document.getElementsByTagName("button");
blue.addEventListener("click", function () {
    state = "blue";
    qsContent.innerHTML = blueArr[index];
    scoreContent.textContent = `${(blueCounter)}/4`;
    qsContent.style.color = "#5bc6ff";
    qsContent.style.transition = "all 1s";
})


red.addEventListener("click", function () {
    state = "red";
    qsContent.innerHTML = redArr[index];
    scoreContent.textContent = `${(redCounter)}/4`;
    qsContent.style.color = "#e44343";
    qsContent.style.transition = "all 1s";

})


white.addEventListener("click", function () {
    state = "white";
    qsContent.innerHTML = whiteArr[index];
    scoreContent.textContent = `${(whiteCounter)}/4`;

    //for (let i = 0; i < buttonBg.length; i++) {
        qsContent.style.color = "#e6e6e6";
        qsContent.style.transition = "all 1s";
    //}

})


green.addEventListener("click", function () {
    state = "green";
    qsContent.innerHTML = redArr[index];
    scoreContent.textContent = `${(greenCounter)}/4`;


    //for (let i = 0; i < buttonBg.length; i++) {
        qsContent.style.color = "#5acfc7";
        qsContent.style.transition = "all 1s";
    //}
})

//if qscontent is clicked, find the one it's selected and show the corresponding answers 
//only have four options of the questions 
let answers = document.getElementById("answers");
let anContent = document.createElement("p");
answers.appendChild(anContent);
anContent.id = "anContent";

let blueCounter = 0;
let redCounter = 0;
let greenCounter = 0;
let whiteCounter = 0;
let score = document.getElementById("score");
let scoreContent = document.createElement("p");
score.appendChild(scoreContent)
scoreContent.style.textAlign = "center";
scoreContent.textContent = "0/4";


//get the index - select the correponding answers 

qsContent.addEventListener("click", function () {
    if (state == "blue") {
        showAnswers(blueAnswerArr, blueCounter);
        playAudios(blueAudioArr, blueCounter); //play the audio
        if(blueCounter<4){
        blueCounter ++;
        }
    }

    if (state == "white") {
        showAnswers(whiteAnswerArr, whiteCounter);
        if(whiteCounter<4){
        whiteCounter++;
        }
    }

    if (state == "green") {
        showAnswers(greenAnswerArr, greenCounter);
        if(greenCounter<4){
        greenCounter++;
        }
    }

    if (state == "red") {
        showAnswers(redAnswerArr, redCounter);
        if(redCounter<4){
        redCounter++;
        }
    }
});


//create popup - to be finished 
function showCollections() {

        let colQsText = document.createElement("h2");
        colQsText.innerHTML = colQs[0];
        let colAnsText = document.createElement("p")
        colAnsText.innerHTML = colAns[0];
        let colDiv = document.createElement("div");
        colDiv.appendChild(colQsText);
        colDiv.appendChild(colAnsText);

        colDiv.id = "colDiv";
        colDiv.style.backgroundColor="white";

        console.log(colQsText, colAnsText);
    
}
//hyperlink the character text to show the collections of information selected by the user
let blueChar = document.getElementById("blueChar");

showCollections();

blueChar.addEventListener("click", function () {
        showCollections();
    
});
//change the state if the four for each character is finished 
//show intro information 
//show outro information - gets to vote - two buttons - show different outcome 

function showAnswers(answerArrays, counter) {
    if (counter > 3) {
        anContent.innerHTML = "It's time to move on to the next candidate"
    } else {
        anContent.innerHTML = answerArrays[index];
        console.log("counter less than 4")
        console.log("index in answers", index)
        scoreContent.textContent = `${(counter+1)}/4`;
    }
    //one question can only count once - not based on click, but based on choice?
}
let blueAudioArr = getAudio("blue");

//pause audio when it goes to another index/click 
function playAudios(audioArrays, counter) {

    let audioURL, audio;
    if (counter > 3) {
        anContent.innerHTML = "It's time to move on to the next candidate"
    } else {
        audioURL = `../${audioArrays[index]}`
        audio = new Audio(audioURL);
        audio.play(); // another click will play audio on top of each other - how to solve it 
        console.log(audio.paused)
        //scoreContent.textContent = `${(counter+1)}/4`;
      
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


//add audio - Yiting 
//dim the light - Yiting 
//voting part - two buttons - show up different result - Yiting 
//intro - Wen 