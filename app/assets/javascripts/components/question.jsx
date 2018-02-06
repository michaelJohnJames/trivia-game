class Question extends React.Component {
  render () {
    //if ({this.props.question[0].value} === null) {return "no"}
    return (
      <div>

      <h3>This Question is worth {this.props.question[0].value} points!</h3>
      <h3>Category: {this.props.question[0].category.title} </h3>
      <h1>{this.props.question[0].question}</h1>
      <p>{this.props.question[0].answer}</p>

      </div>

  );
  }
}
