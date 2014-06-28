
var cID = clientID || '';
var cSECRET = clientSecret || '';

var jon = _.template($('#sidebar_template').html() );

$.getJSON('https://api.github.com/users/locomotes', {client_ID: cID, client_secret: cSECRET}, function (data){
	
	//$('#sidebar_template').append(renderTemplate(template));

	$("#columnone").append( jon(data) );

});

var repos = _.template($('#repos').html() );

$.getJSON('https://api.github.com/users/locomotes/repos', {client_ID: cID, client_secret: cSECRET}, function (data){
	
	_.each(data, function(a){
	$(".results").append( repos(a) );
	});

});
