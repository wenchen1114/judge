//button click shows different stories 
let rightBtn = document.getElementById("rightBtn");
let leftBtn = document.getElementById("leftBtn");
let questions = document.getElementById("questions");
let qsContent = document.createElement("p");
questions.appendChild(qsContent);
qsContent.id = "qsContent";

let blue = document.getElementById("blue");
let white = document.getElementById("white");
let green = document.getElementById("green");
let red = document.getElementById("red");

let state = "";
let index = 0;

let blueArr = [
    "blue1", "blue2", "blue3", "blue4", "blue5"
]

let whiteArr = [
    "white1", "white2", "white3", "white4", "white5"
]

let greenArr = [
    "green1", "green2", "green3", "green4", "green5"
]

let redArr = [
    "red1", "red2", "red3", "red4", "red5"
]


qsContent.innerHTML = blueArr[index];

function showRQs(questionsArray) {
    qsContent.innerHTML = questionsArray[index];
  
    if (index >= questionsArray.length) {
        index = 0;
    }
  index++;
}


function showLQs(questionsArray) {
    qsContent.innerHTML = questionsArray[index];
      
  if (index <= 0) {
        index = questionsArray.length;
    }
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



blue.addEventListener("click", function () {
    state = "blue";
})


red.addEventListener("click", function () {
    state = "red";
})


white.addEventListener("click", function () {
    state = "white";
})


green.addEventListener("click", function () {
    state = "green";
})
