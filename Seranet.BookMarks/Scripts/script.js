$(document).ready(function() {

    /*==== ISOTOPE LAYOUT ====*/
    var $container = $('.section');

    $container.isotope({
        itemSelector: '.tile',
        layoutMode: 'fitRows',
    });

 

    /*==== METROMEGA FUNCTIONS ====*/
    $('.tileshow').each(function() {
        $(this).tileshow();
    });

    $('.bgtileshow').tileshow({
        timeout: 5000
    });


    /*==== FUNCTIONS ====*/
    function setMargin() {
        var margin = ($(window).height() - $('.section').height()) / 2 - 150;
        $('.section').css({
            'margin-top': margin
        });
    }


    
	function jqUpdateSize(){
		// Get the dimensions of the viewport
	
		var height = $(window).height()-90;
		var width = $('#user-header').width();
		
		$('.section').css('min-height',height-20);    // set the height
		$('.section').css('width',width-60);    // set the width
		
		
	};


    /*==== FUNCTION CALLS ====*/

    setMargin();
	jqUpdateSize();


});
