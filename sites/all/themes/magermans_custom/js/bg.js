 //polyfill for naturalWidth in IE8
 (function($){
    var
    props = ['Width', 'Height'],
    prop;

    while (prop = props.pop()) {
    (function (natural, prop) {
      $.fn[natural] = (natural in new Image()) ? 
      function () {
      return this[0][natural];
      } : 
      function () {
      var 
      node = this[0],
      img,
      value;

      if (node.tagName.toLowerCase() === 'img') {
        img = new Image();
        img.src = node.src,
        value = img[prop];
      }
      return value;
      };
    }('natural' + prop, prop.toLowerCase()));
    }
  }(jQuery));

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
		else if ($body.hasClass("commercial-insurance"))
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
		else if ($body.hasClass("reg-raes"))
		{
			url += "rraes.jpg";
		}
		else if ($body.hasClass("melinda-bell"))
		{
			url += "mbell.jpg";
		}
		else if ($body.hasClass("stephanie-bezaire"))
		{
			url += "sbezaire.jpg";
		}
		else if ($body.hasClass("stephanie-appleton"))
		{
			url += "sappleton.jpg";
		}
		else if ($body.hasClass("laurie-mercier"))
		{
			url += "lmercier.jpg";
		}
		else if ($body.hasClass("trish-fisher"))
		{
			url += "tfisher.jpg";
		}
		else if ($body.hasClass("donna-robertson"))
		{
			url += "drobertson.jpg";
		}
		else
		{
			url += "front.jpg";
		}
		$("#bg").load(bgLayout).attr("src", url);

		$(window).on("resize scroll", bgLayout);

		if (navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS 7_\d/i))
		{
			//if iOS7, then fix the bg every second. the browser does not fire the events properly
			setInterval(bgLayout, 1000);
		}
	});
}(jQuery));

function bgLayout()
{
	(function($) {
		var $img = $("#bg");
		var pageWidth = $("#page-wrapper").width();
		var pageHeight = window.innerHeight ? window.innerHeight : $(window).height();

		$("#bg-wrapper").css({
			width:pageWidth+"px", 
			height:pageHeight+"px"
		});
		
		if ($img.naturalHeight() * pageWidth / $img.naturalWidth() < pageHeight)
		{
			$img.css({
				"height":pageHeight, 
				"width":"auto"
			});
		}
		else
		{
			$img.css({
				"height":"auto",
				"width":"100%"
			});
		}
	}(jQuery));
}
