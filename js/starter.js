$(document).ready(function(){

$('#search').on('click', function() {
	$(this).slideToggle(); 
	$('#search-box').slideToggle();
});

$('.unlock').hover(function() {
	$(this).find('.people').toggleClass('hide');
	$(this).find('.unlock-btn').toggleClass('hide');
});

$('.grab').hover(function() {
	$(this).find('.unlock-btn').toggleClass('hide');
});

$('img').tooltip();


});