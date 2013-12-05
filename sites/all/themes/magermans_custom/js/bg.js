(function($) {
	$(function(){
		var $body = $("body");
		var prefix = "/sites/all/themes/magermans_custom/images/backgrounds/";
		var url = prefix;
		if ($body.hasClass("front"))
		{
			url += "front.jpg";
		}
		else if ($body.hasClass("about-magermans-raes"))
		{
			url += "about.jpg";
		}
		else if ($body.hasClass("auto-insurance"))
		{
			url += "auto.jpg";
		}
		else if ($body.hasClass("commercial"))
		{
			url += "commercial.jpg";
		}
		else if ($body.hasClass("your-toys"))
		{
			url += "toys.jpg";
		}
		else if ($body.hasClass("liquor-liability-special-events"))
		{
			url += "special-events.jpg";
		}
		else if ($body.hasClass("life-insurance"))
		{
			url += "life.jpg";
		}
		else if ($body.hasClass("group-insurance-benefits"))
		{
			url += "group.jpg";
		}
		else if ($body.hasClass("mr-advantage"))
		{
			url += "mr-advantage.jpg";
		}
		else if ($body.hasClass("resources"))
		{
			url += "resources.jpg";
		}
		else if ($body.hasClass("instant-travel-insurance"))
		{
			url += "travel.jpg";
		}
		else if ($body.hasClass("report-a-claim"))
		{
			url += "report.jpg";
		}
		else if ($body.hasClass("careers"))
		{
			url += "careers.jpg";
		}
		else if ($body.hasClass("contact-us"))
		{
			url += "contact.jpg";
		}
		else if ($body.hasClass("tony-magermans"))
		{
			url += "tmagermans.jpg";
		}
		else if ($body.hasClass("mike-raes"))
		{
			url += "mraes.jpg";
		}
		else
		{
			url += "front.jpg";
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
		var pageHeight = $(window).height();

		//console.log("pageWidth="+pageWidth+", pageHeight="+pageHeight);
		//console.log("imgWidth="+$img.width()+", imgHeight="+$img.height());

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

		//console.log("old imgWidth="+imgWidth);
		//console.log("new imgWidth="+$img.width());
		$img.css({
			"margin-left":"-"+(imgWidth/2)+"px"
		});
	}(jQuery));
}

