(function($) {
	var active = 0;
	var min = 0;
	var max = 0;
	var timer;

	$(function(){
		$(".arrow-left").click(clickPrevious);
		$(".arrow-right").click(clickNext);

		max = rows().length;

		var $first = rows().eq(0).clone();
		var $second = rows().eq(1).clone();
		container().append($first).append($second);

		start();

		setTimeout(layout, 50);
		$(window).resize(layout);
	});

	function start()
	{
		timer = setInterval(timerNext, 5000);
	}

	function container()
	{
		return $("#block-views-brokers-block .view-content");
	}
	function rows()
	{
		return container().find(".views-row");
	}

	function layout()
	{
		var numRows = rows().length;
		var containerWidth = numRows * getRowWidth();
		var rowWidth = 1/numRows*100;
		container().width(containerWidth+"%");
		rows().width(rowWidth+"%");

		rows().each(function(){
			var imgheight = $(this).find(".views-field-field-image img").height();
			if (imgheight <= 1)
			{
				setTimeout(brokersLayout, 50);
				return false;
			}
			var textheight = $(this).height();
			var padding = (imgheight - textheight)/2;
			var paddingTop = padding;
			var paddingBottom = padding;
			if (padding != Math.floor(padding))
			{
				paddingTop = Math.floor(padding);
				paddingBottom = Math.ceil(padding);
			}
			if (padding > 0)
				$(this).css({"padding-top":paddingTop+"px", "padding-bottom":paddingBottom+"px"});
		});
	}

	function moveContainer()
	{
		var left = "-" + (active*getRowWidth()) + "%";
		container().stop(false, false).animate({"left":left});
	}
	function jumpToEnd()
	{
		var active = rows().length-2;
		var left = "-" + (active*getRowWidth()) + "%";
		container().css({"left":left});
	}
	function jumpToBeginning()
	{
		var active = min;
		var left = "-" + (active*getRowWidth()) + "%";
		container().css({"left":left});
	}
	function getRowWidth()
	{
		var rowsPerPage;
		if (!isMobile())
		{
			rowsPerPage = 2;
		}
		else
		{
			rowsPerPage = 1;
		}
		return 100/rowsPerPage;
	}
	function isMobile()
	{
		return $(window).width() < 1000;
	}

	function previous()
	{
		active--;
		if (active < min)
		{
			jumpToEnd();
			active = max-1;
		}
		moveContainer();
	}

	function next()
	{
		active++;
		if (active > max)
		{
			jumpToBeginning();
			active = min+1;
		}
		moveContainer();
	}

	function clickPrevious()
	{
		previous();
		stop();
	}

	function clickNext()
	{
		next();
		stop();
	}

	function stop()
	{
		clearInterval(timer);
	}

	function timerNext()
	{
		next();
		layout();
	}

}(jQuery));
