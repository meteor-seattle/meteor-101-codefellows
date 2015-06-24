Meteor.startup(function () {
  if (!(localStorage.getItem('deviceId'))) {
    var newId = new Meteor.Collection.ObjectID;
    localStorage.setItem('deviceId', newId._str);
  }
  var myId = localStorage.getItem('deviceId')
  Session.set('deviceId', myId);
  Meteor.call('setUserId', myId);

  React.render(<SuggestionInputList />, document.getElementById('suggestion-box'));
  React.render(<SurveyList />, document.getElementById('survey-questions'));
});
