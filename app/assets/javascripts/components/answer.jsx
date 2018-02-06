class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {msg: '', counter: 0};
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  checkAnswer(e) {
    //var message = document.getElementById('msg');
    //this.setState(prevState{msg.value: ''})
    //console.log(guesses.value);
    //console.log(this.props.answer[0].answer)
    if ( this.props.answer[0].answer.includes(guesses.value)) {
        this.setState(prevState => ({
          msg: "You are correct!",
          counter: this.state.counter + 1
          //counter: {this.state.counter}++
        }));
     //this.state = {msg.value: "You are correct!"}
    //  message.textContent = "You are correct!"
    } else {
      this.setState(prevState => ({
        msg: "Sorry the answer is: " + this.props.answer[0].answer + "!"
      }))
      console.log("You are wrong");
    //  message.textContent = "Sorry, the answer is " + {this.props.answer[0].answer}
    }
    //e.preventDefault();
  }



  render () {
    return (
      <div>
      <p id="q-counter">Question {this.state.counter} of 5</p>
      <form onSubmit={this.checkAnswer}>
        <label>Enter your answer:</label><br></br>
        <input type="text" id="guesses" ></input><br></br>
        <input type="submit"></input>
      </form>
      <p id="msg">{this.state.msg}</p>
      </div>

    );
  }
}
