$(document).ready(
    function () {
        $('.about-section').waypoint(
            function (direction) {
                if (direction == "down") {
                    $('nav').addClass('sticky');
                } else {
                    $('nav').removeClass('sticky');
                }
            }, {
                offset: '400px'
            }            
        )
        //mobile navigation
        $('.mobile-nav-icon').click(
            function() {
                // $('.sticky').css('padding-bottom','20px');
                $('.main-nav').slideToggle(200);
                if ($('.mobile-nav-icon').hasClass('fa-bars')) {
                    $('.mobile-nav-icon').addClass('fa-times');
                    $('.mobile-nav-icon').removeClass('fa-bars');
                } else {
                    $('.mobile-nav-icon').removeClass('fa-times');
                    $('.mobile-nav-icon').addClass('fa-bars');
                }
            }
        )
    }

)