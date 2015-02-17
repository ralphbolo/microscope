if (Posts.find().count() === 0){
	Posts.insert({
		title: "Ralph Bolo",
		url: "http://ralphbolo.me"
	});

	Posts.insert({
		title: "twitter",
		url: "http://twitter.com/bolonomicz"
	});

	Posts.insert({
		title: "NBA",
		url: "nba"
	})
}