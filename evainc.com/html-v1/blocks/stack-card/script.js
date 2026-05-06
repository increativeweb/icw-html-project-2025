jQuery(document).ready(function ($) {

    const $block = $('.stack-card-block');
    const $lastCard = $block.find('.stack-card').last();
    console.log($lastCard);
    
    function checkLastCardPosition() {
        if (!$lastCard.length) return;

        const rect = $lastCard[0].getBoundingClientRect();

        // When last card reaches near 300px from top
        if (rect.top <= 100) {
            $block.css('padding-bottom', '0px');
        } else {
            $block.css('padding-bottom', '350px');
        }
    }

    // Run on scroll + load
    $(window).on('scroll resize', function () {
        requestAnimationFrame(checkLastCardPosition);
    });

    checkLastCardPosition();
});