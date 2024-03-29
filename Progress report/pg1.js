function increment1() {
    var countElement = document.getElementById("tutor-el");
    var count = parseInt(countElement.innerText);
    countElement.innerText = count + 1;
}

// Function to decrement the count
function decrement1() {
    var countElement = document.getElementById("tutor-el");
    var count = parseInt(countElement.innerText);
    
    // Ensure count doesn't go below 0
    if (count > 0) {
        countElement.innerText = count - 1;
    }
}
/*-------------------------------------------------------*/
function increment2() {
    var countElement = document.getElementById("independent-el");
    var count = parseInt(countElement.innerText);
    countElement.innerText = count + 1;
}

// Function to decrement the count
function decrement2() {
    var countElement = document.getElementById("independent-el");
    var count = parseInt(countElement.innerText);
    
    // Ensure count doesn't go below 0
    if (count > 0) {
        countElement.innerText = count - 1;
    }
}
/*-------------------------------------------------------*/


/*-------------------------------------------------------*/
function increment3() {
    var countElement = document.getElementById("exit-el");
    var count = parseInt(countElement.innerText);
    countElement.innerText = count + 1;
}

// Function to decrement the count
function decrement3() {
    var countElement = document.getElementById("exit-el");
    var count = parseInt(countElement.innerText);
    
    // Ensure count doesn't go below 0
    if (count > 0) {
        countElement.innerText = count - 1;
    }
}
/*-------------------------------------------------------*/
function increment4() {
    var countElement = document.getElementById("exitPoints-el");
    var count = parseInt(countElement.innerText);
    countElement.innerText = count + 1;
}

// Function to decrement the count
function decrement4() {
    var countElement = document.getElementById("exitPoints-el");
    var count = parseInt(countElement.innerText);
    
    // Ensure count doesn't go below 0
    if (count > 0) {
        countElement.innerText = count - 1;
    }
}

/*-------------------------------------------------------*/
function increment5() {
    var countElement = document.getElementById("bonus-el");
    var count = parseInt(countElement.innerText);
    countElement.innerText = count + 1;
}

// Function to decrement the count
function decrement5() {
    var countElement = document.getElementById("bonus-el");
    var count = parseInt(countElement.innerText);
    
    // Ensure count doesn't go below 0
    if (count > 0) {
        countElement.innerText = count - 1;
    }
}

/*-------------------------------------------------------*/

function copyText(){
    var copyReport = document.getElementById("pgReport");
    copyReport.select();
    document.execCommand("copy");
    alert("COPIED SUCCESSFULLY")
}
/*-------------------------------------------------------*/

function concatenatedValues(){



let space = " "
let quotes = '"'
let dot = "."
let input1 = document.getElementById("studentName").value.trim();
let input2 = 'worked on the topic'
let input3 = document.getElementById("topic").value.trim()
let tutorValue = parseInt(document.getElementById("tutor-el").textContent)
let independentValue = parseInt(document.getElementById("independent-el").textContent)
let exitValue = parseInt(document.getElementById("exit-el").textContent)
let exitPointsValue = parseInt(document.getElementById("exitPoints-el").textContent)
let bonusValue = parseInt(document.getElementById("bonus-el").textContent)
let ppValue = parseInt(document.getElementById("points-el").value) || 0; // Ensure ppValue is 0 if not entered
let ablePart = document.getElementById("able-el").value.trim()
let difficultyPart = document.getElementById("difficulty-el").value.trim()

let input4 = "" /*Tutor & Independent*/
let input5 = "" /*ABle &Difficulty*/
let input6 = "" /*exit ticket*/
let input7 = "" /*Bonus ticket*/
let input8 = "" /*Participation Points*/

    




if(tutorValue > 1 ){
    input4 = "The Student worked on "+tutorValue+" practice questions with the Tutor's assistance."
} else if(tutorValue === 1) {
    input4 = "The Student worked on "+tutorValue+" practice question with the Tutor's assistance."
}else if((independentValue === 1)){
    input4 = "The Student solved on "+independentValue+" practice question independently."
}else if((independentValue > 1)){
    input4 = "The Student solved on "+independentValue+" practice questions independently."
}else {
    input4 =" "
}


if((tutorValue ===1 && independentValue === 1)){
    input4 ="The Student worked on "+tutorValue+" practice question with the Tutor's assistance and solved "+independentValue+" question independently."
} else if((tutorValue ===1 && independentValue > 1)){
    input4 ="The Student worked on "+tutorValue+" practice question with the Tutor's assistance and solved "+independentValue+" questions independently."
} else if((tutorValue > 1 && independentValue === 1)){
    input4 ="The Student worked on "+tutorValue+" practice questions with the Tutor's assistance and solved "+independentValue+" question independently."
}else if((tutorValue > 1 && independentValue > 1)){
    input4 ="The Student worked on "+tutorValue+" practice questions with the Tutor's assistance and solved "+independentValue+" questions independently."
}else if ((tutorValue === 1 && independentValue === 0)) {
    input4 ="The Student worked on "+tutorValue+" practice question with the Tutor's assistance and did not attempt any independent questions."
} else if ((tutorValue > 1 && independentValue === 0)) {
    input4 ="The Student worked on "+tutorValue+" practice questions with the Tutor's assistance and did not attempt any independent questions."
} else if((tutorValue === 0  && independentValue === 1)) {
    input4 ="The Student worked on "+independentValue+" question independently."
}else if((tutorValue === 0  && independentValue > 1)) {
    input4 ="The Student worked on "+independentValue+" questions independently."
}
 else {
    input4 = " "; // Default case
}



if((ablePart.length > 0 && difficultyPart.length> 0)){
    input5 =" The Student was able to "+ablePart+" but faced difficulty with "+difficultyPart+"."
}else if(ablePart.length > 0){
    input5 =" The Student was able to "+ablePart+"."
} else if(difficultyPart.length> 0){
    input5 =" The Student faced difficulty "+difficultyPart+"."
}



if(exitValue === 0){
    input6 =" The Student did not attempt any Exit Ticket Questions."
}else if (exitValue === 1){
    input6 =" The Student attempted "+exitValue+" out of "+ exitValue+" Exit Ticket Question and secured "+exitPointsValue+" out of "+(exitValue*3)+" points for an overall score of "+Math.round(((exitPointsValue)/(exitValue*3)*100))+"%."
}else if (exitValue > 1){
    input6 =" The Student attempted "+exitValue+" out of "+ exitValue+" Exit Ticket Questions and secured "+exitPointsValue+" out of "+(exitValue*3)+" points for an overall score of "+Math.round(((exitPointsValue)/(exitValue*3)*100))+"%."
}

if(bonusValue === 0){
    input7 = " ";
} else if (bonusValue === 1){
    input7 = " "+input1+ " showcased great progress in the session by answering "+bonusValue+" additional Bonus Question. "
} else {
    input7 = " "+input1+ " showcased great progress in the session by answering "+bonusValue+" additional Bonus Questions. "

}





if(ppValue === 0){
    input8 = ""
} else if (ppValue === 1 ){
    input8 ="Participation Point: "+ppValue+"."
} else {
  input8 ="Participation Points: "+ppValue+"."
}

let resultPercentage = Math.round((exitPointsValue / (exitValue * 3)) * 100);

if( input1 !=="" && input3 !== ""){

    const  progressbarEl = document.getElementById("progress-bar")
    
    progressbarEl.classList.remove("invisible")

    var concatenated = input1+space+input2+space+quotes+input3+dot+quotes+space+input4+input5+input6+input7+input8;
    



document.getElementById("pgReport").value = concatenated;

// Calculate the result percentage

// Check if the result is a valid number
if (isNaN(resultPercentage)) {
   document.getElementById("result-el").value = "Oops";
   
} else {
   // Display the result in the input area
   document.getElementById("result-el").value = resultPercentage + "%";
}

 // Update progress bar and color
 updateProgress(resultPercentage);


// Create a new progress report object
var reportObj = {
   header: input3,
   generatedTime: new Date().toLocaleString(),
   progressReport: concatenated
};

// Save the report in local storage or any other storage mechanism
saveReport(reportObj);

// Display the saved reports
displayReports();
    
}
else{
    alert("Please Fill the Student Name & Lesson Objective")
}

}



// Function to update progress bar and color
function updateProgress(resultPercentage) {
    let masteryStatus = document.getElementById('mastery-status');
    // Set the width of the progress bar
    masteryStatus.style.width = resultPercentage + '%';

    // Remove any existing color classes
    masteryStatus.classList.remove('bg-green-500', 'bg-orange-500', 'bg-red-500', 'bg-gray-500');

    // Set the background color based on the result percentage
    if (resultPercentage > 67) {
        masteryStatus.classList.add('bg-green-500');
    } else if (resultPercentage >= 60 && resultPercentage <= 67) {
        masteryStatus.classList.add('bg-orange-500');
    } else if (resultPercentage >= 0 && resultPercentage <= 59) {
        masteryStatus.classList.add('bg-red-500');
    } else {
        masteryStatus.classList.add('bg-gray-500');
    }
}





// Function to copy the selected option to clipboard
function copySelectedComment() {
    // Your existing copy function
    var selectedComment = document.getElementById("commentOptions").value;
    copyTextToClipboard(selectedComment);

    // Add the pop effect
    var copyButton = document.getElementById("btn-tutorcmt");
    copyButton.classList.add("pop-effect");

    // Remove the pop effect after the animation ends
    copyButton.addEventListener("animationend", function () {
      copyButton.classList.remove("pop-effect");
    });
  }

  // Function to copy text to clipboard
  function copyTextToClipboard(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("Copied to clipboard: " + text);
  }

