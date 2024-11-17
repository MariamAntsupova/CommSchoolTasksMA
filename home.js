const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.dot');


if (window.innerWidth >= 800){
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            slider.style.transform = `translateX(-${index * 800}px)`;
        });
    });
} else if(window.innerWidth <= 800 && window.innerWidth >600){
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            slider.style.transform = `translateX(-${index * 707}px)`;
        });
    });
} else if(window.innerWidth <= 600){
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            slider.style.transform = `translateX(-${index * 453}px)`;
        });
    });
}


