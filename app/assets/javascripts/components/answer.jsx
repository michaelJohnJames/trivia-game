class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {

    //var message = document.getElementById('msg');
    //this.setState({value: event.target.value})
    //console.log(guesses.value);
    //console.log(this.props.answer[0].answer)
    if ( guesses.value.includes(this.props.answer[0].answer)) {
     console.log("You are correct!")
    //  message.textContent = "You are correct!"
    } else {
      console.log("You are wrong")
    //  message.textContent = "Sorry, the answer is " + {this.props.answer[0].answer}
    }
    e.preventDefault();
  }



  render () {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>Enter your answer:</label><br></br>
        <input type="text" id="guesses" ></input><br></br>
        <input type="submit"></input>
      </form>
      <p id="msg"></p>
      </div>

    );
  }
}
