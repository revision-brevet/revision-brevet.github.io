const toggleThemeButton = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(themeName) {
    body.className = themeName;
    localStorage.setItem('theme', themeName);

    // Change button text/icon based on the theme
    if (themeName === 'dark-theme') {
        toggleThemeButton.textContent = '☀️ Mode clair';
    } else {
        toggleThemeButton.textContent = '🌙 Mode sombre';
    }
}

function toggleTheme() {
    if (body.classList.contains('dark-theme')) {
        setTheme('light-theme');
    } else {
        setTheme('dark-theme');
    }
}

// Set the theme on initial load
(function() {
    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    setTheme(savedTheme);
})();

