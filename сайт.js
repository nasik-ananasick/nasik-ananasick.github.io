"use strict"

		const isMobile = {
			Android: function () {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry: function () {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS: function () {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera: function () {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows: function () {
				return navigator.userAgent.match(/IEMobile/i);
			},
			any: function () {
				return(
					isMobile.Android() ||
					isMobile.BlackBerry() ||
					isMobile.iOS() ||
					isMobile.Opera() ||
					isMobile.Windows());
			}
		};

		if (isMobile.any()) {
			document.body.classList.add('_touch');

			let menuArrows = document.querySelectorAll('.menu__arrow');
			if (menuArrows.length > 0){
				for (let i = 0; i < menuArrows.length; i++) {
					const menuArrow = menuArrows[i];
					menuArrow.addEventListener("click", function(e) {
						menuArrow.parentElement.classList.toggle('_active');
					});
				}
			}
		} else {
			document.body.classList.add('_pc');
		}



		const iconMenu = document.querySelector('.icon');
		const menuBody = document.querySelector('.menu_body');
		if (iconMenu) {
			iconMenu.addEventListener("click", function (e) {
				document.body.classList.toggle('_lock');
				iconMenu.classList.toggle('_active');
				menuBody.classList.toggle('_active');
			});
		}




		const menuLinks = document.querySelectorAll('.link[data-goto]');
		if (menuLinks.length > 0) {
			menuLinks.forEach(menuLink => {
			menuLink.addEventListener("click", onMenuLinkClick);
		}); 

		function onMenuLinkClick (e) {
			const menuLink = e.target;
			if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
				const gotoBlock = document.querySelector(menuLink.dataset.goto);
				const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight
				
				if (iconMenu.classList.contains('_active')) {
					document.body.classList.remove('_lock');
					iconMenu.classList.remove('_active');
					menuBody.classList.remove('_active');
				}

				window.scrollTo({
					top: gotoBlockValue,
					behavior: "smooth"
				});
				e.preventDefault();
			}
		}
	}
	/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшает индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

$(document).ready(function() {
    
    $('#slider').cycle({
        fx:     'fade',
        rev: 1,
    });

});