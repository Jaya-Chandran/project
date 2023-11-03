let slidIndex = 0;
const slides = document.querySelectorAll(".profile-card");
const totalSlides = slides.length;
const bgcolor = ['#241468', '#9F0D7F', '#EA1179', '#F79BD3', '#6F61C0'];

function slide() {
    slides.forEach((card,index)=>{
        card.style.display ='none'
        card.style.backgroundColor = bgcolor[index]
    })

    slidIndex++;
    if(slidIndex>totalSlides){
        slidIndex=1;
    }
    slides[slidIndex-1].style.display='block';
    setTimeout(slide,2000)
}

slide()