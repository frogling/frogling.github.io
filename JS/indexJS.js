var contentHeight = 250;
var numImages = 0;
var curImage = 1;
var imageWidth = 380;
var totalWidth = 0;

$(document).ready( function() {
	$('section#main-content').css('height', contentHeight+'px');
	
	$('section#description .learn').click( function () {
		var $text =  $(this).parent().children('p');
		if($text.is(':visible')) {
			$text.slideUp();
			contentHeight -= 170;
		} else {
			$text.slideDown();
			contentHeight += 170;
		}
		$('section#main-content').animate({
			height: contentHeight
		}, 'medium');
	});
	
	$('section#features .learn').click( function () {
		var $list =  $(this).parent().children('ul');
		if($list.is(':visible')) {
			$list.slideUp();
			contentHeight -= 170;
		} else {
			$list.slideDown();
			contentHeight += 170;
		}
		$('section#main-content').animate({
			height: contentHeight
		}, 'medium');
	});
	
	$('.learn').dblclick( function() {
		return false;
	});
	
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
				backgroundColor: '#00FA9A',
				borderColor: '#48D1CC',
				boxShadow: '#00FA9A'
			}, 250);
		}
	}, function() {
		if($('.button-circle').index($(this)) != curImage - 1) {
			$(this).stop(true, true).animate( {
				backgroundColor: '#90EE90',
				borderColor: 'black',
				boxShadow: '#90EE90'
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
			backgroundColor: '#90EE90',
			borderColor: 'black',
			boxShadow: '0 0 20px #90EE90'
		}, 500);
	});
	$(el).animate({
		backgroundColor: 'black',
		borderColor: '#00EE76',
		boxShadow: '0 0 20px black'
	}, 500);
}