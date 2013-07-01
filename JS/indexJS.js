var numImages = 0;
var curImage = 1;
var imageWidth = 380;
var totalWidth = 0;

$(document).ready( function() {
	
	$('section#preview .button-circle:first-child').css('background-color', '#aaaaaa').
		css('border-color', 'white').css('box-shadow', '0 0 20px #aaaaaa');
	
	$('#nav-menu #nav-menu-list li').hover( function() {
		if (!$(this).hasClass('animated')) {
			$(this).dequeue().stop().animate({ marginLeft: "+=170px" });
		}
	},function() {
	    $(this).addClass('animated').animate({ marginLeft: "-200px" }, "normal", "linear", function() {
			$(this).removeClass('animated').dequeue();
		});
	});
	
	$('.gallery-li').each( function() {
		numImages++;
		totalWidth += imageWidth;
	});
	
	$('.gallery-ul').css('width', totalWidth+'px');
	
	$('.gallery-mask').click(function(){
		moveLeft();
	});
	
	$('.right-button').click(function(){
		moveLeft();
	});
	
	$('.left-button').click(function(){
		moveRight();
	});
	
	$('.button-circle').click( function(){
		var pressedButton = $('.button-circle').index($(this)) + 1;
		moveTo($(this), pressedButton-curImage);
	});
	
	$('.button-circle').hover( function(){
		if($('.button-circle').index($(this)) != curImage - 1) {
			$(this).stop(true, true).animate( {
				backgroundColor: 'white',
				borderColor: 'black',
				boxShadow: '0 0 20px white'
			}, 250);
		}
	}, function() {
		if($('.button-circle').index($(this)) != curImage - 1) {
			$(this).stop(true, true).animate( {
				backgroundColor: 'black',
				borderColor: '#aaaaaa',
				boxShadow: '0 0 20px #aaaaaa'
			}, 250);
		}
	});
	
});

function moveTo(el, times) {
	$('.gallery-ul').animate({
		marginLeft: '-='+imageWidth*times+'px'
	}, 1000, 'swing');
	curImage += times;
	colorChosen(el);
}

function moveLeft(){
	if(curImage < numImages) {
		$('.gallery-ul').animate({
			marginLeft: '-='+imageWidth+'px'
		}, 1000, 'swing');
		curImage++;
	}
	colorChosen($('.button-circle').get(curImage-1));
}

function moveRight(){
	if(curImage > 1) {
		$('.gallery-ul').animate({
			marginLeft: '+='+imageWidth+'px'
		}, 1000, 'swing');
		curImage--;
	}
	colorChosen($('.button-circle').get(curImage-1));
}

function colorChosen(el){
	$('.button-circle').each( function() {
		$(this).animate({
			backgroundColor: 'black',
			borderColor: '#aaaaaa',
			boxShadow: '0 0 20px #aaaaaa'
		}, 500);
	});
	$(el).animate({
		backgroundColor: '#aaaaaa',
		borderColor: 'white',
		boxShadow: '0 0 20px #aaaa'
	}, 500);
}