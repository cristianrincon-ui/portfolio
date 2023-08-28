$(function(){ 
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});

// Animations
//-----------------------------------------------
var delay=0, setTimeoutConst;
if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
	$("[data-animation-effect]").each(function() {
		var item = $(this),
		animationEffect = item.attr("data-animation-effect");

		if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
			item.appear(function() {
				if(item.attr("data-effect-delay")) item.css("effect-delay", delay + "ms");
				setTimeout(function() {
					item.addClass('animated object-visible ' + animationEffect);

				}, item.attr("data-effect-delay"));
			}, {accX: 0, accY: -130});
		} else {
			item.addClass('object-visible');
		}
	});
};

// Jump To
//-----------------------------------------------
function jumpTo(id) {
	$('html, body').animate({
	    scrollTop: $('#'+id).offset().top - 70
	}, 500);
}

// Send mail
//-----------------------------------------------
$('#contact-form').on('submit', function() {
	event.preventDefault();
	var name = $("#username").val();
    var email = $("#usermail").val();
    var phoneIndicator = $("#phone-indicator").val();
    var phone = $("#phone").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    var dataString = 'name='+ name + '&email=' + email + '&phone=' + phoneIndicator + phone + '&subject=' + subject + '&message=' + message ;

    $.ajax({
    	type: "POST",
    	url: "src/mail.php",
    	data: dataString,
    	success: function(){
    		Swal.fire(
    		  'Tu mensaje ha sido enviado',
    		  'Pronto te daremos una respuesta',
    		  'success'
    		)
    	}
    });

    return false;
});