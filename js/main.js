/*document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector('.modal')
  const modalBtn = document.querySelectorAll('[data-toggle=modal]')
  const closeBtn = document.querySelector('.modal__close')
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  closeBtn.addEventListener('click', switchModal)
});*/

$(document).ready(function () {
  var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close');
    scrollBtn = $('.scroll-button');
    slideOne = $('.steps-description__step--one');
    slideTwo = $('.steps-description__step--two');
    slideThree = $('.steps-description__step--three');
    slideFour = $('.steps-description__step--four');
    slideFive = $('.steps-description__step--five');
    slideSix = $('.steps-description__step--six');

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
    //переключение описания слайдов над картинками. начало
    on: {
      slideChange: function () {
        //1
        if (this.realIndex == 0)
          slideOne.addClass('visible');
        else
          slideOne.removeClass('visible');
        //2
        if (this.realIndex == 1)
          slideTwo.addClass('visible');
        else
          slideTwo.removeClass('visible');
        //3
        if (this.realIndex == 2)
          slideThree.addClass('visible');
        else
          slideThree.removeClass('visible');
        //4
        if (this.realIndex == 3)
          slideFour.addClass('visible');
        else
          slideFour.removeClass('visible');
        //5
        if (this.realIndex == 4)
          slideFive.addClass('visible');
        else
          slideFive.removeClass('visible');
        //6
        if (this.realIndex == 5)
          slideSix.addClass('visible');
        else
          slideSix.removeClass('visible');
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
    mySwiper0.slideTo(2, 1000);
    mySwiper1.slideTo(2, 1000);
   
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

