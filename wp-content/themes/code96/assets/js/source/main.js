(function($) {

/*var classes = ["one", "one", "three",  "one", "two", "one", "two", "two", "three", "two", "one", "three", "two", "two","one", "three","one","two"];

	$('.item').each(function() {
		var index = $(this).index();
		if (index < classes.length) {
			$(this).addClass(classes[index]);
		}
	});
	*/

	var $container = $("#container"),
		$items = $('.item');
		$container.isotope({
			itemSelector : '.item',
			layoutMode: "perfectMasonry",
			perfectMasonry: {
				layout: "vertical",      // Set layout as vertical/horizontal (default: vertical)
				columnWidth: 320,        // Set/prefer specific column width (liquid layout tries to prefer said width)
				//rowHeight:432,          // Set/prefer specific row height (liquid layout tries to prefer said height)
			
				liquid: true,            // Set layout as liquid (default: false)
				//cols: 3,                 // Force to have x columns (default: null)
				//rows: 3,                 // Force to have y rows (default: null)
				minCols: 2,              // Set min col count (default: 1)
				minRows: 2,              // Set min row count (default: 1)
				maxCols: 9999,              // Set max col count (default: 9999)
				maxRows: 9999               // Set max row count (default: 9999)
			}
	});
	
	
	$(".item").each(function(){
	  //get the container width
	  var conWidth = $(this).width();
	  //and its height
	  var imgHeight = $(this).find("img").height();
	  //get the nested img width
	  var conHeight = $(this).height();
	  //and its height
	  var imgWidth = $(this).find("img").width();
	  //figure out how much of the image is not visible horizontally
	  var excessWidth = imgWidth - conWidth;
	  //and how much is not visible vertically
	  var excessHeight = imgHeight - conHeight;
	  //how far is this container from the left of the page
	  var containerPositionLeft = this.offsetLeft;
	  //and from the top
	  var containerPositionTop = this.offsetTop;

	});
	
	

	// Portfolio wall click to show panel
	$('.click-me').on('click',function() {
		
			
			$.ajaxSetup({cache:false});
			  var post_link = $(this).attr("rel");
			  $("#panel").empty().html("loading...");
			  $("#panel").load(post_link);
			// return false;
			 
		var height = $("#panel").height();
		if( height > 0 ) {
			$('#panel').css('height','0');
		} else {
			var clone = $('#panel').clone()
						.css({'position':'absolute','visibility':'hidden','height':'624px'})
						.addClass('slideClone')
						.appendTo('body');
						
			var newHeight = $(".slideClone").height();
			$(".slideClone").remove();
			$('#panel').css('height',newHeight + 'px');
		}
	});
	
	
	$(document).on('click', '.close', function(event) {

		event.preventDefault();

		var height = $("#panel").height();
		console.log('wysokosc penelu z close: ' + height);
		if( height > 0 ) {
			$('#panel').css('height','0');
		}
	});
	
	$(document).on('click', '#images-view a', function(event) {

		event.preventDefault();

		var href = jQuery(this).data('href');

		jQuery("#imageBox").fadeOut(400, function(){
		    jQuery(this).html('<img src="' + href + '">');
		}).fadeIn(400);


	});



	
	// Modal contact window
	$('.button').click(function() {  
		type = $(this).attr('data-type');  
		$('.overlay-container').fadeIn(function() {    
			window.setTimeout(function(){  
			$('.window-container.'+type).addClass('window-container-visible');  
			}, 100);    
		});  
	});  
		  
	$('.close').click(function() {  
		$('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');  
	}); 
	
	var viewport;
	var page;
	var pageContent;
	var slidingMenu;
	var slidingMenuContent;
	var isMenuOpen = false;
	var visiblePageMargin = 55;
	var maximumMenuWith = 500;
	var preloader   = '<center style="margin-top: 30px;"><img src="img/preloader.gif" alt="loading..." /></center>';

	initMetrics();

	function initMetrics() {

		page = $("#page");
		pageContent  = $("#pageContent");
		slidingMenu  = $("#slidingMenu");
		slidingMenuContent = $("#slidingMenuContent");
		viewport = {
	    	width  : $(window).width(),
	    	height : $(window).height()
		};
	}


	function openMenu() { 

		isMenuOpen = true;
		//Rem : Had to do this here because viewport.width value could have been updated since next open/close. If we rotate the device for example
	    var menuWidth = viewport.width - visiblePageMargin;

	    if(viewport.width > (maximumMenuWith+visiblePageMargin) ){
			menuWidth = maximumMenuWith;	
		} 

		//Rem : Unecessary except for windows phone7.5 where div with lower z-index are clickable....
		slidingMenu.css("visibility","visible");

		adjustHeight();
	    
	    page.animate({
	       left: menuWidth+"px"
	    }, { duration: 300 });
	}
	

	function closeMenu() {

		isMenuOpen = false;

    	page.animate(
    		{	left: "0px" }, 
    		{	duration: 180 , 
    			//For wp7 where div with lower z-index are clickable....
     			//SetTimeout to hide the menu only after closing
	    		complete: function() { slidingMenu.css("visibility","hidden");}
			}
		)
    	.animate({
            height : "100%"
    	}, { duration: 0 });
	}

	//Use to avoid overflow problem with scroll
	function adjustHeight() {

		var menuHeight = slidingMenu.height();
	    var pageHeight = page.height();
	    var MenuContentHeight = slidingMenuContent.height();
	    //to avoid overflow block on Android < 2.3
	    if(pageHeight < menuHeight){
	    	slidingMenu.css("height",MenuContentHeight+"px");	
	    	page.css("height",MenuContentHeight+"px");	
	    } 
	    else{
	    	slidingMenu.css("height",pageHeight+"px");
	    } 
	} 

	function loadPage(url) {

		closeMenu();
        pageContent.html(preloader);
        //Rem : Timeout is only necessary for demo purpose, to display the loader. Remove it for production.
        setTimeout( pageContent.load(url, function() {/* no callbacks */}), 1200);
	}

	function orientationChange() {

		//We must wait at least 500ms before recalculate metrics, 
		//If we don't, some old phones send the old metrics value instead of new orientation values
		window.setTimeout(function() {
	        
	        initMetrics();

			if(isMenuOpen) openMenu(); 
			else closeMenu();

	    }, 500);
	}

	//trigger the opening or closing action
	$("a.show-menu-button").click(function () {
		
		var pagePosition = page.css('left');
		
		if(pagePosition == "0px") {
			openMenu();
		}
		else { 
			closeMenu(); 
		}
	});

	//Some windows phones (7.5) does'nt fired the "orientationchange" event, that's why we must use "resize" event
	window.addEventListener("resize", orientationChange, false);
	window.addEventListener("orientationchange", orientationChange, false);


	//detect hash change
	$(window).bind('hashchange', function (e) { 
    
	    var hash = location.hash;
	    var url = "";

	    //For windows phone 7.5, the view doesn't automatically scroll to top when the pageContent is load
	    window.scrollTo(0, 1);
	    
	    if(hash == ''){
	        url = "short.php";
	    } else{
	        url = hash.split("#")[1];
	    } 

	    loadPage(url); 
 	});
	
	// Smooth anchor scroll
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
		  }
		}
	  });


})(jQuery);

// Social media slider
function toggle(id) {
	var el = document.getElementById(id);
	var img = document.getElementById("arrow");
	var box = el.getAttribute("class");
	if(box == "hide"){
		el.setAttribute("class", "show");
		//delay(img, "assets/images/trigger.png", 400);
	}
	else{
		el.setAttribute("class", "hide");
		//delay(img, "assets/images/trigger.png", 400);
	}
}

function delay(elem, src, delayTime){
	window.setTimeout(function() {elem.setAttribute("src", src);}, delayTime);
}
