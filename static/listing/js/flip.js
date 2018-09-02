window.addEventListener('load', () => {
	
	$(".flipRight").on('click', flipRight);
	$(".flipLeft").on('click', flipLeft);
	$('.flipLeft').hide();
	$('.leftPage').hide();

	function flipRight() {
		$('.flipRight').hide();
		$('.rightPage').show();
		$('.rightPage').addClass('animateFlipOutRight').on('animationend', () => {
			$('.rightPage').off().hide().removeClass('animateFlipOutRight');
			$('.flipLeft').show();
			$('.leftPage').show().addClass('animateFlipInLeft animateDelay200').on('animationend', () => {
				$('.leftPage').off().removeClass('animateFlipInLeft animateDelay200');
			});
		});
	}

	function flipLeft() {
		$('.flipLeft').hide();
		$('.leftPage').show()
		$('.leftPage').addClass('animateFlipOutLeft').on('animationend', () => {
			$('.leftPage').off().hide().removeClass('animateFlipOutLeft');
			$('.flipRight').show();
			$('.rightPage').show().addClass('animateFlipInRight animateDelay200').on('animationend', () => {
				$('.rightPage').off().removeClass('animateFlipInRight animateDelay200');
			});
		});
	}
});
