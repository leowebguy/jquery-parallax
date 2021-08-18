/*
jQuery Parallax 1.0.0
https://github.com/leowebguy/jquery-parallax

Based on http://www.ianlunn.co.uk/plugins/jquery-parallax/ from Ian Lunn.
*/
(($) => {
    let e = $(window), o = e.height();
    e.resize(() => {
        o = e.height()
    });
    $.fn.parallax = function(i) {
        let r, f = {offsetX: "50%", speedFactor: .12, outerHeight: !0, offsetY: 0};
        let s = $(this), j = $.extend(f, i);
        let q = (t, e) => {
            return e ? t.outerHeight(!0) : t.height()
        };

        let n = () => {
            let n = e.scrollTop();
            s.each(() => {
                let e = $(this), f = e.offset().top;
                f + q(e, j.outerHeight) < n || f > n + o || s.css("backgroundPosition", j.offsetX + " " + Math.round((f - n - o / 2) * j.speedFactor + j.offsetY) + "px")
            })
        };

        e.bind("scroll", n).resize(n), n()
    }
})(jQuery);
