window.onload = () => {
    const carouselSlide = document.querySelector('.carousel-slide')
const carouselImages = document.querySelectorAll('.carousel-slide img')

//Buttons
const prevBtn = document.querySelector('#prev-btn')
const nextBtn = document.querySelector('#next-btn')

let counter = 1;
const size = carouselImages[0].offsetWidth

carouselSlide.style.transform = `translateX(${-size * counter}px )`

nextBtn.addEventListener('click', () => {
    if(counter >= carouselImages.length - 1) return
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter}px )`
})

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter}px )`
})

carouselSlide.addEventListener('transitionend', () => {
    // console.log('fired', carouselImages[counter])
    carouselSlide.style.transition = "none"
    if(carouselImages[counter].id === 'first-clone') { 
        counter = 1   
    } 
    if(carouselImages[counter].id === 'last-clone') {
        counter = 3
    }
    carouselSlide.style.transform = `translateX(${-size * counter}px )`
})
}