
// Простая анимация для кнопки на hover
const button = document.querySelector('.cta-button');

button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.1)';
});

button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
});
    