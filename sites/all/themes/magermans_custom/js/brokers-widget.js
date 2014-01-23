var broker_x = 0;
var broker_min = 0;
var broker_max = 0;
var broker_timer;

(function($) {
	$(function(){
		brokersLayout();
		$(window).resize(brokersLayout);

		$(".arrow-left").click(clickPreviousBroker);
		$(".arrow-right").click(clickNextBroker);

		var $rows = $("#block-views-brokers-block .views-row");

		broker_max = $rows.length;

		var $first = $($rows.get(0)).clone();
		var $second = $($rows.get(1)).clone();
		$("#block-views-brokers-block .view-content")
		.append($first)
		.append($second);

		broker_timer = setInterval(brokerTimerNext, 5000);

		setTimeout(brokersLayout, 300);
		$(window).resize(brokersLayout);
	});
}(jQuery));

function brokersLayout()
{
	(function($) {
		var numRows = $("#block-views-brokers-block .views-row").length;
		var containerWidth = numRows * 50;
		var rowWidth = 1/numRows*100;
		if ($(window).width() < 1000)
		{
			containerWidth = numRows * 100;
		}
		$("#block-views-brokers-block .view-content").width(containerWidth+"%");
		$("#block-views-brokers-block .views-row").width(rowWidth+"%");

		$("#block-views-brokers-block .views-row").each(function(){
			var imgheight = $(this).find(".views-field-field-image img").height();
			if (imgheight <= 1)
			{
				setTimeout(brokersLayout, 10);
				return;
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
	}(jQuery));
}

function moveBrokers()
{
	(function($) {
		var left = "-"+(broker_x*50)+"%";
		if ($(window).width() < 1000)
		{
			left = "-"+(broker_x*100)+"%";
		}
		$("#block-views-brokers-block .view-content").stop(false, false).animate({"left":left});
	}(jQuery));
}

function jumpToEndOfBrokers()
{
	(function($) {
		var x = $("#block-views-brokers-block .views-row").length-2;
		var left = "-"+(x*50)+"%";
		if ($(window).width() < 1000)
		{
			left = "-"+(x*100)+"%";
		}
		$("#block-views-brokers-block .view-content").css({"left":left});
	}(jQuery));
}

function jumpToBeginningOfBrokers()
{
	(function($) {
		var x = broker_min;
		var left = "-"+(x*50)+"%";
		if ($(window).width() < 1000)
		{
			left = "-"+(x*100)+"%";
		}
		$("#block-views-brokers-block .view-content").css({"left":left});
	}(jQuery));
}

function previousBroker()
{
	broker_x--;
	if (broker_x < broker_min)
	{
		jumpToEndOfBrokers();
		broker_x = broker_max-1;
	}

	moveBrokers();
}

function nextBroker()
{
	broker_x++;
	if (broker_x > broker_max)
	{
		jumpToBeginningOfBrokers();
		broker_x = broker_min+1;
	}

	moveBrokers();
}

function clickPreviousBroker()
{
	previousBroker();
	clearInterval(broker_timer);
}

function clickNextBroker()
{
	nextBroker();
	clearInterval(broker_timer);
}

function brokerTimerNext()
{
	nextBroker();
	brokersLayout();
}
