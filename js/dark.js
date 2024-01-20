const body = document.body;
const toggleButton = document.getElementById('toggleButton');
const moonIcon = document.querySelector('.moon-icon');
const sunIcon = document.querySelector('.sun-icon');
const footer = document.querySelector('footer');

// Check saved theme in localStorage on page load
const savedTheme = localStorage.getItem('theme');

// Apply dark theme styles by default
applyDarkTheme();

// Check and apply saved theme
if (savedTheme === 'light') {
    applyLightTheme();
}

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        applyDarkTheme();
        localStorage.setItem('theme', 'dark');
    } else {
        applyLightTheme();
        localStorage.setItem('theme', 'light');
    }
});

// Apply dark theme styles
function applyDarkTheme() {
    body.classList.add('dark');
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
    footer.style.background = '#111';
    footer.style.color = '#fff';
}

// Apply light theme styles
function applyLightTheme() {
    body.classList.remove('dark');
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
    footer.style.background = ''; // Reset to default or specify the light theme background color
    footer.style.color = ''; // Reset to default or specify the light theme text color
}
