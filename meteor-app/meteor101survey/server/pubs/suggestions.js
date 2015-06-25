Meteor.publish('allSuggestions', function(count) {
  return Suggestions.find({}, {sort: {createdAt: -1}, limit: count});
});

Suggestions.allow({
  insert: function(userId, doc) {
    return (doc.suggest !== '');
  },

  remove: function(userId, doc) {
    return (userId === doc.createdBy);
  }
});