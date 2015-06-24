SurveyAnswerChart = React.createClass({
  getDefultProps: function() {
    return ({});
  },

  componentDidUpdate: function() {
/*    var data = [
      {
          value: 300,
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Red"
      },
      {
          value: 50,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Green"
      },
      {
          value: 100,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Yellow"
      }
    ];*/
    //this.props.data = data;
    console.log(this.props);
    var ctx = document.getElementById(this.props.canvasId).getContext("2d");
    var myDoughnutChart = new Chart(ctx).Doughnut(this.props.choices);
  },

  render: function() {
    return (
      <canvas id={this.props.canvasId} className='chart'></canvas>
    );
  }
});
