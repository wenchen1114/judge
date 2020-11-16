// import jsonOBJ from './whitesnake.js';

// Finished by Yiting on 11/12
// 1. composition 
// 2. collections of answers and questions


// Finished by Yiting on 11/15
// 1. index 
// 2. 3 phrases UI 
// 3. dim the light
// 4. smooth transition from 16 selections to the end 


// to be finished on 11/16 
// 1. audio overlap issue 
// 2. 0/4 become four tiny circles 
// 3. database edits 
// 4. voice over 

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
let stateCounter = 0;

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

//collections will hold the questions and answers for each character 
//user click on the name to see the full info 

let colQs = [];
let colAns = [];

//why do you have to click the right button and then select the question to make sure they appear in order? 

function showRQs(questionsArray) {

    colQs.push(questionsArray[index]);

    if (index > questionsArray.length - 1) {
        index = 0;
    }
    index++;
    qsContent.innerHTML = questionsArray[index];

}

//when i click the charatcer name, should show the corresponding lists 

function showLQs(questionsArray) {

    colQs.push(questionsArray[index]);


    if (index < 0) {
        index = questionsArray.length - 1;
    }
    qsContent.innerHTML = questionsArray[index];

    console.log(questionsArray.length)
    console.log("left click ", index);

    index--;

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
    index = 0;
    state = "blue";
    counter = 0;
    blueList.innerHTML = ""

    qsContent.innerHTML = blueArr[index];
    //change button bg color 
    for (let i = 0; i < buttonBg.length; i++) {
        buttonBg[i].style.backgroundColor = "#4da7db";

    }
    disableBtn(blue);

})

function disableBtn(btn) {
    document.getElementById(btn.id).disabled = true;
    console.log(`${btn} disabled`);
}

red.addEventListener("click", function () {
    index = 0;
    state = "red";
    counter = 0;
    qsContent.innerHTML = redArr[index];
    redList.innerHTML = ""

    for (let i = 0; i < buttonBg.length; i++) {
        buttonBg[i].style.backgroundColor = "#ef4747";

    }

    disableBtn(red);

})


white.addEventListener("click", function () {
    index = 0;
    state = "white";
    counter = 0;
    qsContent.innerHTML = whiteArr[index];
    whiteList.innerHTML = ""

    for (let i = 0; i < buttonBg.length; i++) {
        buttonBg[i].style.backgroundColor = "#e6e6e6";

    }
    disableBtn(white);

})


green.addEventListener("click", function () {
    index = 0;
    greenList.innerHTML = ""
    state = "green";
    counter = 0;
    qsContent.innerHTML = redArr[index];


    for (let i = 0; i < buttonBg.length; i++) {
        buttonBg[i].style.backgroundColor = "#5acfc7";

    }
    disableBtn(green);

})

//if qscontent is clicked, find the one it's selected and show the corresponding answers 
//only have four options of the questions 
let answers = document.getElementById("answers");
let anContent = document.createElement("p");
answers.appendChild(anContent);
anContent.id = "anContent";

let counter = 0;
let score = document.getElementById("score");
let scoreContent = document.createElement("p");
score.appendChild(scoreContent)
scoreContent.style.textAlign = "center";
scoreContent.textContent = "0/4";


//get the index - select the correponding answers 
qsContent.addEventListener("click", function () {
    if (state == "blue") {
        //should incorporate audio and answer together later 

        showAnswers(blueAnswerArr, index, blue);
        // console.log(stateCounter);
        showEnding(stateCounter);
        // playAudios(blueAudioArr); //play the audio
    }

    if (state == "white") {
        showAnswers(whiteAnswerArr, index, white);
        console.log(stateCounter);
        showEnding(stateCounter);


    }

    if (state == "green") {
        showAnswers(greenAnswerArr, index, green);
        console.log(stateCounter);
        showEnding(stateCounter);


    }

    if (state == "red") {
        showAnswers(redAnswerArr, index, red);
        console.log(stateCounter);
        showEnding(stateCounter);


    }

});

let whiteBtn = document.getElementById("whiteBtn");
let whiteBtnChar = document.getElementById("whiteBtnChar");

let redBtn = document.getElementById("redBtn");
let redBtnChar = document.getElementById("redBtnChar");

let resultforWhite = document.getElementById("resultforWhite");
let resultforRed = document.getElementById("resultforRed");
let resultforBlue = document.getElementById("resultforBlue");

let gotoEnd = document.getElementById("gotoEnd");
// let gotoStart = document.getElementById("gotoStart");
let end = document.getElementById("end");
let wait = document.getElementById("wait");
let gentle = document.getElementById("gentle");
let blunt = document.getElementById("blunt");
let finalChoice = document.getElementById("finalChoice");

let intro = document.getElementById("intro");

//intro button to continue 
let next = document.getElementById("next");

//the game
let mid = document.getElementById("mid");
next.addEventListener("click", function () {
    mid.style.display = "flex";
    intro.style.display = "none";
})
whiteBtn.addEventListener("click", function () {
    resultforWhite.style.display = "block";
    redBtn.parentElement.style.display = "none";

});

redBtn.addEventListener("click", function () {

    resultforRed.style.display = "block";
    whiteBtn.parentElement.style.display = "none";
    finalChoice.style.display = "block"

});

// click change my mind - rest lots of stuff 
gotoEnd.addEventListener("click", function () {
    console.log("clicked");
    resultforRed.style.display = "none";
    whiteBtn.parentElement.style.display = "flex";
    redBtn.parentElement.style.display = "flex";
    resultforWhite.style.display = "none";
    resultforBlue.style.display = "none";
    finalChoice.style.display = "none";
    gentleText.style.display = "none";
    bluntText.style.display = "none";
    gentle.style.display = "inline-block";
    blunt.style.display = "inline-block";

})

wait.addEventListener("click", function () {
    resultforBlue.style.display = "block";

})

gentle.addEventListener("click", function () {
    document.getElementById("gentleText").style.display = "block";
    blunt.style.display = "none";
    finalChoice.style.display = "block";

});

blunt.addEventListener("click", function () {
    document.getElementById("bluntText").style.display = "block";
    gentle.style.display = "none";
    finalChoice.style.display = "block";

});

let allInfo = document.getElementById("allInfo");

function showEnding(stateCounter) {

    //if there are four times of the DONE, then show the END 
    //you can change the number to 1 for debugging, change back to 4 when you are done 
    if (stateCounter == 4) {
        allInfo.style.display = "block";
        console.log('stateCounter in showending', stateCounter)
    }
}

allInfo.addEventListener("click", function () {
    intro.style.display = "none";
    mid.style.display = "none";
    end.style.display = "block";
})

let popup = document.getElementById("pop-up");
let bluePopUp = document.getElementById("bluePopUp");
let whitePopUp = document.getElementById("whitePopUp");
let greenPopUp = document.getElementById("greenPopUp");
let redPopUp = document.getElementById("redPopUp");
let blueList = document.getElementById("blueList");
let whiteList = document.getElementById("whiteList");
let redList = document.getElementById("redList");
let greenList = document.getElementById("greenList");


//create popup - to be finished - started on 11/10 
function showCollections(colPopUp, colClose, colList) {
    colList.innerHTML = "";

    for (let i = 0; i < 4; i++) {

        let colQsText = document.createElement("h2");
        colQsText.innerHTML = colQs[i];
        let colAnsText = document.createElement("p");
        colAnsText.innerHTML = colAns[i];

        colPopUp.style.display = "flex";
        colClose.style.display = "flex";

        colList.innerHTML += `
       
            <li>
           <h2> ${colQsText.innerHTML}</h2>
           <p>${colAnsText.innerHTML}</p>
            </li>
            <br>
         
            `
        colPopUp.appendChild(colList);

        console.log("colList", colList);


    }
}

let blueClose = document.getElementById("blueClose");
blueClose.addEventListener("click", function () {

    bluePopUp.style.display = "none";
    blueClose.style.display = "none";
})

let redClose = document.getElementById("redClose");
redClose.addEventListener("click", function () {

    redPopUp.style.display = "none";
    redClose.style.display = "none";
})

let greenClose = document.getElementById("greenClose");
greenClose.addEventListener("click", function () {

    greenPopUp.style.display = "none";
    greenClose.style.display = "none";
})

let whiteClose = document.getElementById("whiteClose");
whiteClose.addEventListener("click", function () {

    whitePopUp.style.display = "none";
    whiteClose.style.display = "none";
})


// popup.addEventListener("click", function(){

//     popup.style.display="none";
// })


//hyperlink the character text to show the collections of information selected by the user
let blueChar = document.getElementById("blueChar");
let redChar = document.getElementById("redChar");
let whiteChar = document.getElementById("whiteChar");
let greenChar = document.getElementById("greenChar");

//try to store the stuff into individual array to show and clear when restart

redChar.addEventListener("click", function () {
    disableBtn(redChar);

    redList.innerHTML = ""; //reset 
    showCollections(redPopUp, redClose, redList);

    //  colQs=[];
    //     colAns=[];
});
greenChar.addEventListener("click", function () {
    disableBtn(greenChar);

    greenList.innerHTML = ""; //reset 
    showCollections(greenPopUp, greenClose, greenList);
    // colQs=[];
    //     colAns=[];

});
whiteChar.addEventListener("click", function () {

    disableBtn(whiteChar);
    whiteList.innerHTML = ""; //reset 
    showCollections(whitePopUp, whiteClose, whiteList);
    //    colQs=[];
    //     colAns=[];
});

blueChar.addEventListener("click", function () {

    disableBtn(blueChar);
    blueList.innerHTML = ""; //reset 
    showCollections(bluePopUp, blueClose, blueList);
    //   colQs=[];
    //     colAns=[];

});

function showAnswers(answerArrays, index, col) {

    //need to fix the index situation - just take the same avlue - do not count duplicate if the question is not changed 
    //index situatuion FIXED - 11/15
    let lastIndex = 0;
    if (lastIndex != index) {
        counter++;
    }

    if (counter > 3) {
        anContent.innerHTML = "It's time to move on to the next candidate"
        //dim the light 
        col.style.opacity = 0.2;
        state = "done";
        if (state == "done") {
            stateCounter++;
        }
        console.log(stateCounter, 'stateCounter');
        return stateCounter;

    } else {
        anContent.innerHTML = answerArrays[index];
        console.log("counter less than 4")
        console.log("index in answers", index)
        lastIndex = index;
        scoreContent.textContent = `${(index+1)}/4`;
        colAns.push(answerArrays[index]);

    }
    console.log("answers", anContent.innerHTML);


}
let blueAudioArr = getAudio("blue");

//pause audio when it goes to another index/click 
function playAudios(audioArrays) {

    let audioURL, audio;
    if (counter > 3) {
        anContent.innerHTML = "It's time to move on to the next candidate"
    } else {
        audioURL = `../${audioArrays[index]}`
        audio = new Audio(audioURL);
        audio.play(); // another click will play audio on top of each other - how to solve it 
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


//add audio - Yiting - tbf
//dim the light - Yiting - DONE - 11/15 
//voting part - two buttons - show up different result - Yiting - DONE - 11/15 
//intro - Wen - Yiting - Done - 11/15 