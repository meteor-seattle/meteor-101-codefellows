SurveyList = React.createClass({
  mixins: [ DDPMixin, ReactiveMixin ],

  subscriptions: function() {
    return Meteor.subscribe('allSurveyQs');
  },

  getReactiveState: function() {
    return {
      surveyQs: SurveyQuestions.find({}).fetch()
    };
  },

  render: function() {
    var questionList = this.state.surveyQs.map(function(question) {
      return (
        <div key={question._id}>
          <SurveyAnswerChart key={'chart-' + question._id} canvasId={question._id} choices={question.choices} />
          <SurveyQuestion key={'quest-' + question._id} question={question} />
        </div>
      );
    });
    return (
      <section>
        {questionList}
      </section>
    );
  }
});
