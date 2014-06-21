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



// $.getJSON('https://api.github.com/users/locomotes/repos', {client_ID: cID, client_secret: cSECRET}, function (data){

// 	var name ,lastupdated, language, stargazers, forks;
// 	data.forEach(function(a) {
// 		fork = '<div class="fork">' + '<span class="octicon octicon-repo"></span>' + a.fork + '</div>';
// 		name = '<div class="name">' + a.name + '</div>';
// 		lastupdated = '<div class="lastupdated">' + a.updated_at + '</div>';
// 		language = '<div class="language">' + a.language + '</div>';
// 		stargazers = '<div class="stargazers">' + a.stargazers_count + '</div>';
// 		forks = '<div class="forks">' + a.forks + '</div>';
// 		$('.results').append('<div class="box">' + name + lastupdated +'</div>');
// 		$('.results').append('<div class="box2">'+ language + stargazers + forks +'</div>');
// 	});

// });


	

// $.ajax({
//   url: "https://avatars.githubusercontent.com/u/5142640?",
//   dataType : 'json'
// });
