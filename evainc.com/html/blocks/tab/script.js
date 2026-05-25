// Tab Responsive collapse
if (jQuery('.tab-content-collapse-title').length) {
    jQuery(document).on("click", ".tab-content-collapse-title .btn-link-arrow", function () {

        if ($(this).hasClass("is-open")) {
            $(this).removeClass("is-open");
            $(this).parents('.tab-pane').find(".tab-content-collapse-body").stop(true, true).slideUp(300);
        } else {
            $('.tab-content-collapse-title .btn-link-arrow').removeClass('is-open');
            $('.tab-content-collapse-body').slideUp(300);
            $(this).addClass("is-open");
            $(this).parents('.tab-pane').find(".tab-content-collapse-body").stop(true, true).slideDown(300); 
            
            var collapsetop = $(this).find(".tab-content-collapse-title");
            $('html, body').animate({
                scrollTop: collapsetop.offset().top - 500   
            }, 300); // Smooth scroll to the item
        }
        return false;
    });
}

// Tab Wise add Class infocard
if (jQuery('.classic-tab').length) {
    jQuery(document).on("click", ".nav-tabs .nav-link", function () {
        var id = $(this).attr('id');
        $('.info-card-section .info-card').parent().removeClass('d-none');
        $('.info-card-section').find('[data-id="' + id + '"]').parent().addClass('d-none');
    });

}