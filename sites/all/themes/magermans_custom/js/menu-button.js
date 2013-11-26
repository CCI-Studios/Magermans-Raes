(function($) {
	$(function(){
		$("#menu-button").click(function(){
			$("body").toggleClass("nav-open");
			resizeMenu(70);
			return false;
		});
	});
}(jQuery));
