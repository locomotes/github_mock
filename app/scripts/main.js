


var name ,lastupdated, language, stargazers, forks;
repo.forEach(function(a) {
	// fork = '<div class="fork">' + a.fork + '</div>';
	name = '<div class="name">' + a.name + '</div>';
	lastupdated = '<div class="name">' + a.updated_at + '</div>';
	language = '<div class="language">' + a.language + '</div>';
	stargazers = '<div class="stargazers">' + a.stargazers_count + '</div>';
	forks = '<div class="forks">' + a.forks + '</div>';
	$('.results').append('<div class="box">' + name + lastupdated + language + stargazers + '<span class="octicon octicon-git-branch"></span>' + forks +'</div>');
});