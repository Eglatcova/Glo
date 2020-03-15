document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector('.modal')
  const modalBtn = document.querySelectorAll('[data-toggle=modal]')
  const closeBtn = document.querySelector('.modal__close')


  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

//закрыти при клике вне модального окна
  closeBtn.addEventListener('click', switchModal)
  modal.addEventListener('click', (element) => {
    if (element.target == modal)
      switchModal();
  });
//закрытие при нажатии esc
  document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
    //console.log(modal.className)
    if ("key" in evt) {
      isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
      isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
      if (modal.className == 'modal modal--visible')
        switchModal();
    }
  };
});






/*$(document).ready(function () {
  var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close');
    scrollBtn = $('.scroll-button');
    //переменные названий(имен) для слайдов "6 шагов до цели". начало
    slideOne = $('.steps-name__step--one');
    slideTwo = $('.steps-name__step--two');
    slideThree = $('.steps-name__step--three');
    slideFour = $('.steps-name__step--four');
    slideFive = $('.steps-name__step--five');
    slideSix = $('.steps-name__step--six');
    //конец
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 1000) {
      scrollBtn.addClass('show');
    } else {
      scrollBtn.removeClass('show');
    }
  });
  scrollBtn.on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500);
  });


//слайдер1
var mySwiper = new Swiper('.swiper1', {
  loop: true,
  pagination: {
    el: '.pagination1',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.next1',
    prevEl: '.prev1',
  },
});

var next = $('.next1');
var prev = $('.prev1');
var bullets = $('.pagination1');

next.css('left', prev.width() + 10 + bullets.width() + 10)
bullets.css('left', prev.width() + 10)

//слайдер сечтчик
var swiper = new Swiper('.swiper2', {
  pagination: {
    el: '.pagination3',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.next2',
    prevEl: '.prev2',
  },
});


//слайдер2
var mySwiper = new Swiper('.swiper2', {
  loop: true,
  pagination: {
    el: '.pagination2',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.next2',
    prevEl: '.prev2',
  },
  
  //переключение имени слайдов над картинками. начало
  on: {
    slideChange: function () {
      //1
      if (this.realIndex == 0)
        slideOne.addClass('steps-name__step--visible');
      else
        slideOne.removeClass('steps-name__step--visible');
      //2
      if (this.realIndex == 1)
        slideTwo.addClass('steps-name__step--visible');
      else
        slideTwo.removeClass('steps-name__step--visible');
      //3
      if (this.realIndex == 2)
        slideThree.addClass('steps-name__step--visible');
      else
        slideThree.removeClass('steps-name__step--visible');
      //4
      if (this.realIndex == 3)
        slideFour.addClass('steps-name__step--visible');
      else
        slideFour.removeClass('steps-name__step--visible');
      //5
      if (this.realIndex == 4)
        slideFive.addClass('steps-name__step--visible');
      else
        slideFive.removeClass('steps-name__step--visible');
      //6
      if (this.realIndex == 5)
        slideSix.addClass('steps-name__step--visible');
      else
        slideSix.removeClass('steps-name__step--visible');
    },
  },
  //конец
});
//переключение слайдов при нажатии на шаги.начало
slideOne .on('click', function () {
  var mySwiper0 = document.querySelectorAll('.swiper2')[0].swiper;
  var mySwiper1 = document.querySelectorAll('.swiper2')[1].swiper;
  mySwiper0.slideTo(1, 1000);
  mySwiper1.slideTo(1, 1000);
  
});
slideTwo .on('click', function () {
  var mySwiper0 = document.querySelectorAll('.swiper2')[0].swiper;
  var mySwiper1 = document.querySelectorAll('.swiper2')[1].swiper;
  var mySwiper2 = document.querySelectorAll('.swiper2')[1].swiper;
  mySwiper0.slideTo(2, 1000);
  mySwiper1.slideTo(2, 1000);
  mySwiper2.slideTo(2, 1000);
  
});
slideThree .on('click', function () {
  var mySwiper0 = document.querySelectorAll('.swiper2')[0].swiper;
  var mySwiper1 = document.querySelectorAll('.swiper2')[1].swiper;
  mySwiper0.slideTo(3, 1000);
  mySwiper1.slideTo(3, 1000);
  
});
slideFour .on('click', function () {
  var mySwiper0 = document.querySelectorAll('.swiper2')[0].swiper;
  var mySwiper1 = document.querySelectorAll('.swiper2')[1].swiper;
  mySwiper0.slideTo(4, 1000);
  mySwiper1.slideTo(4, 1000);
  
});
slideFive .on('click', function () {
  var mySwiper0 = document.querySelectorAll('.swiper2')[0].swiper;
  var mySwiper1 = document.querySelectorAll('.swiper2')[1].swiper;
  mySwiper0.slideTo(5, 1000);
  mySwiper1.slideTo(5, 1000);
  
});
slideSix .on('click', function () {
  var mySwiper0 = document.querySelectorAll('.swiper2')[0].swiper;
  var mySwiper1 = document.querySelectorAll('.swiper2')[1].swiper;
  mySwiper0.slideTo(6, 1000);
  mySwiper1.slideTo(6, 1000);
  
});
//конец


  var next = $('.next2');
  var prev = $('.prev2');
  var bullets = $('.pagination2');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)


});
*/