document.addEventListener("DOMContentLoaded", function () {
    // Load the header
    const headercont = document.querySelector("header");
    const headerinc = new XMLHttpRequest();
    headerinc.open("GET", "components/header.html", true);
    headerinc.onreadystatechange = function () {
        if (headerinc.readyState === 4 && headerinc.status === 200) {
            headercont.innerHTML = headerinc.responseText;
            
            // Initialize the dropdown functionality after the header is loaded
            initializeDropdown();
        }
    };
    headerinc.send();

    // Load the footer
    const footercont = document.querySelector("footer");
    const footerinc = new XMLHttpRequest();
    footerinc.open("GET", "components/footer.html", true);
    footerinc.onreadystatechange = function () {
        if (footerinc.readyState === 4 && footerinc.status === 200) {
            footercont.innerHTML = footerinc.responseText;
        }
    };
    footerinc.send();
});

// Function to initialize dropdown functionality
function initializeDropdown() {
    const dropdownLink = document.querySelector(".dropdown-link");
    const dropdownContent = document.querySelector(".dropdown-content");

    // Add click event listener to toggle dropdown
    dropdownLink.addEventListener("click", function () {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}
