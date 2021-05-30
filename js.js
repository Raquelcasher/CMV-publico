/*Javascript cambio dia/noche*/
		/*FONDO*/
	  	const switchButton = document.getElementById('switch');
	 
		switchButton.addEventListener('click', () => {
		    document.body.classList.toggle('dark'); //toggle the HTML body the class 'dark'
		    switchButton.classList.toggle('active');//toggle the HTML button with the id='switch' with the class 'active'
		});
		$(document).ready(function(){
			$(window).scroll(function () {
					if ($(this).scrollTop() > 50) {
						$('#back-to-top').fadeIn();
					} else {
						$('#back-to-top').fadeOut();
					}
				});
				// scroll body to 0px on click
				$('#back-to-top').click(function () {
					$('body,html').animate({
						scrollTop: 0;
					}, 400);
					return false;
				});
		});
		/*LETRAS*//*
			$("#button").click(function(){
				$("h1, h2, p").toggleClass("noche");
			  });*/