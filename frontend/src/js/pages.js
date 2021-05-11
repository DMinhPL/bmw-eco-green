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
                    const $item = $(`.s-story_img-item[data-thumb='${id}']`);
                    $item.addClass('active');
                }
            });
        });
        if ($('.s-story_img-item.hasVideo').find('iframe').length > 0) {
            const $video = $('.s-story_img-item.hasVideo').find('iframe');
            function youtube_parser(url) {
                const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
                const match = url.match(regExp);
                return match && match[7].length == 11 ? match[7] : false;
            }
            $('.s-story_img-item.hasVideo').find('iframe')[0].src += `&autoplay=1&controls=0&mute=1&loop=1&playlist=${youtube_parser($video[0].src)}`;
        }
    }

    function autoScrollTop() {
        $('body, html').animate({ scrollTop: 0 }, 800);
    }
    $(function() {
        scrollIntoView();
        autoScrollTop();
    });
})(jQuery);
