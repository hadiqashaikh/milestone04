// Get references to the form and display area
var form = document.getElementById("Resume-form");
var resumedisplaye = document.getElementById("resume-display");
// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var phone = document.getElementById("Phone").value;
    var edu = document.getElementById("Education").value;
    var exp = document.getElementById("Experience").value;
    var skills = document.getElementById("Skills").value;
    // Generate the resume content dynamically
    var ResumeHtml = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> <span contenteditable = \"true\"> ".concat(name, "</span></p>\n    <p><b>Email:</b> <span contenteditable = \"true\"> ").concat(email, "</span></p>\n    <p><b>Phone:</b> <span contenteditable = \"true\"> ").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable = \"true\">").concat(edu, "</p>\n    <h3>Experience</h3>\n    <p contenteditable = \"true\">").concat(exp, "</p>\n    <h3>Skills</h3>\n    <p contenteditable = \"true\">").concat(skills, "</p>\n    ");
    // Display generated resume
    if (resumedisplaye) {
        resumedisplaye.innerHTML = ResumeHtml;
    }
    else {
        console.error("The resume display element is missing");
    }
});
