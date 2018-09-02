window.addEventListener('load', () => {
	$('.popup-container').on('click', close);
	$('.popup .footer .join').on('click', join);
	$('.popup-link').on('click', open);

	function join() {
		$('.popup .footer .join').off().removeClass('join').addClass('joined').on('click', leave);
		$('#icon_10').off().removeClass('icon_hide').on('click', leave);
		window.setTimeout( show_payment_popup, 3000 );
	}

	function leave() {
		$('.popup .footer .joined').off().removeClass('joined').addClass('join').on('click', join);
		$('#icon_10').off().addClass('icon_hide').on('click', leave);
	}

	function close(event) {
		if(event) {
			if(event.target !== $('.popup-container').get(0)) return;
		}
		$('.popup-container').hide();
		$('.popup').hide();
	}

	function open() {
		$('.popup-container').show();
		$('.popup').show();
	}

	function show_payment_popup(){
	  window.location.href = "/payment";
   };
});
