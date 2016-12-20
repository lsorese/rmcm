$(function() {
    $('.header__menu__desktop ul').slicknav({});
    jQuery('.toggle--mobile').on('click', function(e) {
        e.preventDefault();
        $('.header__menu__desktop ul').slicknav('toggle');
    });
    $('.options').parallax({ imageSrc: 'assets/images/parallax--building--o.png' });
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
    var waypoints = $('.article').waypoint(function(direction) {
        if (direction === "down") {
            $('.header').addClass('down');
        } else {
            $('.header').removeClass('down');

        }
    }, {
        offset: '150px'
    });

    jQuery('.article__dropdown h3 span').removeClass('fa-minus');
    jQuery('.article__dropdown h3 span').addClass('fa-plus');
    jQuery('.article__dropdown .drop').hide();
    jQuery('.article__dropdown:first').find('.drop').show();
    jQuery('.article__dropdown:first').find('.drop').show();
    jQuery('.article__dropdown:first h3 span').addClass('fa-minus');
    jQuery('.article__dropdown:first h3 span').removeClass('fa-plus');
    jQuery('.article__dropdown h3 span').on('click', function(e) {
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
