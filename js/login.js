function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === 'block' || getComputedStyle(dropdownContent).display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        // Закрывает все открытые выпадающие окна перед открытием текущего
        closeOtherDropdowns();
        dropdownContent.style.display = 'block';
    }
}

function loginAction() {
    alert("Performing login action");
    closeDropdown();
}

function registerAction() {
    alert("Performing register action");
    closeDropdown();
}

function closeDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display = 'none';
}

// Закрывает все открытые выпадающие окна
function closeOtherDropdowns() {
    var allDropdowns = document.querySelectorAll('.dropdown');
    allDropdowns.forEach(function (dropdown) {
        if (dropdown.id !== 'loginDropdown') {
            var dropdownContent = dropdown.querySelector('.dropdown-content');
            dropdownContent.style.display = 'none';
        }
    });
}

// Закрывает выпадающее окно при клике вне него
document.addEventListener('click', function (event) {
    var dropdown = document.getElementById('loginDropdown');
    var dropdownContent = document.getElementById('dropdownContent');
    if (!dropdown.contains(event.target) && !dropdownContent.contains(event.target)) {
        closeDropdown();
    }
});
