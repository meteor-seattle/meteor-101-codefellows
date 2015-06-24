Meteor.startup(function() {
  // seed some suggestions
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

  // seed some survey questions
  if (SurveyQuestions.find().count() === 0) {
    var sampleQs = [
      {
        question: 'What\'s your coding experience?',
        choices: [
          { label: 'Been doing this for years. (>5 yrs)', value: 0, voters: [] },
          { label: 'Coding away regularly (3-5 yrs)', value: 0, voters: [] },
          { label: 'Just getting started. (1-2 yrs)', value: 0, voters: [] },
          { label: 'I\'m a student. (<1 yr)', value: 0, voters: [] }
        ]
      },
      {
        question: 'What\'s your web framework/platform of choice these days?',
        choices: [
          { label: 'Meteor', value: 0, voters: [] },
          { label: 'Node', value: 0, voters: [] },
          { label: 'Angular', value: 0, voters: [] },
          { label: 'Ember', value: 0, voters: [] },
          { label: 'React', value: 0, voters: [] },
          { label: 'Rails', value: 0, voters: [] },
          { label: 'Django', value: 0, voters: [] },
          { label: 'Other', value: 0, voters: [] }
        ]
      }
    ];

    _.each(sampleQs, function(question) {
      SurveyQuestions.insert(question);
    });
  }
  console.log('Suggestion Count: ' + Suggestions.find().count());
  console.log('Questions: ' + SurveyQuestions.find().count());
});
