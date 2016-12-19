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
        if(direction === "down") {
        $('.header').addClass('down');
    } else {
                $('.header').removeClass('down');

    }
    }, {
        offset: '150px'
    })

});
