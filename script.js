const themeToggle = document.getElementById('themeToggle')
const logo = document.getElementById('logo');
const htmlTag = document.documentElement;

function updateUI(theme) {
    logo.src = theme === 'dark' ? 'images/logo-dark.png' : 'images/logo-light.png';
    themeToggle.innerHTML = theme === 'dark' ? '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-stars-fill"></i>'
}

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlTag.getAttribute('data-bs-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlTag.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateUI(newTheme);
});

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlTag.setAttribute('data-bs-theme', savedTheme);
    updateUI(savedTheme);
});
