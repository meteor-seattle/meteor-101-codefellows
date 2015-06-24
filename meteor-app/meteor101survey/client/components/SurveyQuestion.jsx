SurveyQuestion = React.createClass({
  handleClick: function(newIdx, id, evt) {
    var oldIdx = evt.target.parentElement.getAttribute('data-chosen');
    var property;
    var action;

    if (newIdx != oldIdx) {
      property = 'choices.' + newIdx + '.voters';
      var addToSet = {};
      addToSet[property] = Session.get('deviceId');

      property = 'choices.' + newIdx + '.value';
      var inc = {}
      inc[property] = 1;

      if (oldIdx >= 0) {
        property = 'choices.' + oldIdx + '.voters';
        var pull = {};
        pull[property] = Session.get('deviceId');

        property = 'choices.' + oldIdx + '.value';
        inc[property] = -1;

        action = {
            $addToSet: addToSet,
            $pull: pull,
            $inc: inc
          }
      } else {
        action = {
          $addToSet: addToSet,
          $inc: inc
        }
      }
    } else {
      property = 'choices.' + newIdx + '.voters';
      var pull = {};
      pull[property] = Session.get('deviceId');

      property = 'choices.' + newIdx + '.value';
      var dec = {}
      dec[property] = -1;

      action = {
        $pull: pull,
        $inc: dec
      }
    }
    console.log(action);
    return SurveyQuestions.update(
      {_id: id},
      action
    );
  },

  render: function() {
    var self = this;
    var chosen = -1;
    var listChoices = self.props.question.choices.map(function(choice, index) {
      var choiceClass = 'choice';
      if (choice.voters.indexOf(Session.get('deviceId')) >= 0) {
        choiceClass = 'chosen';
        chosen = index;
      }
      return (
        <li key={index} className={choiceClass} onClick={self.handleClick.bind(self, index, self.props.question._id)}>
          {choice.label}
        </li>
      );
    });

    return (
      <ul key={this.props.question._id} className='question' data-chosen={chosen}>
        <li className='question'>{this.props.question.question}</li>
        {listChoices}
      </ul>
    );
  }
});
