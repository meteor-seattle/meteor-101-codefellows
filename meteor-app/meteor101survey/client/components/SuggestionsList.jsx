SuggestionsTransitionGroup = React.addons.CSSTransitionGroup;

SuggestionsList = React.createClass({
  mixins: [ DDPMixin, ReactiveMixin ],

  subscriptions: function() {
    return Meteor.subscribe('allSuggestions', this.props.pagingCount);
  },

  getReactiveState: function() {
    return {
      suggestList: Suggestions.find({}, {sort: {createdAt: -1}}).fetch()
    };
  },
  
  handleClick: function(id) {
    return Suggestions.remove({_id: id});
  },

  render: function() {
    var self = this;
    var listItems = self.state.suggestList.map(function(item) {
      var isMine = '';
      if (item.createdBy === Session.get('deviceId')) {
        isMine = 'my-post';
      }
      return (
        <li key={item._id} className={isMine ? isMine : 'your-post'}>
            <a className="delete" onClick={self.handleClick.bind(self, item._id)}>
              <i className="fa fa-times"></i>
            </a>
          <i className="fa fa-paper-plane-o"> </i> {item.suggestion}
        </li>
      );
    });

    return (
      <ul id="suggestions">
        <SuggestionsTransitionGroup transitionName='fadein'>
          {listItems}
        </SuggestionsTransitionGroup>
      </ul>
    );
  }
});
