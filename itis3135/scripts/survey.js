
function validateForm() {
    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    const imageCaption = document.getElementById("imageCaption").value;
    const personalBackground = document.getElementById("personalBackground").value;
    const professionalBackground = document.getElementById("professionalBackground").value;
    const academicBackground = document.getElementById("academicBackground").value;
    const webDevelopmentBackground = document.getElementById("webDevelopmentBackground").value;
    const primaryComputerPlatform = document.getElementById("primaryComputerPlatform").value;
    const image = document.getElementById("image");
    const allowedExtensions = /(\.png|\.jpg)$/i;
    if (
        name === "" ||
        mascot === "" ||
        imageCaption === "" ||
        personalBackground === "" ||
        professionalBackground === "" ||
        academicBackground === "" ||
        webDevelopmentBackground === "" ||
        primaryComputerPlatform === ""
    ) {
        alert("Fill out all required fields.");
        return false;
    }

    if (!allowedExtensions.exec(image.value)) {
        alert("Upload a PNG or JPG image.");
        return false;
    }
    submitForm();
    return false;
}

function resetForm() {
    document.getElementById("introForm").reset();
    document.getElementById("submittedContent").innerHTML = "";
}

function submitForm() {
    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    const imageCaption = document.getElementById("imageCaption").value;
    const personalBackground = document.getElementById("personalBackground").value;
    const professionalBackground = document.getElementById("professionalBackground").value;
    const academicBackground = document.getElementById("academicBackground").value;
    const webDevelopmentBackground = document.getElementById("webDevelopmentBackground").value;
    const primaryComputerPlatform = document.getElementById("primaryComputerPlatform").value;
    const funnyThing = document.getElementById("funnyThing").value;

    const coursesContainer = document.getElementById("coursesContainer");
    const courseInputs = coursesContainer.querySelectorAll(".course");
    const courseList = [];

    courseInputs.forEach(courseInput => {
        const course = courseInput.value.trim();
        if (course !== "") {
            courseList.push(course);
        }
    });

    let courseListHTML = "<ul>";
    courseList.forEach(course => {
        courseListHTML += `<li>${course}</li>`;
    });
    courseListHTML += "</ul>";
    const imageInput = document.getElementById("image");
    const introImage = document.getElementById("introImage");
    const userImageSource = URL.createObjectURL(imageInput.files[0]);

    const submittedHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${name} || ${mascot} || ITIS 3135 Introduction</title>
            <link rel="stylesheet" href="styles/default.css">
        </head>
        <body>
            <header></header>
            <main>
                <h2>${name} ${mascot} Introduction</h2>
                <figure style="text-align: center;">
                    <img id="introImage" src="${userImageSource}" alt="Intro Image" style="max-width: 50%; height: auto;">
                    <figcaption><em>${imageCaption}</em></figcaption>
                </figure>
                
                <section>
                    <h4>Personal Background:</h4>
                    <p>${personalBackground}</p>
                    <h4>Professional Background:</h4>
                    <p>${professionalBackground}</p>
                    <h4>Academic Background:</h4>
                    <p>${academicBackground}</p>
                    <h4>Background in this Subject:</h4>
                    <p>${webDevelopmentBackground}</p>
                    <h4>Primary Computer Platform:</h4>
                    <p>${primaryComputerPlatform}</p>
                    <h4>Courses I'm Taking & Why:</h4>
                    ${courseListHTML}
                    <h4>Funny/Interesting Item to Remember me by:</h4>
                    <p>${funnyThing}</p>
                </section>
            </main>
            <footer></footer>
            <script src="scripts/HTMLInclude.js"></script>
        </body>
        </html>
    `;

    const submittedContent = document.getElementById("submittedContent");
    submittedContent.innerHTML = submittedHTML;
}
function addCourse() {
    const coursesContainer = document.getElementById("coursesContainer");
    const newCourseInput = document.createElement("input");
    newCourseInput.type = "text";
    newCourseInput.classList.add("course");
    newCourseInput.placeholder = "Course Name";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        coursesContainer.removeChild(newCourseInput);
        coursesContainer.removeChild(deleteButton);
    };

    coursesContainer.appendChild(newCourseInput);
    coursesContainer.appendChild(deleteButton);
}
