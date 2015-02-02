$(function(){
jQuery(document).scroll(function () {
    var $header = jQuery('#header');
    //    var $button = jQuery('#button');
    var $body = jQuery('body').clearQueue();

    if ($(this).scrollTop() > $(window).height() - 152) {
        $("#more").css("position", "fixed");
        $("#circlelogo").css("position", "fixed");
		$("#moreheader").css("position", "fixed");
		$("#moreheader").css("color", "#f0f0f0");
//        $("#more").css("z-index", "0");
//        $("#more").css("color", "#f0f0f0");
        $("#more").css("background", "#fff");
        $("#more").css("top", "0px");
        // $("#moreheader").css("visibility", "visible");
        $("#circlelogo").css("top", "5px");
		$("#moreheader").css("top", "5px");
		$("#moreheader").css("margin-top", "-5px");
		$("#moreheader").css("background", "#fff");
//        $("#logo").css("color", "#444");
    } else {
        // $header.css("background", "#ccc");
//        $(".nav").css("color", "#000");
//        $("#more").css("z-index", "-1");
        $("#more").css("position", "absolute");
        $("#circlelogo").css("position", "absolute");
		$("#moreheader").css("position", "absolute");
		$("#moreheader").css("background", "#f0f0f0");
		$("#moreheader").css("margin-top", "-98px");
//		$("#moreheader").css("color", "#fff");
        $("#more").css("background", "#f0f0f0");
//        $("#more").css("color", "#000");
        $("#more").css("top", "");
        // $("#moreheader").css("visibility", "hidden");
        $("#circlelogo").css("top", "");
		$("#moreheader").css("top", "");
//        $("#logo").css("color", "#444");
    }
});

});


$(document).ready(function () {
    var bottomPosition = $(window).height();
    $("#wrapper").css("margin-top", bottomPosition - 100 + "px");

    $(window).resize(function () {
        var bottomPosition = $(window).height();
        $("#wrapper").css("margin-top", bottomPosition - 100 + "px");
    });

function scroll( $el ) {
			var completeCalled = false;
			$('html, body').animate({
				scrollTop: $( $el.attr('href') ).offset().top - 90
			}, {
            complete: function () {
                if (!completeCalled) {
                    completeCalled = true;
                }
            }
        });
}

function scrollNoLink( $el ) {
			var completeCalled = false;
			$('html, body').animate({
				scrollTop: $( $el ).offset().top -90
			}, {
            complete: function () {
                if (!completeCalled) {
                    completeCalled = true;
                }
            }
        });
}

		$('#mainnav a').click(function( e ) {
			e.preventDefault();
			e.stopImmediatePropagation();
			var $el = $(this);
			scroll( $el );
		});
		
		$('#circlelogo').click(function( e ) {
			e.preventDefault();
			e.stopImmediatePropagation();
			$el = "#home";
			scrollNoLink( $el );
		});
        
    	$('#logo a').click(function( e ) {
			e.preventDefault();
			e.stopImmediatePropagation();
			$el = "#home";
			scrollNoLink( $el );
		});
				
});				