(function($) {
	$(function(){
		$("#block-system-main-menu .content > ul > li.last").removeClass("last");
		$("#menu-footer")
			.wrap("<li class='last'></li>")
			.parent()
			.appendTo("#block-system-main-menu .content > ul");
	});
}(jQuery));
