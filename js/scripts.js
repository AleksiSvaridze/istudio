$(document).ready( function() {
    /*================ Carousel Settings ========================== */
    // $('.text-carousel').owlCarousel({
    //     autoplay: true,
    //     loop:true,
    //     margin:0,
    //     dots: false,
    //     mouseDrag: false,
    //     touchDrag: false,
    //     animateOut: 'fadeOut',
    //     responsive:{
    //         0:{
    //             items:1
    //         }
    //     }
    // });
    /* =============== responsive menu settings =================== */

    // Open Menu
    $('.responsive-btn').click( function(){
        $('.section-mobile-menu').toggleClass('mobile-menu-active');
        // $('body').toggleClass('body-freeze');
        // Close SUB Menu
        $('.mobile-header-nav__sub').removeClass('mobile-header-nav__sub-active');
    } );

    // Close menu when link is clicked
    $('.mobile-header-nav__links').click( function() {
        $('.section-mobile-menu').removeClass('mobile-menu-active');
    } );
    // Close menu when screen is more then 991px
    function resize(){
        if (window.innerWidth >= 991) {
            $('.section-mobile-menu').removeClass('mobile-menu-active');
            // $('.mobile-header-nav__ul-sub').removeClass('ul-sub-active');
        }
    };
    resize();
    $(window).resize(resize);

    // ViewPort Checker
    $('.section-studio__animated-img').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated zoomIn',
        offset: 100
    });
    $('.section-studio__animated-text').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated zoomIn',
        offset: 100
    });
    // Section Service
    $('#website').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated zoomIn',
        offset: 100
    });
    $('#administration').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated zoomIn',
        offset: 100
    });
    $('#seo').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated zoomIn',
        offset: 100
    });
    // PORTFOLIO
    $('.product-box').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated zoomIn',
        offset: 100
    });
    // Contact
    $('#contact_id').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated zoomIn',
        offset: 100
    });

    // Scroll top
    var scrollTop = $(".scrollTop");

    $(window).scroll(function() {
        // declare variable
        var topPos = $(this).scrollTop();

        // if user scrolls down - show scroll to top button
    if ( topPos > 100 ) {

        $(scrollTop).css("opacity", "1");
        $('.section-header').css({'padding-top':10,'padding-bottom':10});
        $('.logo').css({'height': 40,'font-size': 20 });
        $('.logo__text').css({'font-size': 16});
        // $('.section-header').css({'background-color': '#fff','box-shadow':'0 1px 2px rgba(0,0,0, .2)'});

        } else {

            $(scrollTop).css("opacity", "0");
            $('.section-header').css({'padding-top':20,'padding-bottom':20});
            $('.logo').css({'height': 60, 'font-size': 30});
            $('.logo__text').css({'font-size': 18});
            // $('.section-header').css({'background-color': 'initial','box-shadow':'0 1px 2px rgba(255,255,255, .7)'});

        }

         // Mobile Menu
    if ( topPos <= 100 && window.innerWidth <= 991 ) {
    
            $('.section-header').css({'padding-top':10,'padding-bottom':10});
            $('.logo').css({'height': 40 });
    
    }

    }); // scroll END
    

    //Click event to scroll to top
    $(scrollTop).click(function() {
        $('html, body').animate({
        scrollTop: 0
        }, 800);
        return false;

    }); // click() scroll top END

    // Service boxes 
    $('#website-id').click( function(e){
        e.preventDefault();
        $('#website .service-box__front, #website .service-box__back').addClass('active-service-box');
    } );
    $('#administration-id').click( function(e){
        e.preventDefault();
        $('#administration .service-box__front, #administration .service-box__back').addClass('active-service-box');
    } );
    $('#seo-id').click( function(e){
        e.preventDefault();
        $('#seo .service-box__front, #seo .service-box__back').addClass('active-service-box');

        // Show SERVICE_SEO_ICONS
        // $('.seo-icon-wrapper').addClass('d-visible');
        // $('.seo-icons').addClass('d-visible');
    } );
    // Back to service front
    $('#website-back').click( function(e){
        e.preventDefault();
        $('#website .service-box__front, #website .service-box__back').removeClass('active-service-box');
    } );
    $('#administration-back').click( function(e){
        e.preventDefault();
        $('#administration .service-box__front, #administration .service-box__back').removeClass('active-service-box');
    } );
    $('#seo-back').click( function(e){
        e.preventDefault();
        $('#seo .service-box__front, #seo .service-box__back').removeClass('active-service-box');

        // Hide SERVICE_SEO_ICONS
        // $('.seo-icon-wrapper').removeClass('d-visible');
        // $('.seo-icons').removeClass('d-visible');
    } );
    
    // Menu scroll with active links
    // $('.nav-ul').on('click','a',function() {

    //     $('.nav-ul li a.active').removeClass('active')

    //     $(this).addClass('active');

    // });

    $('.header-nav__ul').localScroll();

    var scrollLink = $('.scroll');

    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: $(this.hash).offset().top }, 1000);
    });

    // $(window).scroll(function() {
    //     var scrollBarLocation = $(this).scrollTop();
    //     scrollLink.each(function() {
    //         var divOffset = $(this.hash).offset().top

    //         if ( divOffset <= scrollBarLocation ) {
    //             $(this).parent().addClass('current');
    //             $(this).parent().siblings().removeClass('current');
    //         }
    //     });
    // });


}); // Document.Ready --End