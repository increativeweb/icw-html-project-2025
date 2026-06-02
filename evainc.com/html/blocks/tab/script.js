function initResponsiveTabs() {
    function handleLayout() {
        if ($(window).width() < 992) {
            // Mobile Accordion
            $('.tab-content-collapse-body').hide();
            $('.tab-content-collapse-title .btn-link-arrow').removeClass('is-active');
            const $activePane = $('.tab-pane.is-active').first();
            if ($activePane.length) {
                $activePane.find('.tab-content-collapse-body').show();
                $activePane.find('.tab-content-collapse-title .btn-link-arrow').addClass('is-active');
            }
        } else {
            // Desktop Tabs
            $('.tab-content-collapse-body').show();
            $('.tab-content-collapse-title .btn-link-arrow').removeClass('is-active');
            const $activeNav = $('.tab-nav .btn-link-arrow.is-active').first();
            if ($activeNav.length) {
                const targetId = $activeNav.attr('id');
                $('.tab-pane').removeClass('is-active');
                $('.tab-pane[data-id="' + targetId + '"]').addClass('is-active');
            }
        }
    }
    handleLayout();
    $(window).on('resize', function () {
        handleLayout();
    });
    // Desktop Tabs
    $(document).on('click', '.tab-nav .btn-link-arrow', function () {
        if ($(window).width() < 992) return;
        const targetId = $(this).attr('id');
        $('.tab-nav .btn-link-arrow').removeClass('is-active');
        $(this).addClass('is-active');
        $('.tab-pane').removeClass('is-active').stop(true, true).hide();
        $('.tab-pane[data-id="' + targetId + '"]').addClass('is-active').fadeIn(300);
    });
    // Mobile Accordion
    $(document).on('click', '.tab-content-collapse-title .btn-link-arrow', function () {
        if ($(window).width() >= 992) return;
        const $btn = $(this);
        const $pane = $btn.closest('.tab-pane');
        const $body = $pane.find('.tab-content-collapse-body');
        if ($btn.hasClass('is-active')) {
            $btn.removeClass('is-active');
            $pane.removeClass('is-active');
            $body.stop(true, true).slideUp(300);
        } else {
            $('.tab-content-collapse-title .btn-link-arrow').removeClass('is-active');
            $('.tab-pane').removeClass('is-active');
            $('.tab-content-collapse-body').stop(true, true).slideUp(300);
            $btn.addClass('is-active');
            $pane.addClass('is-active');
            $body.stop(true, true).slideDown(300);
        }
    });
}
if ($('.tab-block').length) {
    initResponsiveTabs();
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
