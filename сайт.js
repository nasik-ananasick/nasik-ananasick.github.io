"use strict" //строгий режим

//определение типа устройства
		const isMobile = { //добавляем методы
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
			// если используется телефон, присваивается класс ._touch
			document.body.classList.add('_touch');

			//выпадающее меню
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
			// в противном случае присваивается класс ._pc
			document.body.classList.add('_pc');
		}



		//добавление/удаление классов _lock, _active при клике
		const iconMenu = document.querySelector('.icon');
		const menuBody = document.querySelector('.menu_body');
		if (iconMenu) {
			iconMenu.addEventListener("click", function (e) {
				document.body.classList.toggle('_lock');
				iconMenu.classList.toggle('_active');
				menuBody.classList.toggle('_active');
			});
		}


	//функция слайдера
	document.addEventListener('DOMContentLoaded', function () {
		const slider = new ChiefSlider('.slider', {
		  loop: true,
		  autoplay: true,
		  interval: 7000,
		});
	  });

	  //добавление и удаление классов open, cl
	  const formWrap = document.getElementById('form-wrap');
	  const formOpen = document.getElementById('open');

function openForm() {
    formWrap.classList.add('open');
	formOpen.classList.add('cl');
}
function closeForm() {
	formWrap.classList.remove('open');
	formOpen.classList.remove('cl');
}

//функция модального окна
function Modal() {

	// Функция открытия модального окна

	$(".modal-link").on("click", function() {

		$('.modal-overlay[data-modal-id="'+$(this).data('modal-id')+'"]').addClass("modal-overlay_visible");

	});

	// Функция закрытия модального окна нажатием на кнопку

	$(".modal__close").on("click", function() {

		$(".modal-overlay").removeClass("modal-overlay_visible");

	});

}