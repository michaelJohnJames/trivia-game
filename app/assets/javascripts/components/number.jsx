class Number extends React.Component {
constructor(props) {
  super(props);
  this.state = {counter: 1}
  this.setState = this.setState.bind(this);
}


setState(prevState) {
  this.setState(prevState => ({
    counter: state.counter + 1
}))
}


render () {
  return (
    <div>
    <p id="q-counter">Question {this.state.counter} of 5</p>
    </div>

  );
}
}
