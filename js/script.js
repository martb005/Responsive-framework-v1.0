jQuery(document).ready(function($){

	/* Prepend menu icon */
	$('#nav-wrap').prepend('<div id="menu-icon"><div class="menu-icon"></div>Menu</div>');
	
	/* Toggle nav */
	$("#menu-icon").on("click", function(){
		$("#nav").slideToggle();
		$(this).toggleClass("active");
	});
	
	// IE8 fix box-sizing VS :last-child
	if ($.browser.msie && parseInt($.browser.version, 10) <= 8) {
		$('.row *:last-child').addClass('last-child');
	}

});