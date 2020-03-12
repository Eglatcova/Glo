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
  scrollBtn.on('click', function() {
    $('html, body').animate({scrollTop:0}, 1500);
  });
});