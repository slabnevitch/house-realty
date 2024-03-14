// jQuery(function() {

// 	// ibg class
// 		if('objectFit' in document.documentElement.style === false){
// 		  Array.prototype.forEach.call(document.querySelectorAll('._fit'), function(el){

// 		    var image = el.querySelector('img');
// 		    el.style.backgroundImage = 'url("'+image.src+'")';
// 		    el.classList.add('ibg');
// 		    el.classList.remove('_fit');
//  		 });
// 		}
// 	// End ibg class

// $(document).on('click', function(e) {
	// var $target = $(e.target);
// });// $(document).on('click')

	// jQuery(document).ready(function() {
	// 	console.log('jQuery document ready');
	// });

// 	//SVG Fallback
// 	// if(!Modernizr.svg) {
// 	// 	$("img[src*='svg']").attr("src", function() {
// 	// 		return $(this).attr("src").replace(".svg", ".png");
// 	// 	});
// 	// };

// 	//E-mail Ajax Send
// 	//Documentation & Example: https://github.com/agragregra/uniMail
// 	$("form").submit(function() { //Change
// 		var th = $(this);
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php", //Change
// 			data: th.serialize()
// 		}).done(function() {
// 			alert("Thank you!");
// 			setTimeout(function() {
// 				// Done Functions
// 				th.trigger("reset");
// 			}, 1000);
// 		});
// 		return false;
// 	});

// 	//Chrome Smooth Scroll
// 	try {
// 		$.browserSelector();
// 		if($("html").hasClass("chrome")) {
// 			$.smoothScroll();
// 		}
// 	} catch(err) {

// 	};

// 	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
// });

// $(window).on('load', function() {

// 	$(".loader_inner").fadeOut();
// 	$(".loader").delay(400).fadeOut("slow");

// });

(function() {
	// ibg class
	if('objectFit' in document.documentElement.style === false){
	  Array.prototype.forEach.call(document.querySelectorAll('._fit'), function(el){

	    var image = el.querySelector('img');
	    el.style.backgroundImage = 'url("'+image.src+'")';
	    el.classList.add('ibg');
	    el.classList.remove('_fit');
		 });
	}
	// End ibg class

	document.addEventListener('DOMContentLoaded', function() {
		console.log('DOMContentLoaded!');
		
		// password show
		if(document.querySelector('.eye-ico') !== null){
			[].forEach.call(document.querySelectorAll('.eye-ico'), function(el) {
				el.onclick = function(e) {
					var passInput = this.closest('label').querySelector('.form__input');
					this.classList.toggle('unblind');
					passInput.getAttribute('type') === 'password' ?
					passInput.setAttribute('type','text') :
					passInput.setAttribute('type','password');
				}
			});
		}
		// END password show

		// chat menu toggle
		if(document.querySelector('#menu-open') !== null){
			document.querySelector('#menu-open').onclick = function(e) {
				this.classList.toggle('on');
				console.log('open')
				document.documentElement.classList.add('menu-opened');
			}

		}
		if(document.querySelector('#menu-close') !== null){
			document.querySelector('#menu-close').onclick = function(e) {
				// this.classList.toggle('on');
				document.documentElement.classList.remove('menu-opened');
				document.querySelector('#menu-open').classList.remove('on');
			}
			
		}
		// END chat menu toggle
		
		document.onclick = function(e){
			var target = e.target;
			console.log(target.closest('.header-expanse__button') !==null);
			console.log(target);
			
			// bobile search form toggle
			if(target.closest('.header-expanse__button') !==null){
				document.querySelector('.expanse__header').classList.toggle('search-opened');
			}else if (!target.parentElement.classList.contains('expanse-form')){
				if(document.querySelector('.expanse__header') !== null){
					document.querySelector('.expanse__header').classList.remove('search-opened');

				}
			}
			// END bobile search form toggle
			
			// убрать контакты при открытии текущего чата
			if(window.innerWidth < 991.98){
				if(target.closest('.messenger__contact') !== null){
					document.querySelector('.expanse').classList.add('contacts-collapsed');
				}
				if(target.closest('.header-expanse__back') !== null){
					document.querySelector('.expanse').classList.remove('contacts-collapsed');
				}
			}
			// END убрать контакты при открытии текущего чата
		}

		// enter-form toggle
		if(document.querySelector('.page-main__form-display') !== null){
			document.querySelector('.page-main__form-display .btn').onclick = function() {
				this.closest('.page-main__forms').classList.add('active');
			}
		}
		// END enter-form toggle
		
		// micromodal
		if(document.querySelector('.modal') !== null){
			MicroModal.init({
				openTrigger: 'data-micromodal-open', 
				closeTrigger: 'data-micromodal-close',
				openClass: 'is-open', 
				disableFocus: true, 
				awaitOpenAnimation: true,
				awaitCloseAnimation: true,
				// disableScroll: true,
				onShow: function(modal, trigger, event){
					// при disableScroll: true для компенсации ширины скроллбара (фикс "прыгания" страницы влево)
					if(document.querySelector('#wrapper-for-scroll-fix') != null){
						document.querySelector('#wrapper-for-scroll-fix').classList.add('modal-open');

					}
				},
				onClose: function(modal) {
					// console.info(`${modal.id} is hidden`);
					// при disableScroll: true для компенсации ширины скроллбара (фикс "прыгания" страницы влево)
					if(document.querySelector('#wrapper-for-scroll-fix') != null){
						document.querySelector('#wrapper-for-scroll-fix').classList.remove('modal-open');
					}
				}
			});		
		}
	// END micromodal
	
	// добавление смайлов в чат
		if(document.querySelector('#input-box') != null){
			einput.init({
				typefocus: false
			});
		}
	// END добавление смайлов в чат

	// movbile emoji toggle
		if(document.getElementById('emoji-toggle') !==null){
			document.getElementById('emoji-toggle').onclick = function(e) {
				document.querySelector('.expanse__sidebar').classList.toggle('opened');
			}
		}
	// END movbile emoji toggle

	// baguetteBox
		if(document.querySelector('.gallery') !== null){
			baguetteBox.run('.gallery');
		}
	// END baguetteBox

	// messenger filter slider
		if(document.querySelector('.messenger__header .tiny-carousel') !== null){//для tiny-slider с кастомными кнопками навигации
					
		var slider = tns({
						container: '.messenger__header .tiny-sldr',
						mode: 'carousel', //'gallery' - для фэйд-анимации отдельных слайдов
						autoWidth: true,
						loop: false,
						// slideBy: 1, // кол-во слайдов, перематывающихся за 1 клик. Не работает с mode: 'gallery'
						// autoplay: true,
						// controls: false, // отключение кнопок "вперед/назад"
						controlsContainer: '.messenger__header .tiny-carousel__nav', // внутри .block-header__nav должны быть 2 заранее отстилизованные кнопки
						// navContainer: "#customize-thumbnails",//конткйнер для навигации миниатюрами
						// navAsThumbnails: true, //включение навигации миниатюрами
						nav: false, //отключение bullets
						// navPosition: 'bottom',//положение bullets
						mouseDrag: false,
						gutter: 10, //добавляет padding, а не margin! Нужна обертка вокруг содержимого каждого слайда!
						
						// responsive: { // mobile first!
						// 	375: {

						//       // items: 1.1
						// 	},
						// 	640: {
						//       // edgePadding: 20,
						//       // gutter: 20,
						//       // items: 2
						// 	},
						// 	700: {
						//       // gutter: 30
						// 	},
						// 	900: {
						//       // items: 3
						// 	}
						// }
			});
		}
	// END messenger filter slider

	// messenger-contact tooltip
		if(document.querySelector('.contact-messenger__name') !== null){
			tippy('.contact-messenger__name', {
				appendTo: function() {
					return document.body;	
				}, 
				theme: 'contact', 
				maxWidth: 'none',
				allowHTML: true,
				content: function(reference) {
				    var id = reference.getAttribute('data-tooltip');
				    var template = document.getElementById(id);
				    return template.innerHTML;
				  },
				offset: [70, -15],
				arrow: false,
				placement: 'bottom-start',
				// flipBehavior: ["top", "left"],
				// trigger: 'click',
			    // placement: 'left-start',
			    interactive: true
			});
		}
	//END messenger-contact tooltip

	

		// modals calls
			//- request/offers modals
				// MicroModal.show('email-modal');
				// MicroModal.show('service-rules-modal');
				// MicroModal.show('city-select-modal');
				// MicroModal.show('requests-modal');
				// MicroModal.show('offer-modal');

			//- chat/messenger modals
				// MicroModal.show('chat-modal');
				// MicroModal.show('review-regard-modal');
				// MicroModal.show('seller-modal');
				// MicroModal.show('deal-modal');
			
			//- profile modals
				// MicroModal.show('ban-modal');
				// MicroModal.show('trial-modal');
				
		// END modals calls
	});
})();

// console.log(document.querySelector('.maskot'))
// document.querySelector('.maskot').addEventListener('click', (e) => {
// 	// var cleanText = cutTegs(document.getElementById('input-box').innerHTML);

// 	// console.log(cleanText.replace(/\s+/g, ' ').trim());
// 	console.log(document.getElementById('input-box').textContent.replace(/\s+/g, ' ').trim());
// });
// function cutTegs(str) {
//  var regex = /(\<(\/?[^>]+)>)/g,
//      result = str.replace(regex, "");

//      return result;
// }