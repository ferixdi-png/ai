
// Пример анимации для кнопки на hover
const button = document.querySelector('.cta-button');

button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.1)';
});

button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
});

// Тема темного/светлого режима
const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('.cta-button').addEventListener('click', toggleTheme);
    