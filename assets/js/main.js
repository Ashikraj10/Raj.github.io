/*
*****************************************************
*	CUSTOM JS DOCUMENT                              *
*	Single window load event                        *
*   "use strict" mode on                            *
*****************************************************
*/
$(window).on("load", function() {
	
	"use strict";
		   
	var preLoader = $('.preloader');
	var fancybox =  $('.fancybox');
	var faq = $('#faq');
	var comingSoonTimer = $('#coming-soon-timer');
	var fancyboxIframe = $('.fancybox-iframe');
		 
// ============================================
// PreLoader On window Load
// =============================================
		if(preLoader.length) {	 
		 preLoader.addClass('loaderout');
	    }
         
//========================================
// mobile menu toggle
//======================================== 
	
	$(".menu").click(function(event) {
		event.preventDefault();
		$(".topNav").slideToggle(500);
	});

//========================================
// on resize
//======================================== 

	function resizeFuncs() { // define function
		var w = $(window).width();
		if(w > 768) { $('.topNav').removeAttr('style'); }
	};

	resizeFuncs(); // run onload
	
	$(window).resize(function(){ resizeFuncs(); }); // run onresize
	
//========================================
// LightBox / Fancybox
//======================================== 	
	
	if(fancybox.length) {
		 fancybox.fancybox();
	}


	if(fancyboxIframe.length) {
		fancyboxIframe.fancybox({
			type: "iframe",
			// other API options
		});
}
//========================================
// Accordion functions Calling
//======================================== 	
 
 	if(faq.length){   
		faq.accordion();
	}


//========================================
// Owl Carousel functions Calling
//======================================== 	
 
	owlCarouselInit();  	

	if(comingSoonTimer.length){
		comingsoonInt();
	}
});



//========================================
// Owl Carousel functions
//======================================== 	

function owlCarouselInit() {
	
	"use strict";	
	
//========================================
// owl carousels settings
//======================================== 		
	var mainSlider = $('#main-slider');
	var aboutSlider = $('#about-us-slider');	
	var facilitiesSlider = $('#facilities-slider');	
	var blogSlider = $('#blog-slider');	
	var blogSliderSm = $('#blog-slider-sm');	
	var partenerSlider = $('#partener-slider');	
	var nextNav = 'Next';
	var prevNav = 'Prev';
	
		if(mainSlider.length) {	
		 mainSlider.owlCarousel({
				 loop:true,
				margin:0,
				nav:true,
				navText:[prevNav,nextNav],
				dots:false,
				autoplay:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
		}
		
		if(aboutSlider.length) {	
			aboutSlider.owlCarousel({
				loop:true,
				margin:0,
				nav:true,
				navText:[prevNav,nextNav],
				dots:false,
				autoplay:true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
			
		}
		
		if(facilitiesSlider.length) {	
			facilitiesSlider.owlCarousel({
				loop:true,
				margin:0,
				nav:false,
				dots:true,
				autoplay:true,
				autoplayTimeout:1500,
				stopOnHover : false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
			
		}
		
		if(blogSlider.length) {	
			blogSlider.owlCarousel({
				loop:true,
				margin:0,
				nav:true,
				navText:[prevNav,nextNav],
				dots:false,
				autoplay:true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
			
		}
		
		if(blogSliderSm.length) {	
			blogSliderSm.owlCarousel({
				loop:true,
				margin:0,
				nav:true,
				navText:[prevNav,nextNav],
				dots:false,
				autoplay:true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
			
		}
		
		if(partenerSlider.length) {	
			partenerSlider.owlCarousel({
				loop:true,
				margin:0,
				nav:true,
				navText:[prevNav,nextNav],
				dots:false,
				autoplay:true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:3
					},
					1000:{
						items:4
					}
				}
			});
			
		}
		
		

}



function comingsoonInt(){
// Set the date we're counting down to
var countDownDate = new Date("DEC 24, 2017 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("days").innerHTML = days ;
	
	 document.getElementById("hours").innerHTML = hours ;
	
	 document.getElementById("seconds").innerHTML = seconds ;
	
	 document.getElementById("minutes").innerHTML = minutes ;
	 
    
}, 1000);

}

/*
*****************************************************
*	END OF THE JS 									*
*	DOCUMENT                       					*
*****************************************************
*/