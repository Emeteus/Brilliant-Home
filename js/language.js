// Функция для сохранения текущего языка в куки
function saveLanguageToCookies(languageCode) {
    document.cookie = `currentLanguage=${languageCode}; expires=${new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString()}`;
}

// Функция для получения текущего языка из куки
function getCurrentLanguageFromCookies() {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'currentLanguage') {
            return value;
        }
    }
    return 'en'; // Возвращает "en", если язык не найден
}

// Общая функция для обновления текста по языку
function updateTextsByLanguage(languageCode) {
    const elements = document.querySelectorAll('[data-lang-id]');
    elements.forEach(element => {
        const identifier = element.getAttribute('data-lang-id');
        const translation = langArr[identifier] && langArr[identifier][languageCode];
        if (translation !== undefined) {
            element.innerText = translation;
            console.log(`Updated text for ${identifier} to: ${translation}`);
        } else {
            console.error(`Translation not found for ${identifier} in language ${languageCode}`);
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    var languageButton = document.getElementById("languageButton");
    var languageList = document.querySelector(".language-list");
    var languageButtons = document.querySelectorAll(".language-list .listli a");

    languageButton.addEventListener("click", function (event) {
        event.stopPropagation();
        languageList.classList.toggle("active");
    });

    document.addEventListener("click", function () {
        languageList.classList.remove("active");
    });

    languageList.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    function changeLanguage(languageCode) {
        console.log("Changing language to:", languageCode);
        updateTextsByLanguage(languageCode);
        languageList.classList.remove("active");

        // Сохранение текущего языка в куки
        saveLanguageToCookies(languageCode);
    }

    document.addEventListener("click", function () {
        languageList.classList.remove("active");
    });

    // Получение текущего языка из куки и установка его
    const currentLanguage = getCurrentLanguageFromCookies();
    changeLanguage(currentLanguage);

    languageButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            var languageCode = button.getAttribute("data-lang-code");
            changeLanguage(languageCode);
        });
    });
});
