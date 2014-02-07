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


$('#hub-tab').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

function randomNumber (top) {
    var a = Math.floor(Math.random() * top);
    return a;
}

function discussion (a) {
	var discussionX = "<div class='bb-list'>";
	for (var i = 0; i <= a ; i++) {
		discussionX += "<div class='item-bb'><div class='cat-item-title'><div class='right people'>"+ randomNumber(20)+" <span class='glyphicon glyphicon-user'></span> <span class='badge'>"+ randomNumber(20)+"</span> "+ (i)+" minutes ago</div><a href='#'><h3><span class='glyphicon glyphicon-star-empty'></span> "+loremIpsum(7)+"</h3></a></div></div>";
	}
	discussionX += "</div>"
	document.getElementById('discussion').innerHTML = discussionX;
};

function comumunity (a) {
	var communityX = "";
	for (var i = 0; i <= a ; i++) {
		communityX += "<div class='community-item col-md-3 col-sm-3'>"+
									"<div class='com-avatar'><img src='images/profile140px.jpg'></div>"+
									"<h4>"+loremIpsum(2)+"</h4>"+
									"<h4>Some role</h4>"+
									"<p>active X minutes ago</p>"+
								"</div>";
	}
	document.getElementById('community-list').innerHTML = communityX;
};

discussion(10);

comumunity(30);

});