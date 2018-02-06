class Answer extends React.Component {
  render () {
    return (
      <div>

      <p>{this.props.answer[0].answer.HTML_safe}</p>
      <form>
        <label>Enter your answer:</label><br></br>
        <input type="text"></input><br></br>
        <input type="submit"></input>
      </form>
      </div>
    );
  }
}
