import {connect} from 'react-redux'
import Actions from './Actions.js'

class Number extends React.Component {
constructor(props) {
  super(props);
  //this.state = {counter: 1};

  this.addQuestion = this.addQuestion.bind(this);
}


addQuestion() {
this.props.dispatch(Actions.addQuestion())
};


render () {
  var x = 1;
  return (
    <div>
    <button onClick={this.addQuestion}>Add Question number</button>
    <p id="q-counter">Question in number component {this.props.counter} of 5</p>
    </div>

  );
}
}

const mapStateToProps = store => {
  return {
    counter: store.counter
  }
}

//export default connect(mapStateToProps)(Number)
