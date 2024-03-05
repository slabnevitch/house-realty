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
	});
})();

// запуск основной функции
// einput.init();
// console.log(document.querySelector('.skot'))
// document.querySelector('.skot').addEventListener('click', (e) => {
// 	// var cleanText = cutTegs(document.getElementById('input-box').innerHTML);

// 	// console.log(cleanText.replace(/\s+/g, ' ').trim());
// 	console.log(document.getElementById('input-box').textContent.replace(/\s+/g, ' ').trim());
// });
// function cutTegs(str) {
//  var regex = /(\<(\/?[^>]+)>)/g,
//      result = str.replace(regex, "");

//      return result;
// }