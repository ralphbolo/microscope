if (Posts.find().count() === 0){
	var timeNow = new Date().getTime();

	var ralphId = Meteor.users.insert({
		profile: {name: 'Ralph Alfie'}
	});
	var ralph = Meteor.users.findOne(ralphId);

	var mikeId = Meteor.users.insert({
		profile: {name: 'Mike Jones'}
	});
	var mike = Meteor.users.findOne(mikeId);


	var nbaId = Posts.insert({
		title: "Ralph Bolo",
		userId: ralph._id,
		author: ralph.profile.name,
		url: "http://nba.com",
		submitted: new Date(timeNow - 7 * 36000 * 1000),
		commentsCount: 3
	});

	Comments.insert({
		postId: nbaId,
		userId: ralph._id,
		author: ralph.profile.name,
		submitted: new Date(timeNow - 3 * 3600 * 1000),
		body: "story number 3!"
	});

	Comments.insert({
		postId: nbaId,
		userId: mike._id,
		author: mike.profile.name,
		submitted: new Date(timeNow - 5 * 3600 * 1000),
		body: "amazing site!"
	});

	Comments.insert({
		postId: nbaId,
		userId: mike._id,
		author: mike.profile.name,
		submitted: new Date(timeNow - 12 * 3600 * 1000),
		body: "look a penny!"
	});

}
