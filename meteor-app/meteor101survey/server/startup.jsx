Meteor.startup(function() {
  // seed some suggestions
  Suggestions.remove({});
  if (Suggestions.find().count() === 0) {
    var suggestions = [
      'Great presentation! Meteor is awesome!',
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
  SurveyQuestions.remove({});
  if (SurveyQuestions.find().count() === 0) {
    var sampleQs = [
      {
        question: 'What\'s your coding experience?',
        choices: [
          { label: 'Been doing this for years. (>5 yrs)', value: 0, color: 'rgb(114, 147, 203)', voters: []},
          { label: 'Coding away regularly (3-5 yrs)', value: 0, color: 'rgb(225, 151, 76)', voters: [] },
          { label: 'Just getting started. (1-2 yrs)', value: 0, color: 'rgb(132, 186, 91)', voters: [] },
          { label: 'I\'m a student. (<1 yr)', value: 0, color: 'rgb(211, 94, 96)', voters: [] }
        ]
      },
      {
        question: 'What web framework/platform do you use most these days?',
        choices: [
          { label: 'Meteor', value: 0, color: 'rgb(114, 147, 203)', voters: [] },
          { label: 'Node', value: 0, color: 'rgb(225, 151, 76)', voters: [] },
          { label: 'Angular', value: 0, color: 'rgb(132, 186, 91)', voters: [] },
          { label: 'Ember', value: 0, color: 'rgb(211, 94, 96)', voters: [] },
          { label: 'React', value: 0, color: 'rgb(128, 133, 133)', voters: [] },
          { label: 'Rails', value: 0, color: 'rgb(144, 103, 167)', voters: [] },
          { label: 'Django', value: 0, color: 'rgb(171, 104, 87)', voters: [] },
          { label: 'Other', value: 0, color: 'rgb(204, 194, 16)', voters: [] }
        ]
      },
      {
        question: 'What web framework/platform would you like to use more?',
        choices: [
          { label: 'Meteor', value: 0, color: 'rgb(114, 147, 203)', voters: [] },
          { label: 'Node', value: 0, color: 'rgb(225, 151, 76)', voters: [] },
          { label: 'Angular', value: 0, color: 'rgb(132, 186, 91)', voters: [] },
          { label: 'Ember', value: 0, color: 'rgb(211, 94, 96)', voters: [] },
          { label: 'React', value: 0, color: 'rgb(128, 133, 133)', voters: [] },
          { label: 'Rails', value: 0, color: 'rgb(144, 103, 167)', voters: [] },
          { label: 'Django', value: 0, color: 'rgb(171, 104, 87)', voters: [] },
          { label: 'Other', value: 0, color: 'rgb(204, 194, 16)', voters: [] }
        ]
      },
      {
        question: 'Which of these areas of dev do you think needs the most improvement?',
        choices: [
          { label: 'Deployment', value: 0, color: 'rgb(114, 147, 203)', voters: [] },
          { label: 'Tool Chain', value: 0, color: 'rgb(225, 151, 76)', voters: [] },
          { label: 'Dev/Ops', value: 0, color: 'rgb(132, 186, 91)', voters: [] },
          { label: 'Updates/Versioning', value: 0, color: 'rgb(211, 94, 96)', voters: [] },
          { label: 'Other', value: 0, color: 'rgb(128, 133, 133)', voters: [] }
        ]
      },
    ];

    _.each(sampleQs, function(question) {
      SurveyQuestions.insert(question);
    });
  }
  console.log('Suggestion Count: ' + Suggestions.find().count());
  console.log('Questions: ' + SurveyQuestions.find().count());
});
