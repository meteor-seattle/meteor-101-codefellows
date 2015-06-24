SurveyQuestion = React.createClass({
  handleClick: function(key) {
    console.log('clicked ' + key);
  },

  render: function() {
    var self = this;
    var listChoices = self.props.question.choices.map(function(choice, index) {
      return (
        <li key={'choice-' + index} className='choice' onClick={self.handleClick.bind(self, choice.label)}>
          {choice.label}
        </li>
      );
    });

    return (
      <ul key={this.props.question._id} className='question'>
        <li className='question'>{this.props.question.question}</li>
        {listChoices}
      </ul>
    );
  }
});
