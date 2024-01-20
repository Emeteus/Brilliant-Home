document.addEventListener("DOMContentLoaded", function () {
    var languageButton = document.getElementById("languageButton");
    var languageList = document.querySelector(".language-list");

    languageButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent the click event from reaching the document
        languageList.classList.toggle("active");
    });

    document.addEventListener("click", function () {
        languageList.classList.remove("active");
    });

    // Prevent closing the dropdown when clicking inside it
    languageList.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    function changeLanguage(languageCode) {
        // Implement language change logic here
        console.log("Selected language:", languageCode);
        languageList.classList.remove("active");
    }

    // Ensure the language list is closed when the document is clicked
    document.addEventListener("click", function () {
        languageList.classList.remove("active");
    });
});
