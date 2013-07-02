var nameArr = new Array("Neha Crosby", "Yasha Gootkin", "Genevieve Shemessian", "Rana Abu-Obeida");

$(document).ready( function() {
	
	$('#nav-menu #nav-menu-list li').hover( function() {
		if (!$(this).hasClass('animated')) {
			$(this).dequeue().stop().animate({ marginLeft: "+=170px" });
		}
	},function() {
	    $(this).addClass('animated').animate({ marginLeft: "-200px" }, "normal", "linear", function() {
			$(this).removeClass('animated').dequeue();
		});
	});
	
});