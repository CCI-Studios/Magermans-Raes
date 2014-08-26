(function($) {
    $(function(){
        $(".webform-datepicker select.year").each(function(){
            var items = jQuery(this).children("option[selected!=selected]");
            $(this).append(items.get().reverse());
        });
    });
}(jQuery));
