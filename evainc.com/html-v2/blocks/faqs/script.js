jQuery(document).ready(function ($) {
    if (jQuery('.collapse-item').length) {
        jQuery(document).on("click", ".collapse-item .collapse-title", function () {
            var $this = jQuery(this).closest(".collapse-item");
            
            if ($this.hasClass("is-open")) {
                $this.removeClass("is-open");
                $this.find(".collapse-body").stop(true, true).slideUp(300); 
            } else {
                $(".collapse-item").removeClass("is-open");
                $(".collapse-item").find(".collapse-body").stop(true, true).slideUp(300); 
                $this.addClass("is-open");
                $this.find(".collapse-body").stop(true, true).slideDown(300); 
            }
            return false;
        });
    }

});