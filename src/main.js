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


//finished on 11/16 
// 1. save collections for each character in separate arrays
// 2. better UI for selections prior to judge 
// 3. database edits done
// 4. fixed audio - declared audio outside of the function so it will replace the src 
// 5. added more ui for smoother transition 


// to do 
// 11/16 night 
// 1. voice over recording 
// 2. four small circles 


import jsonOBJ from './whitesnakeAudio.js'

//button click shows different stories 
let rightBtn = document.getElementById("rightBtn");
let leftBtn = document.getElementById("leftBtn");
let questions = document.getElementById("questions");
let qsContent = document.createElement("button");
questions.appendChild(qsContent);

qsContent.id = "qsContent";
qsContent.className = "Qs";

let blue = document.getElementById("blue");
let white = document.getElementById("white");
let green = document.getElementById("green");
let red = document.getElementById("red");
let bgAnim = document.getElementById("bgAnim");

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

//fix the sound names 
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

qsContent.innerHTML = "Click on one character to listen to their tesimonies";

//why do you have to click the right button and then select the question to make sure they appear in order? 

function showRQs(questionsArray) {
    console.log(state);
       
    index++;
    if (index > questionsArray.length - 1) {
        index = 0;
    }


    if (state == "blue") {
        blueColQs.push(questionsArray[index]);
        console.log("blueColQs",blueColQs)

    }
    if (state == "red") {
        redColQs.push(questionsArray[index]);
    }
    if (state == "white") {
        whiteColQs.push(questionsArray[index]);
        console.log(qsContent.innerHTML, "qscontent")

    }
    if (state == "green") {
        greenColQs.push(questionsArray[index]);

    }
  //avoid undefined  
 
  qsContent.innerHTML = questionsArray[index];


  
}

//when i click the charatcer name, should show the corresponding lists 

function showLQs(questionsArray) {
    index--;
    if (index < 0) {
        index = questionsArray.length - 1;
    }

    if (state == "blue") {
        blueColQs.push(questionsArray[index]);
    }
    if (state == "red") {
        redColQs.push(questionsArray[index]);
    }
    if (state == "white") {
        whiteColQs.push(questionsArray[index]);
    }
    if (state == "green") {
        greenColQs.push(questionsArray[index]);
    }
    qsContent.innerHTML = questionsArray[index];

    console.log(questionsArray.length)
    console.log("left click ", index);

}


rightBtn.addEventListener("click", function () {

    if (state == "blue") {
        console.log("1");
        showRQs(blueArr);
        blue.style.animation = "none";
        blue.offsetHeight;
        blue.style.animation = null;
    }else if (state == "white") {
        console.log("2");
        showRQs(whiteArr);
        white.style.animation = "none";
        white.offsetHeight;
        white.style.animation = null;
    }else if (state == "green") {
        console.log("3");
        showRQs(greenArr);
        green.style.animation = "none";
        green.offsetHeight;
        green.style.animation = null;
    }else if (state == "red") {
        console.log("4");
        showRQs(redArr);
        red.style.animation = "none";
        red.offsetHeight;
        red.style.animation = null;
    }

})

leftBtn.addEventListener("click", function () {
    if (state == "blue") {
        showLQs(blueArr);
        blue.style.animation = "none";
        blue.offsetHeight;
        blue.style.animation = null;
    }
    if (state == "white") {
        showLQs(whiteArr);
        white.style.animation = "none";
        white.offsetHeight;
        white.style.animation = null;
    }
    if (state == "green") {
        showLQs(greenArr);
        green.style.animation = "none";
        green.offsetHeight;
        green.style.animation = null;
    }
    if (state == "red") {
        showLQs(redArr);
        red.style.animation = "none";
        red.offsetHeight;
        red.style.animation = null;
    }

})



let buttonBg = document.getElementsByClassName("Qs");
blue.addEventListener("click", function () {
    index = 0;
    state = "blue";
    counter = 0;
    blueList.innerHTML = ""
    for (const circle of circles) {

        circle.style.opacity=1;
        console.log(circle);
      }
    qsContent.innerHTML = blueArr[index];
    //change button bg color 
    for (let i = 0; i < buttonBg.length; i++) {
        buttonBg[i].style.color = "#4da7db";

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
    for (const circle of circles) {

        circle.style.opacity=1;
        console.log(circle);
      }
    redList.innerHTML = ""
    for (let i = 0; i < buttonBg.length; i++) {
        buttonBg[i].style.color = "#ef4747";

    }

    disableBtn(red);

})


white.addEventListener("click", function () {

    index = 0;
    state = "white";
    counter = 0;
    for (const circle of circles) {

        circle.style.opacity=1;
        console.log(circle);
      }
    qsContent.innerHTML = whiteArr[index];
    whiteList.innerHTML = ""

    for (let i = 0; i < buttonBg.length; i++) {
        buttonBg[i].style.color = "#e6e6e6";

    }


    disableBtn(white);

})


green.addEventListener("click", function () {

    index = 0;
    greenList.innerHTML = ""
    state = "green";
    counter = 0;
    for (const circle of circles) {

        circle.style.opacity=1;
        console.log(circle);
      }
    qsContent.innerHTML = redArr[index];


    for (let i = 0; i < buttonBg.length; i++) {
        buttonBg[i].style.color = "#5acfc7";

    }
    disableBtn(green);

})

//if qscontent is clicked, find the one it's selected and show the corresponding answers 
//only have four options of the questions 
let answers = document.getElementById("answers");
let anContent = document.createElement("p");
answers.appendChild(anContent);
anContent.id = "anContent";

//convert the scorecontent into four tiny circles and dim one by one 
// color code it as well 
let counter = 0;
let score = document.getElementById("score");
let scoreContent = document.createElement("p");
score.appendChild(scoreContent)
scoreContent.style.textAlign = "center";
scoreContent.textContent = "0/4";
let blueAudioArr = getAudio("blue");
let redAudioArr = getAudio("red");
let whiteAudioArr = getAudio("white");
let greenAudioArr = getAudio("green");

let circleDiv = document.getElementById("circles");
let circles = circleDiv.children;
let circle = circles[counter];
//initialize circles to be 1 
for (const circle of circles) {
    circle.style.opacity=1;
  }

//get the index - select the correponding answers 
qsContent.addEventListener("click", function () {

    if (state == "blue") {
        //should incorporate audio and answer together later 
        playAudios(blueAudioArr, index); //play the audio

        showAnswers(blueAnswerArr, index, blue, blueChar);
        showEnding(stateCounter);
        if(state != "done"){
        blue.style.animation = `shakeBlue 5s`;

        }
    }

    if (state == "white") {
        showAnswers(whiteAnswerArr, index, white, whiteChar);
        console.log(stateCounter);
        showEnding(stateCounter);
        if(state != "done"){
        white.style.animation = "shakeWhite 5s";
        }
        playAudios(whiteAudioArr, index); //play the audio


    }

    if (state == "green") {
        showAnswers(greenAnswerArr, index, green, greenChar);
        console.log(stateCounter);
        showEnding(stateCounter);
        if(state != "done"){
        green.style.animation = "shakeGreen 5s";
        }
        playAudios(greenAudioArr, index); //play the audio

    }

    if (state == "red") {
        showAnswers(redAnswerArr, index, red, redChar);
        console.log(stateCounter);
        showEnding(stateCounter);
        if(state != "done"){
        red.style.animation = "shakeRed 5s";
        }
        playAudios(redAudioArr, index); //play the audio


    }

});

let gotoMid = document.getElementById("gotoMid");

gotoMid.addEventListener("click", function () {
    mid.style.display = "flex";
    end.style.display = "none";
})

//END - final stage to judge 
let whiteBtn = document.getElementById("whiteBtn");
// let whiteBtnChar = document.getElementById("whiteBtnChar");
let redBtn = document.getElementById("redBtn");
// let redBtnChar = document.getElementById("redBtnChar");
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
    bgAnim.style.display = "none";
    let crowdAudio =document.getElementById("crowdAudio");
    crowdAudio.pause();

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

// click change my mind - RESET lots of stuff 
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

//prompt users to click the names to learn more information
let allInfo = document.getElementById("allInfo");

function showEnding(stateCounter) {
    //if there are four times of the DONE, then show the END 
    //you can change the number to 1 for debugging, change back to 4 when you are done 
    if (stateCounter == 4) {
        allInfo.style.display = "block";
        console.log('stateCounter in showending', stateCounter);
        anContent.innerHTML= `
        <p>It's time to move on make your final decision, Judge.</p>
        <br>
        <p>Click the character names to learn what you already know.</p>`

    }
}

//user ready to judge 
let ready = document.getElementById("ready");
ready.addEventListener("click", function () {
    bgAnim.style.display = "none";
    intro.style.display = "none";
    mid.style.display = "none";
    bgAnim.style.display = "none";
    end.style.display = "block";
 
    //pause the audio when it is on the judgement screen 
    audio.pause();
})

//create different popup windoes for each characters 
let bluePopUp = document.getElementById("bluePopUp");
let whitePopUp = document.getElementById("whitePopUp");
let greenPopUp = document.getElementById("greenPopUp");
let redPopUp = document.getElementById("redPopUp");
let blueList = document.getElementById("blueList");
let whiteList = document.getElementById("whiteList");
let redList = document.getElementById("redList");
let greenList = document.getElementById("greenList");

//create answers and questions array for each character 
let blueColAns = [];
let blueColQs = [];
let redColAns = [];
let redColQs = [];
let whiteColAns = [];
let whiteColQs = [];
let greenColAns = [];
let greenColQs = [];


//click on the "X" to close each popup window
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


// should create a better indication for them to click on the name 
let blueChar = document.getElementById("blueChar");
let redChar = document.getElementById("redChar");
let whiteChar = document.getElementById("whiteChar");
let greenChar = document.getElementById("greenChar");


redChar.addEventListener("click", function () {
    disableBtn(redChar);
    redList.innerHTML = ""; //reset 
    showCollections(redPopUp, redClose, redList, redColQs, redColAns);

});
greenChar.addEventListener("click", function () {
    disableBtn(greenChar);
    greenList.innerHTML = ""; //reset 
    showCollections(greenPopUp, greenClose, greenList, greenColQs, greenColAns);

});
whiteChar.addEventListener("click", function () {
    disableBtn(whiteChar);
    showCollections(whitePopUp, whiteClose, whiteList, whiteColQs, whiteColAns);
});

blueChar.addEventListener("click", function () {
    disableBtn(blueChar);
    showCollections(bluePopUp, blueClose, blueList, blueColQs, blueColAns);

});

let blinkText;

// still counter is not fixed I guess 
function showAnswers(answerArrays, index, col, char) {
    //index situatuion FIXED - 11/15
    let lastIndex = 0;
    if (lastIndex != index) {
        counter++;
    }

    if (counter > 3) {
        anContent.innerHTML= "It's time to move on to the next candidate."
        //dim the light 
        col.style.opacity = 0.2;
        blink(char);
        state = "done";
        if (state == "done") {
            stateCounter++;
        }
        console.log(stateCounter, 'stateCounter');
        return stateCounter;

    } else {
        anContent.innerHTML = answerArrays[index];
        // console.log("counter less than 4")
        console.log("index in answers", index)
        lastIndex = index;
        scoreContent.textContent = `${(counter+1)}/4`;

        // colAns.push(answerArrays[index]);
      
      circle  = circles[counter];
        circle.style.opacity = 0.2;
        console.log("circles", circles)


        if (answerArrays = whiteAnswerArr) {
            whiteColAns.push(answerArrays[index]);

        }
        if (answerArrays = redAnswerArr) {
            redColAns.push(answerArrays[index]);

        }
        if (answerArrays = greenAnswerArr) {
            greenColAns.push(answerArrays[index]);

        }
        if (answerArrays = blueAnswerArr) {
            blueColAns.push(answerArrays[index]);

        }

    }
    console.log("answers", anContent.innerHTML);
    // console.log("whitecolsAns", whiteColAns);


}

//popup finished on 11/16 
function showCollections(colPopUp, colClose, colList, colorQs, colorAns) {
    colList.innerHTML = "";

    for (let i = 0; i < 4; i++) {

        let colQsText = document.createElement("h2");
        colQsText.innerHTML = colorQs[i];
        let colAnsText = document.createElement("p");
        colAnsText.innerHTML = colorAns[i];

        colPopUp.style.display = "flex";
        colClose.style.display = "flex";

        if(colQsText.innerHTML=="undefined"){
            colQsText.innerHTML=""
        }
        if(colAnsText.innerHTML=="undefined"){
            colAnsText.innerHTML=""
        }
        colList.innerHTML += `
        <li>
           <h2 style='font-size:2vw'> ${colQsText.innerHTML}</h2>
           <p style='font-size:1.2vw'>${colAnsText.innerHTML}</p>
        </li>
        <br>`
        colPopUp.appendChild(colList);
        console.log("colList", colList);

    }
}


//should set the audio outside, otherwise it will be created everytime you run the function 
let audio = document.createElement("audio");
//pause audio when it goes to another index/click 
function playAudios(audioArrays, index) {

    let audioURL = `../${audioArrays[index]}`;

    audio.src = audioURL;
    if (audio.paused || !audio.played) {
        audio.play();
    } else {
        audio.pause();
    }

}


function blink(c) {
    setInterval(function() {
       c.style.display = (c.style.display == 'none' ? '' : 'none');
    }, 500);
 }

let animation = bodymovin.loadAnimation({
    container:document.getElementById('bgAnim'),
    renderer: 'svg',
    loop: false,
    autoplay:true,
    path:'data.json'
});




//add audio - Yiting - tbf
//dim the light - Yiting - DONE - 11/15 
//voting part - two buttons - show up different result - Yiting - DONE - 11/15 
//intro - Wen - Yiting - Done - 11/15 