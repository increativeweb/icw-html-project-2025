function initWhoWeHelpAccordion() {
    const stickyOffset = 76;
    const mobileBreakpoint = 992;
    function mobileAccordion() {
        if ($(window).width() < mobileBreakpoint) {
            // Remove bootstrap tab classes
            $('.tab-pane').removeClass('fade show active');
            // Hide all bodies first
            $('.tab-content-collapse-body').hide();
            $('.tab-content-collapse-title .btn-link-arrow').removeClass('is-open');
            // Open first if none open
            if (!$('.tab-pane.is-open').length) {
                $('.tab-pane:first').addClass('is-open');
            }
            // Restore open state
            $('.tab-pane.is-open').each(function () {
                $(this).addClass('show active').find('.tab-content-collapse-body').show();
                $(this).find('.tab-content-collapse-title .btn-link-arrow').addClass('is-open');
            });
        } else {
            // Desktop reset
            $('.tab-pane').removeClass('is-open').addClass('fade');
            $('.tab-content-collapse-body').removeAttr('style');
            $('.tab-content-collapse-title .btn-link-arrow').removeClass('is-open');

            // Restore bootstrap first active tab
            $('.tab-pane').removeClass('show active');
            $('.tab-pane:first').addClass('show active');
            $('.tab-nav .btn-link-arrow').removeClass('active').attr('aria-selected', 'false');
            $('.tab-nav .btn-link-arrow:first').addClass('active').attr('aria-selected', 'true');
        }
    }

    // Mobile accordion click
    $(document).on('click','.tab-content-collapse-title .btn-link-arrow',function (e) {
        if ($(window).width() >= mobileBreakpoint) return;
        e.preventDefault();
        const $this = $(this);
        const $tabPane = $this.closest('.tab-pane');
        const $body = $tabPane.find('.tab-content-collapse-body');
        // Already open → close
        if ($tabPane.hasClass('is-open')) {
            $tabPane.removeClass('is-open');
            $this.removeClass('is-open');
            $body.stop(true, true).slideUp(300);
            return;
        }
        // Close all
        $('.tab-pane').removeClass('is-open');
        $('.tab-content-collapse-title .btn-link-arrow').removeClass('is-open');
        $('.tab-content-collapse-body').stop(true, true).slideUp(300);

        // Wait for collapse
        setTimeout(function () {
            const targetTop = $tabPane.find('.tab-content-collapse-title').offset().top - stickyOffset;
            // Scroll correctly
            $('html, body').stop(true).animate({
                scrollTop: targetTop
            }, 300, function () {
                // Open selected
                $tabPane.addClass('is-open show active');
                $this.addClass('is-open');
                $body.stop(true, true).slideDown(300);
            });
        }, 320);
    });
    // Initial load
    mobileAccordion();
    // Resize
    let resizeTimer;

    $(window).on('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            mobileAccordion();
        }, 150);
    });
}

// Init
$(document).ready(function () {
    initWhoWeHelpAccordion();
});
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
