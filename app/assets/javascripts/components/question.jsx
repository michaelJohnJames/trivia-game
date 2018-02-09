class Question extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {counter: 1}
    this.forceUpdate = this.forceUpdate.bind(this);
  }

  forceUpdate() {
    this.setState(prevState => ({
      counter: this.state.counter + 1
  }))
  }






  render () {
    //this.forceUpdate();
    //if ({this.props.question[0].value} === null) {return "no"}
    var x = 1;
    return (
      <div>
      <p id="q-counter">Question in question component {x} of 5</p>
      <h3>This Question is worth {this.props.question[0].value} points!</h3>
      <h3>Category: {this.props.question[0].category.title} </h3>
      <h1>{this.props.question[0].question}</h1>
      <p>{this.props.question[0].answer}</p>

      </div>

  );
  }
}
