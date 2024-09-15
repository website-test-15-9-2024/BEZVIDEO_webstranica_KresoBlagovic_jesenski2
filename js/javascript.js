const container = document.querySelector('.container');
document.querySelector('.slider'). addEventListener('input', (e) => { /* bez ovoga slider ne radi! */
    container.style.setProperty('--position', `${e.target.value}%`);
})