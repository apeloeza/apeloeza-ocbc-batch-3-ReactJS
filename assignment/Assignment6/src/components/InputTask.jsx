import React from "react";
import { addTask } from "../stores/KanbanActions";
import _ from 'lodash';
import {connect} from "react-redux";

class InputTask extends React.Component {
  add() {
    const id = this.props.tasks.length 
    ? _.last(_.sortBy(this.props.tasks, "id")).id + 1 
    : 1;
    this.props.dispatch(addTask(id));
  }

  render() {
    return (
      <button
        className="btn btn-primary float-none"
        onClick={() => this.add()}
      >
        Add Task
      </button>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: _.values(state.tasks),
});

export default connect(mapStateToProps)(InputTask);
