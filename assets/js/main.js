

(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 4000, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: true, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });

        

        new VenoBox({
            selector: '.my-video-links',
            maxWidth: '80%'
        });


        $('.menu-open').click( function (){
                  
                $('.off-canvas-menu').toggleClass('active');  
                $('.off-canvas-overlay').toggleClass('active');  
                $('.menu-open').toggleClass('toggle');  
                  
        });
        
        $(".close_nav").click(function(){
            $('.off-canvas-menu').removeClass('active'); 
            $(".off-canvas-overlay").removeClass('active'); 
        })
        $(".off-canvas-overlay").click(function(){
            $('.off-canvas-menu').removeClass('active'); 
            $(this).removeClass('active'); 
        })
        


        
       
              
        $(".slider").owlCarousel({
            items:2.3,
            nav:false,
            dot:false,
            loop:true,
            margin:20,
            autoplay:true,
            autoplayTimeout:2000,
            smartSpeed:1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1.3,
                   
                },
                768:{
                    items:2.3,
                   
                },
                991:{
                    items:1.5,
                   
                },
                1301:{
                    items:1.6,
                   
                },
                1401:{
                    items:2.2,
                   
                }
            }
            
          
        });




    });

    


    // jQuery(window).load(function(){

    //     $('select').niceSelect();
    // });


}(jQuery));	