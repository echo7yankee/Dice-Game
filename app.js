// This handles the buttons animations
{
const buttons_div = document.querySelectorAll('.buttons');

function handleEnter() {
    this.classList.add('active-btn');
}

function handleLeave() {
    this.classList.remove('active-btn');
}

buttons_div.forEach(button => {
    button.addEventListener('mouseenter', handleEnter)
});
buttons_div.forEach(button => {
    button.addEventListener('mouseleave', handleLeave)
});
}