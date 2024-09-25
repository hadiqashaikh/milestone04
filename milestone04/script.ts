// Get references to the form and display area
let form = document.getElementById("Resume-form") as HTMLFormElement;
let resumedisplaye = document.getElementById("resume-display") as HTMLElement;

// Handle form submission
form.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // Prevent page reload


    let name = (document.getElementById("Name") as HTMLInputElement).value;
    let email = (document.getElementById("Email") as HTMLInputElement).value; 
    let phone = (document.getElementById("Phone") as HTMLInputElement).value;
    let edu = (document.getElementById("Education") as HTMLTextAreaElement).value;
    let exp = (document.getElementById("Experience") as HTMLTextAreaElement).value; 
    let skills = (document.getElementById("Skills") as HTMLTextAreaElement).value; 

    // Generate the resume content dynamically
    let ResumeHtml = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b> <span contenteditable = "true"> ${name}</span></p>
    <p><b>Email:</b> <span contenteditable = "true"> ${email}</span></p>
    <p><b>Phone:</b> <span contenteditable = "true"> ${phone}</span></p>

    <h3>Education</h3>
    <p contenteditable = "true">${edu}</p>
    <h3>Experience</h3>
    <p contenteditable = "true">${exp}</p>
    <h3>Skills</h3>
    <p contenteditable = "true">${skills}</p>
    `;

    // Display generated resume
    if (resumedisplaye) {
        resumedisplaye.innerHTML = ResumeHtml;
    } else {
        console.error("The resume display element is missing");
    }
});
