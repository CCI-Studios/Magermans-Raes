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

		broker_max = $("#block-views-brokers-block .views-row").length - 2;

		broker_timer = setInterval(brokerTimerNext, 4000);

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
		$("#block-views-brokers-block .view-content").animate({"left":left});
	}(jQuery));
}

function previousBroker()
{
	broker_x--;
	if (broker_x < broker_min)
		broker_x = broker_max;

	moveBrokers();
}

function nextBroker()
{
	broker_x++;
	if (broker_x > broker_max)
		broker_x = broker_min;

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
