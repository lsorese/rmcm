$(function() {
    $('.header__menu__desktop ul').slicknav({});
    jQuery('.toggle--mobile').on('click', function(e) {
        e.preventDefault();
        $('.header__menu__desktop ul').slicknav('toggle');
    });
    $('.homeGrid').parallax({ imageSrc: 'assets/images/parallax--building--o.png' });
    $('.clients').parallax({ imageSrc: 'assets/images/parallax--building--o.png' });
    $('.clients__slideshow').owlCarousel({
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
    if ($('body').hasClass('sub')) {
        var waypoints = $('.article').waypoint(function(direction) {
            if (direction === "down") {
                $('.header').addClass('down');
            } else {
                $('.header').removeClass('down');

            }
        }, {
            offset: '150px'
        });
    }

    jQuery('.dropdown h3 span').removeClass('fa-minus');
    jQuery('.dropdown h3 span').addClass('fa-plus');
    jQuery('.dropdown .drop').hide();
    jQuery('.dropdown:first').find('.drop').show();
    jQuery('.dropdown:first').find('.drop').show();
    jQuery('.dropdown:first h3 span').addClass('fa-minus');
    jQuery('.dropdown:first h3 span').removeClass('fa-plus');
    jQuery('.dropdown h3 span').on('click', function(e) {
        e.preventDefault();
        $that = $(this);
        $drop = $that.parent().parent().find('.drop');
        if ($drop.is(":visible")) {
            $drop.slideUp();
            $that.removeClass('fa-minus');
            $that.addClass('fa-plus');

        } else {
            $drop.slideDown();
            $that.addClass('fa-minus');
            $that.removeClass('fa-plus');
        }
    });


});
