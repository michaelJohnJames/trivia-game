class Question extends React.Component {
  render () {;
    return (
      <div>
      <h3>This Question is worth {this.props.question[0].value} points!</h3>
      <h1>{this.props.question[0].question}</h1>
      <p>{this.props.question[0].answer}</p>

      </div>

  );
  }
}
