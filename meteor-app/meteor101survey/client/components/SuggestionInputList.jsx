SuggestionInputList = React.createClass({
  getDefaultProps: function() {
    return {pagingCount: 10};
  },
  
  getInitialState: function() {
    return {userInput: '', pagingCount: 50};
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
    this.state.pagingCount += 20;
  },

  render: function() {
    return (
      <section>
        <textarea id='comment-box' placeholder='give us some feedback or ask some questions' value={this.state.userInput} onChange={this.handleChange} onKeyUp={this.handleInput} ></textarea>
        <SuggestionsList {...this.props} pagingCount={this.state.pagingCount} />
      </section>
    );
  }
});
