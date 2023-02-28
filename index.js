
const slide = document.querySelectorAll('.slide');
let counter =0;

slide.forEach((slide,index) =>{
    slide.style.top = `${index * 100}%`
})
const goNext = () =>{
    counter++;
    slideImage()
}
const goPrev = () =>{
    counter--;
    slideImage()
}

const slideImage = () =>{
    slide.forEach((slide) =>{
        slide.style.transform = `translateY(-${counter * 100}%)`
    })
}

