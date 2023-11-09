document.addEventListener("DOMContentLoaded", function () {
    const headercont = document.querySelector("header");
    const headerinc = new XMLHttpRequest();
    headerinc.open("GET", "components/header.html", true);
    headerinc.onreadystatechange = function () {
        if (headerinc.readyState === 4 && headerinc.status === 200) {
            headercont.innerHTML = headerinc.responseText;
        }
    };
    headerinc.send();

    const footercont = document.querySelector("footer");
    const footerinc = new XMLHttpRequest();
    footerinc.open("GET", "components/footer.html", true);
    footerinc.onreadystatechange = function () {
        if (footerinc.readyState === 4 && footerinc.status === 200) {
            footercont.innerHTML = footerinc.responseText;

            document.getElementById("validation_link_html").setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
            document.getElementById("validation_link_css").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);
        }
    };
    footerinc.send();
});
