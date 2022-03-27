var saveButtons = document.querySelectorAll("button");
var textAreas = document.querySelectorAll("textarea");
var currentDay = document.getElementById("currentDay");

var timer;
var currentHour = moment().format("hh")

setInterval(function() {
    timer = moment().format("MMMM Do, YYYY hh:mm:ss A");
    currentDay.textContent = timer;
}, 1000)

var userStoreageData = JSON.parse(localStorage.getItem("schedule"));
var realUserData;

if(!userStoreageData) {
    realUserData = ["","","","","","","","","",""]
} else {
    realUserData = userStoreageData;
}



var textAreaIDs = ["9-am", "10-am", "11-am", "12-pm", "13-pm", "14-pm", "15-pm", "16-pm", "17-pm", "18-pm"]
console.log(textAreas);

for (let i = 0; i < textAreas.length; i++) {
    textAreas[i].value =realUserData[i]
}


for (let i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener("click", function(){
        var userInput = textAreas[i].value.trim();
        console.log(userInput);

        realUserData[i] = userInput;
        console.log(realUserData);

        localStorage.setItem("schedule", JSON.stringify(realUserData))
    })
    
}

