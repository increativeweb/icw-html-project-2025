// Tab Responsive collapse
if (jQuery(window).width() < 992) {
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
                
                var collapsetop = $(this).parents('.tab-pane');
                console.log(collapsetop);
                $('html, body').animate({
                    scrollTop: Math.max(collapsetop.offset().top - 120, 0)
                }, 300);
            }
            return false;
        });
    }
}

// Tab Wise add Class infocard
if (jQuery('.classic-tab').length) {
    jQuery(document).on("click", ".nav-tabs .nav-link", function () {
        var id = $(this).attr('id');
        $('.info-card-section .info-card').parent().removeClass('d-none');
        $('.info-card-section').find('[data-id="' + id + '"]').parent().addClass('d-none');
    });
    $(document).on('click', '.nav-tabs .nav-link', function () {
        const $this = $(this);
        // Small delay for Bootstrap tab update
        setTimeout(function () {
            $this[0].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center' // show on left side
            });
        }, 100);
    });

}
