class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {msg: '', counter: 1};
    this.checkAnswer = this.checkAnswer.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.myFunction = this.myFunction.bind(this);
    var x = 1;
  }

  myFunction(e) {
    checkAnswer(e);
    addQuestion(e)
  }

  checkAnswer(e) {
    //var x = 1;
    //var message = document.getElementById('msg');
    //this.setState(prevState{msg.value: ''})
    //console.log(guesses.value);
    //console.log(this.props.answer[0].answer)
    if ( this.props.answer[0].answer.includes(guesses.value)) {
        this.setState(prevState => ({
          msg: "You are correct!"}));
        //  counter: this.state.counter + 1
        //}));
     //this.state = {msg.value: "You are correct!"}
    //  message.textContent = "You are correct!"

    } else {
      this.setState(prevState => ({
        msg: "Sorry the answer is: " + this.props.answer[0].answer + "!",
        counter: this.state.counter + 1
      }))
      //console.log("You are wrong");

    //  message.textContent = "Sorry, the answer is " + {this.props.answer[0].answer}
    }
    //e.preventDefault();
    //x++;
  }

  addQuestion(e) {
    var x = 1;
    x++
    console.log(x)
  }



  render () {
    var x = 1;
    return (
      <div>
      <form onSubmit={this.addQuestion}>
        <label>Enter your answer:</label><br></br>
        <input type="text" id="guesses" ></input><br></br>
        <input type="submit"></input>
      </form>
      <p id="msg">{this.state.msg}</p>
      <p id="answer-number">Question in answer component {x} of 5</p>
      </div>

    );
  }
}
