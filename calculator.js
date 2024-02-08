
// VanillaTilt initialization
VanillaTilt.init(document.querySelector(".container"), {
    max: 1,
    speed: 400,
    glare: true,
    "max-glare": 0.1
});

var questionGenerated = false;
var answerGenerated = false;
var copyButtonClicked = false;




var additionScripts = [
    "The sum of", "The total of", "The result of adding", "Adding", "Summing up", "The addition of",
    "The combined total of", "The result of summing", "Summing", "The outcome of adding"
  ];
  
  var subtractionScripts = [
    "The difference between", "The subtraction result of", "Subtracting", "Minus", "The result of subtracting",
    "The remaining value after subtracting", "The outcome of subtraction", "Subtraction yields",
    "The result after deducting", "The subtraction of"
  ];
  
  var multiplicationScripts = [
    "The product of", "The result of multiplying", "Multiplying", "Times", "The multiplication of",
    "The outcome of multiplication", "The value when multiplied", "Multiplication yields",
    "The total after multiplying", "The product obtained by multiplying"
  ];
  
  var divisionScripts = [
    "The quotient of", "The result of dividing", "Dividing", "Divided by", "The division of",
    "The outcome of division", "The value when divided", "Division yields",
    "The result after division", "The quotient obtained by dividing"
  ];
var additionQuestionScripts = [
    "What is the sum of", "What is the total of", "What is the result of adding", "What is the addition of",
    "What is the combined total of", "What is the result of summing", "What is the outcome of adding"
];

var subtractionQuestionScripts = [
    "What is the difference of", "What is the result of subtracting", "What is the remaining value after subtracting",
    "What is the outcome of subtraction", "What is the result after deducting", "What is the subtraction of"
];

var multiplicationQuestionScripts = [
    "What is the product of", "What is the result of multiplying", "What is the value when multiplied",
    "What is the total after multiplying", "What is the product obtained by multiplying"
];

var divisionQuestionScripts = [
    "What is the quotient of", "What is the result of dividing", "What is the value when divided",
    "What is the result after division", "What is the quotient obtained by dividing"
];



// Function to clear input
function clearInput() {
    document.calc.txt.value = '';
    copyButtonClicked = false;
    questionGenerated = false;
    answerGenerated = false;
}

// Function to append input value
function appendInput(value) {
    document.calc.txt.value += value;
}

// Function to generate random script
function getRandomScript(scriptArray) {
    return scriptArray[Math.floor(Math.random() * scriptArray.length)];
}
// Function to generate question
function generateQuestion() {
    var input = document.calc.txt.value;
    if (input.trim() !== '') {
        var questionScript = "";
        var operator = '';
        var operatorWord = '';

        if (input.includes('+')) {
            questionScript = getRandomScript(additionQuestionScripts);
            operator = '+';
            operatorWord = ' and ';
        } else if (input.includes('-')) {
            questionScript = getRandomScript(subtractionQuestionScripts);
            operator = '-';
            operatorWord = ' and ';
        } else if (input.includes('*')) {
            questionScript = getRandomScript(multiplicationQuestionScripts);
            operator = '*';
            operatorWord = ' times ';
        } else if (input.includes('/')) {
            questionScript = getRandomScript(divisionQuestionScripts);
            operator = '/';
            operatorWord = ' by ';
        }

        var numbers = input.split(operator);
        var finalQuestion = questionScript + " " + numbers[0].trim() + operatorWord + numbers[1].trim() + "?";
        var questionContainer = document.getElementById("questionContainer");
        questionContainer.innerText = finalQuestion;

        questionGenerated = true;
    }
}

// Function to generate answer
function generateAnswer() {
    var input = document.calc.txt.value;
    if (input.trim() !== '') {
        var result = eval(input);
        var answerScript = "";
        var operator = '';
        var operatorWord = '';

        if (input.includes('+')) {
            answerScript = getRandomScript(additionScripts);
            operator = '+';
            operatorWord = ' and ';
        } else if (input.includes('-')) {
            answerScript = getRandomScript(subtractionScripts);
            operator = '-';
            operatorWord = ' and ';
        } else if (input.includes('*')) {
            answerScript = getRandomScript(multiplicationScripts);
            operator = '*';
            operatorWord = ' times ';
        } else if (input.includes('/')) {
            answerScript = getRandomScript(divisionScripts);
            operator = '/';
            operatorWord = ' by ';
        }

        var numbers = input.split(operator);
        var finalAnswer = answerScript + " " + numbers[0].trim() + operatorWord + numbers[1].trim() + " is " + result + ".";
        var answerContainer = document.getElementById("answerContainer");
        answerContainer.innerText = finalAnswer;

        answerGenerated = true;
    }
}
// Function to copy question to clipboard
function copyQuestion() {
    const questionContainer = document.getElementById("questionContainer");
    const questionText = questionContainer.innerText;

    navigator.clipboard.writeText(questionText)
        .then(() => {
            const copyButton = document.querySelector(".question-copy-button");
            copyButton.classList.add("clicked");

            setTimeout(() => {
                copyButton.classList.remove("clicked");
            }, 1000);
        })
        .catch((error) => {
            console.error("Error copying question:", error);
        });
}
// Function to copy Answer to clipboard
function copyAnswer() {
    const questionContainer = document.getElementById("answerContainer");
    const questionText = questionContainer.innerText;

    navigator.clipboard.writeText(questionText)
        .then(() => {
            const copyButton = document.querySelector(".answer-copy-button");
            copyButton.classList.add("clicked");

            setTimeout(() => {
                copyButton.classList.remove("clicked");
            }, 1000);
        })
        .catch((error) => {
            console.error("Error copying question:", error);
        });
}


///////////////////////////////////////////////////////////////////////////

// Variable to track if the keyboard event listener is enabled
var isKeyboardEventListenerEnabled = true;

// Function to toggle the keyboard event listener
function toggleKeyboardEventListener(enable) {
    if (enable) {
        document.addEventListener("keydown", keyboardEventListener);
    } else {
        document.removeEventListener("keydown", keyboardEventListener);
    }
}

// Keyboard event listener
function keyboardEventListener(event) {
    var keyValue = event.key;

    // Handle keyboard input
    if (
        (!isNaN(keyValue) || keyValue === '.' || ['+', '-', '*', '/', 'Enter', '='].includes(keyValue) || (keyValue === 'c' && copyButtonClicked)) &&
        // Exclude spaces, backspaces, and deletes
        !['Space', 'Backspace', 'Delete'].includes(event.code)
    ) {
        if (keyValue === 'Enter' || keyValue === '=') {
            if (!questionGenerated || !answerGenerated || copyButtonClicked) {
                generateQuestion();
                generateAnswer();
                questionGenerated = true;
                answerGenerated = true;
            }
            if (!copyButtonClicked) {
                copyQuestion();
                copyButtonClicked = true;
            }
        } else if (keyValue === 'c') {
            clearInput();
        } else {
            appendInput(keyValue);
        }
        event.preventDefault();
        event.stopPropagation(); // Stop the event from propagating further
    } else if (event.code === "Backspace" || event.code === "Delete") {
        clearInput();
        event.preventDefault();
        event.stopPropagation(); // Stop the event from propagating further
    }
}

// Click event listener to toggle the keyboard event listener
document.addEventListener("click", function (event) {
    var clickedElementId = event.target.id;

    // List of input field IDs to check
    var inputFieldIds = ['studentName', 'topic', 'able-el', 'difficulty-el','points-el'];

    // Check if the clicked element is one of the specified input fields
    if (inputFieldIds.includes(clickedElementId)) {
        // Disable the keyboard event listener
        toggleKeyboardEventListener(false);
    } else {
        // Enable the keyboard event listener
        toggleKeyboardEventListener(true);
    }
});

// Initial enable of the keyboard event listener
toggleKeyboardEventListener(true);


///////////////////////////////////////////////////////////////////


function regenerateScriptSentence() {
    var input = document.calc.txt.value.trim();
    if (input !== '') {
        generateQuestion();
        generateAnswer();
    }
}
// *************************************
function copyText(text) {
    navigator.clipboard.writeText(text);
  }



//   ***********************************

function updateAnswer(selectedOption) {
    var answerText = document.getElementById("answerText");
    answerText.textContent = "The correct answer is option " + selectedOption+".";
}

function copyTextAnswer() {
    var answerText = document.getElementById("answerText");
    var textToCopy = answerText.textContent;
    var textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    // alert("Copied to clipboard: " + textToCopy);
}


