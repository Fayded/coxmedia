/*var Parallax = {
    utils: {
        leftSlide: function(section) {
            var left = section.position().left;
            $('#section-wrapper').stop().animate({
                left: '+=250'
            }, 700, 'linear', function() {
                section.addClass('slided').siblings('div.section').removeClass('slided');
            });
        },
        rightSlide: function(section) {
            var left = section.position().left;
            $('#section-wrapper').stop().animate({
                left: '-=250'
            }, 700, 'linear', function() {
                section.addClass('slided').siblings('div.section').removeClass('slided');
            });
        }
    },
    fn: {
        setHeights: function() {
            //$('div.section').width($(window).width());
        },
        onSiteScroll: function() {
            var section = null;

            $('#section-wrapper').mousewheel(function(event, delta) {
                event.preventDefault();
                if (delta < 0) { // down
                    section = ($('.slided').length) ? $('.slided') : $('#section-1');
                    var next = (section.next().length) ? section.next() : $('#section-1');
                    console.log(next);
                    Parallax.utils.leftSlide(next);
                }
                else if(delta > 0) { // up
                    section = ($('.slided').length) ? $('.slided') : $('#section-1');
                    var prev = (section.prev().length) ? section.prev() : $('#section-1');
                    Parallax.utils.rightSlide(prev);
                }
            });


        }
    },

    init: function() {
        for (var prop in this.fn) {
            if (typeof this.fn[prop] === 'function') {
                this.fn[prop]();
            }
        }
    }
};

Parallax.init();
*/