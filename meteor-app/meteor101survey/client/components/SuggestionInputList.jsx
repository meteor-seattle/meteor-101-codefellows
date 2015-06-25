SuggestionInputList = React.createClass({
  getDefaultProps: function() {
    return {pagingCount: 10};
  },
  
  getInitialState: function() {
    return {userInput: '', pagingCount: 10};
  },

  handleChange: function(evt){
    this.setState({userInput: evt.target.value});
  },

  handleInput: function(evt) {
    if(evt.keyCode === 13) {
      if (this.state.userInput) {
        Suggestions.insert({
          suggestion: this.state.userInput,
          createdAt: new Date().valueOf(),
          createdBy: localStorage.getItem('deviceId')
        });
        this.setState({userInput: ''});
      }
    }
  },

  handleClick: function(evt) {
    console.log('click');
    this.state.pagingCount += 10;
  },

  render: function() {
    return (
      <section>
        <input id='new-world' type='text' value={this.state.userInput} onChange={this.handleChange} onKeyUp={this.handleInput} />
        <SuggestionsList {...this.props} />
        <a id='show-more' onClick={this.handleClick} >Show more</a>
      </section>
    );
  }
});
