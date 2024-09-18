let list = document.querySelector('.carousel');
let images = document.querySelectorAll('.carousel-item');
let no_of_images = images.length;
let prev = document.querySelector('.buttons .prev');
let next = document.querySelector('.buttons .next');

let active = 0;

// Next button functionality
next.onclick = () => {
    if (active + 1 >= no_of_images) {
        active = 0;
    } else {
        active += 1;
    }
    changeImage();
};

// Prev button functionality
prev.onclick = () => {
    if (active <= 0) {
        active = no_of_images - 1;
    } else {
        active -= 1;
    }
    changeImage();
};

function changeImage() {
    // Move carousel to the active image
    list.style.transform = `translateX(-${active * 100}%)`;
}
