Template.postEdit.created = function () {
  Session.set('postEditErrors', {});
}

Template.postEdit.helpers({
  errorMessage: function(field) {
    return Session.get('postEditErrors')[field];
  },
  errorClass: function(field) {
    return !!Session.get('postEditErrors')[field] ? 'has-error' : '';
  }
});

Template.postEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentPostId = this._id;

    var postProperties = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    }

    var errors = validatePost(postProperties);
    if (errors.title || errors.url)
      return Session.set('postEditErrors', errors);

    Posts.update(currentPostId, {$set: postProperties}, function(error){
      if (error) {
        throwError(error.reason);
      } else {
        Router.go('postPage', {_id: currentPostId});
      }
    });
    //to-do excercise chapter 8 possible solution
    //the solution to this issue would be to also use a
    //Meteor method for the edit post form, but we'll leave this
    //as an exercise to the reader.
    // Meteor.call('postInsert', post, function(error, result) {
    //   if (error)
    //     return alert(error.reason);
    //
    //   if( result.postExists)
    //     alert('This link has already been posted');
    //
    //   Router.go('postPage', {_id: result._id});
    // });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if(confirm("Delete this post?")) {
      var currentPostId = this._id;
      Posts.remove(currentPostId);
      Router.go('postsList');
    }
  }
});
