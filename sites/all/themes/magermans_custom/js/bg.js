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
		else if ($body.hasClass("kris-faubert"))
		{
			url += "kfaubert.jpg";
		}
		else if ($body.hasClass("cheri-paisley"))
		{
			url += "cpaisley.jpg";
		}
		else if ($body.hasClass("stephanie-bacon"))
		{
			url += "sbacon.jpg";
		}
		else if ($body.hasClass("paula-beaton"))
		{
			url += "pbeaton.jpg";
		}
		else if ($body.hasClass("lily-cocozzoli"))
		{
			url += "lcocozzoli.jpg";
		}
		else if ($body.hasClass("chatham1"))
		{
			url += "chatham1.jpg";
		}
		else if ($body.hasClass("chatham2"))
		{
			url += "chatham2.jpg";
		}
		else if ($body.hasClass("chatham3"))
		{
			url += "chatham3.jpg";
		}
		else if ($body.hasClass("chatham4"))
		{
			url += "chatham4.jpg";
		}
		else if ($body.hasClass("chatham5"))
		{
			url += "chatham5.jpg";
		}
		else if ($body.hasClass("chatham6"))
		{
			url += "chatham6.jpg";
		}
		else if ($body.hasClass("chatham7"))
		{
			url += "chatham7.jpg";
		}
		else if ($body.hasClass("chatham8"))
		{
			url += "chatham8.jpg";
		}
		else if ($body.hasClass("chatham9"))
		{
			url += "chatham9.jpg";
		}
		else if ($body.hasClass("chatham10"))
		{
			url += "chatham10.jpg";
		}
		else if ($body.hasClass("chris"))
		{
			url += "chris.jpg";
		}
		else if ($body.hasClass("ginny"))
		{
			url += "ginny.jpg";
		}
		else if ($body.hasClass("petrolia1"))
		{
			url += "petrolia1.jpg";
		}
		else if ($body.hasClass("node-type-mr-broker"))
		{
			url += "placeholder-bg.jpg";
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
