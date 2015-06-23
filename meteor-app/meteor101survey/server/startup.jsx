Meteor.startup(function() {
  if (Suggestions.find().count() === 0) {
    var suggestions = [
      'Great presentation! Meteor blew me away!',
      'When\'s the next Meteor 101?',
      'You need more cool animations.'
    ];
    for (var i=0; i<suggestions.length; i++) {
      Suggestions.insert({
        suggestion: suggestions[i],
        createdAt: new Date().valueOf(),
        createdBy: 'testuser' + i
      });
    }
  }
  console.log(Suggestions.find().count());
});
