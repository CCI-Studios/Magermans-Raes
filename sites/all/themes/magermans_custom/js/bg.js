(function($) {
	$(function(){
		var $body = $("body");
		var prefix = "/sites/all/themes/magermans_custom/images/backgrounds/";
		var url = prefix;
		if ($body.hasClass("front"))
		{
			url += "front.jpg";
		}
		else if ($body.hasClass("home-insurance"))
		{
			url += "home.jpg";
		}
		else
		{
			url += "";
		}
		$("#bg").load(bgLayout).attr("src", url);

		$(window).resize(bgLayout);
	});
}(jQuery));

function bgLayout()
{
	(function($) {
		var $img = $("#bg");
		var pageWidth = $("#page-wrapper").width();
		var pageHeight = $("#page").height();
		if (pageHeight < $(window).height())
			pageHeight = $(window).height();

		console.log("pageWidth="+pageWidth+", pageHeight="+pageHeight);
		console.log("imgWidth="+$img.width()+", imgHeight="+$img.height());

		$("#bg-wrapper").css({
			width:pageWidth+"px", 
			height:pageHeight+"px",
			overflow:"visible"
		});

		$img.css({"left":"0", "width":pageWidth+"px", "height":"auto"});
		if ($img.height() < pageHeight)
		{
			$img.css({
				"height":pageHeight, 
				"width":"auto",
				"left":"50%"
			});
			fixBGMargin();
		}
		else
		{
			$img.css({
				"left":0,
				"height":"auto",
				"margin-left":0
			});
		}
		$("#bg-wrapper").css("overflow", "hidden");
	}(jQuery));
}

function fixBGMargin()
{
	(function($) {
		$img = $("#bg");
		var imgWidth = $img.width();
		if (imgWidth <= 1)
		{
			setTimeout(fixBGMargin, 10);
			console.log("fixBGMargin() waiting...");
			return;
		}

		console.log("old imgWidth="+imgWidth);
		console.log("new imgWidth="+$img.width());
		$img.css({
			"margin-left":"-"+(imgWidth/2)+"px"
		});
	}(jQuery));
}

