Meteor.publish('allSurveyQs', function() {
  return SurveyQuestions.find({});
});

SurveyQuestions.allow({
  insert: function(userId, doc) {
    return true;
  },

  update: function(userId, doc) {
    return true;
  }
});