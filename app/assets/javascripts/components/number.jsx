class Number extends React.Component {
constructor(props) {
  super(props);
  this.state = {counter: 1};
  //this.checkAnswer = this.checkAnswer.bind(this);
}


componentWillMount() {
  this.setState(prevState => ({
    counter: counter + 1
})
}


render () {
  return (
    <div>
    <p id="q-counter">Question {this.state.counter} of 5</p>
    </div>

  );
}
}
