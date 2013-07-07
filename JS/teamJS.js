var nameArr = new Array("Rana Abu Obeida", "Yasha Gootkin", "Zakaria Wari", "Mohannad Abu Nasser",
		"Genevieve Shemessian", "Dali Gafanovich", "Dian Salameh", "Tal Elishoov", "Neha Crosby", "Uri Bailey"  );

var infoArr = new Array("Description1", "Description2", "Description3", "Description4",
		"Description5", "Description6", "Description7", "Description8", "Description9", "Description10");

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