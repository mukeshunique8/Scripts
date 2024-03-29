// pg2.js

function generateReport() {
    // Your existing code for generating progress report



    // Create a new progress report object
    var reportObj = {
        header: document.getElementById("topic").value,
        generatedTime: new Date().toLocaleString(),
        progressReport: document.getElementById("pgReport").value
    };

    // Save the report in local storage or any other storage mechanism
    saveReport(reportObj);

    // Display the saved reports
    displayReports();
}

function saveReport(report) {
    // Retrieve existing reports from local storage
    var existingReports = JSON.parse(localStorage.getItem("reports")) || [];

    // Add the new report to the existing reports
    existingReports.push(report);

    // Save the updated reports back to local storage
    localStorage.setItem("reports", JSON.stringify(existingReports));
}


function displayReports() {
    // Retrieve existing reports from local storage
    var existingReports = JSON.parse(localStorage.getItem("reports")) || [];

    // Reverse the order of the reports (latest report at the top)
    existingReports = existingReports.reverse();

    // Get the container to display reports
    var reportsContainer = document.getElementById("reports-container");

    // Clear the container before adding new reports
    reportsContainer.innerHTML = "";

    // Loop through the existing reports and create divs for each
    existingReports.forEach(function (report, index) {
        var reportDiv = document.createElement("div");
        reportDiv.classList.add("previousReport", "rounded-lg","flex", "space-y-4","flex-col","p-8", "m-1","bg-gray-100", "w-full","h-fit","text-sm","backdrop-blur-lg");




        var reportheader = document.createElement("div")
        reportheader.classList.add("flex","items-center","justify-between")
        reportDiv.appendChild(reportheader)
        
       

            
        // Add report header as h3 element
        var headerElement = document.createElement("h3");
        headerElement.textContent = report.header;
        headerElement.classList.add("font-semibold","text-blue-800","text-2xl","italic")
        reportheader.appendChild(headerElement);

        
        // Add generated time as h2 element
        var timeElement = document.createElement("h2");
        timeElement.textContent =  report.generatedTime;
        timeElement.classList.add("font-bold","text-sm","italic")

        reportheader.appendChild(timeElement);




       // Add progress report content
var progressElement = document.createElement("p");
progressElement.textContent = report.progressReport;

// Split the progress report text into words
var words = progressElement.textContent.split(' ');

// Wrap the first two words in a span with a custom class
if (words.length >= 2) {
    var spanElement = document.createElement("span");
    spanElement.textContent = words[0] + " " + words[1]; // Concatenate the first two words
    spanElement.classList.add("text-green-700"); // Add your custom class here
    progressElement.innerHTML = spanElement.outerHTML + " " + words.slice(2).join(' '); // Join the remaining words after the first two words
}

reportDiv.appendChild(progressElement);



        // Add button container div
        var buttonContainer = document.createElement("div");
        buttonContainer.id = "button-container"; // Add an id for styling
        buttonContainer.classList.add("flex","justify-end","w-full","space-x-16")
        
        // Add delete button
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "<ion-icon size='large'  name='trash-outline'></ion-icon>"
        deleteButton.classList.add("delete-button","hover:text-red-500");
        deleteButton.addEventListener("click", function () {
            deleteReport(index);
        });
        buttonContainer.appendChild(deleteButton);

        
        // Add copy button
        var copyButton = document.createElement("button");
        copyButton.innerHTML = "<ion-icon size='large'  name='copy-outline'></ion-icon>";
        copyButton.classList.add("copy-button","hover:text-white","hover:bg-green-500","rounded-lg","p-2");
        copyButton.addEventListener("click", function () {
            copyPreviousReport(reportDiv);
            alert("Previous Report Copied")
        });
        buttonContainer.appendChild(copyButton);

        
        // Add update button
        var updateButton = document.createElement("button");
        updateButton.innerHTML = "<ion-icon size='large' name='create-outline'></ion-icon>"
        updateButton.id = "update-btn"; // Add an id for reference
        updateButton.classList.add("update-button","hover:text-orange-600");
        updateButton.addEventListener("click", function () {
            // Get the progress report content associated with the clicked button
            var progressElement = reportDiv.querySelector("p");

            // Add the "editing" class to the progress element
            progressElement.classList.add("editing");

            // Enable contentEditable for the progress element
            progressElement.contentEditable = true;

            // Change the update button functionality for editing
            updateButton.textContent = "Save";
            updateButton.removeEventListener("click", updateButtonClick);

            // Save the updated content when the Save button is clicked
            updateButton.addEventListener("click", function () {
                // Disable contentEditable for the progress element
                progressElement.contentEditable = false;

                // Get the updated content from the progress element
                var updatedContent = progressElement.textContent;

                // Remove the "editing" class from the progress element
                progressElement.classList.remove("editing");

                // Save the updated content in the local storage
                updateReportContent(index, updatedContent);

                // Change the update button functionality back to normal
                updateButton.textContent = "Update";
                updateButton.addEventListener("click", updateButtonClick);
            });
        });

        // Function to handle the initial update button click
        function updateButtonClick() {
            // Implement your update logic here
            // This function can be left empty for now or updated based on your requirements
        }

        buttonContainer.appendChild(updateButton);

        // Add the button container div to the report div
        reportDiv.appendChild(buttonContainer);

        // Add the report div to the container
        reportsContainer.appendChild(reportDiv);
    });
}






function copyPreviousReport(reportDiv) {
    // Get the progress report content associated with the clicked button
    var progressElement = reportDiv.querySelector("p");

    // Copy the specific progress report to the clipboard
    copyTextToClipboard(progressElement.textContent);
}

function copyTextToClipboard(text) {
    // Create a temporary textarea element
    var textarea = document.createElement("textarea");

    // Set the value of the textarea to the provided text
    textarea.value = text;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text inside the textarea
    textarea.select();

    // Execute the copy command
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(textarea);
}

function deleteReport(index) {
    // Retrieve existing reports from local storage
    var existingReports = JSON.parse(localStorage.getItem("reports")) || [];

    // Use the reversed index to remove the correct report
    var reversedIndex = existingReports.length - 1 - index;
    existingReports.splice(reversedIndex, 1);

    // Save the updated reports back to local storage
    localStorage.setItem("reports", JSON.stringify(existingReports));

    // Display the updated reports
    displayReports();
}

function updateReportContent(index, updatedContent) {
    // Retrieve existing reports from local storage
    var existingReports = JSON.parse(localStorage.getItem("reports")) || [];

    // Use the reversed index to update the correct report
    var reversedIndex = existingReports.length - 1 - index;
    existingReports[reversedIndex].progressReport = updatedContent;

    // Save the updated reports back to local storage
    localStorage.setItem("reports", JSON.stringify(existingReports));

    // Display the updated reports
    displayReports();
}

// Display existing reports on page load
displayReports();


