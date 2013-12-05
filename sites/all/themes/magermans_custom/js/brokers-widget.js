var broker_x = 0;
var broker_min = 0;
var broker_max = 0;
var brokers_shown = 2;
var broker_timer;

(function($) {
	$(function(){
		if ($(window).width() < 1000)
			brokers_shown = 1;


		brokersLayout();
		$(window).resize(brokersLayout);

		$(".arrow-left").click(clickPreviousBroker);
		$(".arrow-right").click(clickNextBroker);

		broker_max = $("#block-views-brokers-block .views-row").length - 2;

		broker_timer = setInterval(nextBroker, 4000);
	});
}(jQuery));

function brokersLayout()
{
	(function($) {
		var numRows = $("#block-views-brokers-block .views-row").length;
		var containerWidth = numRows * 50;
		var rowWidth = 1/numRows*100;
		if (brokers_shown === 1)
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
			if (padding > 0)
				$(this).css({"padding-top":padding+"px", "padding-bottom":padding+"px"});
		});
	}(jQuery));
}

function moveBrokers()
{
	(function($) {
		var left = "-"+(broker_x*50)+"%";
		if (brokers_shown === 1)
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
