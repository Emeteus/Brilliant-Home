const body = document.body;
const toggleButton = document.getElementById('toggleButton');
const moonIcon = document.querySelector('.moon-icon');
const sunIcon = document.querySelector('.sun-icon');
const footer = document.querySelector('footer');

// Check saved theme in cookies on page load
const savedTheme = getCookie('theme');

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
        setCookie('theme', 'dark', 365); // Set the cookie to expire in 365 days
    } else {
        applyLightTheme();
        setCookie('theme', 'light', 365);
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

// Helper function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Helper function to get the value of a cookie by name
function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}
