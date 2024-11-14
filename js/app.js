function readMore() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("btn");

    if(dots.style.display === "none") {
        dots.style.display="inline";
        btn.innerHTML="Читать далее";
        more.style.display="none";
    } else{
        dots.style.display="none";
        btn.innerHTML="Скрыть";
        more.style.display="inline";
    }
    
}



document.querySelector('.app-header__burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.navigation-wrapper').classList.toggle('open');
    document.querySelector('.navigation__overlay').classList.toggle('open');
    document.querySelector('.navigation').classList.toggle('open');
    
})

document.querySelector('.button.navigation__burger').addEventListener('click', function(){
    this.classList.toggle('none');
    document.querySelector('.navigation-wrapper').classList.toggle('open');
    document.querySelector('.navigation__overlay').classList.toggle('open');
    document.querySelector('.navigation').classList.toggle('open');
    
})

document.querySelector('.button__item.message').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.app-header__popup').classList.toggle('open');
    document.querySelector('.app-header__wrapper').classList.toggle('open');
    document.querySelector('.app-header__overlay').classList.toggle('open');
})





document.querySelector('.button.popup__close').addEventListener('click', function(){
    this.classList.toggle('none');
    document.querySelector('.app-header__popup').classList.toggle('open');
    document.querySelector('.app-header__wrapper').classList.toggle('open');
    document.querySelector('.app-header__overlay').classList.toggle('open');
    
})

document.querySelector('.button__item.call').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.app-header__call').classList.toggle('open');
    document.querySelector('.app-header__call-wrapper').classList.toggle('open');
    document.querySelector('.app-header__call-overlay').classList.toggle('open');
})


document.querySelector('.button.call__close').addEventListener('click', function(){
    this.classList.toggle('none');
    document.querySelector('.app-header__call').classList.toggle('open');
    document.querySelector('.app-header__call-wrapper').classList.toggle('open');
    document.querySelector('.app-header__call-overlay').classList.toggle('open');
    
})

// Слайдер // 

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,
    slidesPerView: 1.2,
    spaceBetween: 10,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

   

    // autoplay:{

    //     // delay: 3000,
    // },
    
  
  
  });
 

const slider = document.querySelector('.swiper');

function mobileSlider() {
	if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
		mySwiper = new Swiper(slider, {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			slideClass: 'section-item',
           
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 768) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-container-initialized')) {
			mySwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});