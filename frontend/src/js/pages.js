(function($) {
    function scrollIntoView() {
        const $section = $('section.s-story');
        const $w = $(window);
        const $background = $('.s-story_img-item');
        $w.on('scroll', () => {
            const scrollDistance = $w.scrollTop();
            $section.each((i, val) => {
                const $it = $(val);
                if ($it.offset().top <= scrollDistance + $w.outerHeight() / 2) {
                    const id = $it.attr('id');
                    $section.removeClass('active');
                    $it.addClass('active');
                    $background.removeClass('active');
                    $(`.s-story_img-item[data-thumb='${id}']`).addClass('active');
                }
            });
        });
    }
    $(function() {
        scrollIntoView();
    });
})(jQuery);
