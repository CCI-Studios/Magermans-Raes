(function($) {
    var timer = null;

    $(function(){
        $("#previous-testimonial").click(prevClick);
        $("#next-testimonial").click(nextClick);
        getRows().eq(0).addClass("active");

        if ($("body").hasClass("not-front"))
        {
            moveTestimonialsToBottom();
            $(window).resize(moveTestimonialsToBottom);
            $(window).load(moveTestimonialsToBottom);
        }

        timer = setInterval(next, 5000);
    });

    function moveTestimonialsToBottom()
    {
        var $block = $("#block-views-testimonials-block");
        $block.css({
            "top":"0"
        });
        var offset = $block.offset();

        $("body").removeClass("testimonials-bottom");
        if (offset.top < $(window).height() - $block.outerHeight())
        {
            $("body").addClass("testimonials-bottom");
            $block.css({
                "top":$(window).height() - $block.outerHeight() - offset.top + "px"
            });
        }
    }

    function prevClick()
    {
        stop();
        prev();
        return false;
    }
    function nextClick()
    {
        stop();
        next();
        return false;
    }

    function getCurrentRow()
    {
        return getRows().filter(".active")
    }
    function getRows()
    {
        return $("#block-views-testimonials-block .views-row");
    }
    function getMaxIndex()
    {
        return getRows().length-1;
    }
    function getMinIndex()
    {
        return 0;
    }
    function getNextIndex(index)
    {
        index++;
        if (index > getMaxIndex())
        {
            index = getMinIndex();
        }
        return index;
    }
    function getPrevIndex(index)
    {
        index--;
        if (index < getMinIndex())
        {
            index = getMaxIndex();
        }
        return index;
    }

    function prev()
    {
        endAnimations();
        var $currentRow = getCurrentRow();
        var index = $currentRow.index();
        index = getPrevIndex(index);

        $currentRow.animate({
            "left":"100%",
            "opacity":"0.1"
        }, function(){
            $(this).hide();
        })
        .removeClass("active");

        $prevRow = getRows().eq(index);
        $prevRow.css({
            "left":"-100%",
            "display":"block",
            "opacity":"0.1"
        })
        .animate({
            "left":"0",
            "opacity":"1"
        })
        .addClass("active");
    }
    function next()
    {
        endAnimations();
        var $currentRow = getCurrentRow();
        var index = $currentRow.index();
        index = getNextIndex(index);

        $currentRow.animate({
            "left":"-100%",
            "opacity":"0.1"
        }, function(){
            $(this).hide();
        })
        .removeClass("active");

        $nextRow = getRows().eq(index);
        $nextRow.css({
            "left":"100%",
            "display":"block",
            "opacity":"0.1"
        })
        .animate({
            "left":"0",
            "opacity":"1"
        })
        .addClass("active");
    }

    function endAnimations()
    {
        getRows().stop(true, true);
    }
    function stop()
    {
        clearInterval(timer);
    }
}(jQuery));
