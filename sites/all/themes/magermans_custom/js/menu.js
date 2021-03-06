(function($) {
	$(function(){
		$("#block-system-main-menu .content > ul > li.last").removeClass("last");
		$("#menu-footer")
			.wrap("<li class='last'></li>")
			.parent()
			.appendTo("#block-system-main-menu .content > ul");

		$("#block-system-main-menu .content > ul > li").click(function(){
			$("#block-system-main-menu .content > ul > li").not(this).removeClass("submenu-open");
			$(this).toggleClass("submenu-open");
		});

		resizeMenu();
		$(window).on('resize scroll', function(){resizeMenu();});
	});
}(jQuery));


function resizeMenu(defaultHeight)
{
	(function($) {
		var windowHeight = $(window).height();
		var minLIHeight = 46;
		var numLI = $("#block-system-main-menu .content > ul > li").length;

		if (windowHeight > minLIHeight * numLI)
		{
			if (windowHeight % numLI == 0)
			{
				var height = windowHeight / numLI;
				$("#block-system-main-menu .content > ul > li").height(height+"px");
			}
			else
			{
				var height = Math.ceil(windowHeight / numLI);
				$("#block-system-main-menu .content > ul > li").height(height+"px");

				height = height - (numLI - (windowHeight % numLI));
				$("#block-system-main-menu .content > ul > li").last().height(height+"px");
			}
		}
		else 
		{
			$("#block-system-main-menu .content > ul > li").height(minLIHeight+"px");
		}


		$("#block-system-main-menu .content > ul > li").each(function(index){
			$(this).find("> div > a, > div > span").css({"padding-top":0, "padding-bottom":0});
			var padding = ($(this).height() - $(this).find("> div > a, > div > span").height())/2;
			$(this).find("> div > a, > div > span").css({"padding-top":padding+"px", "padding-bottom":padding+"px"});
		});
	}(jQuery));
}
