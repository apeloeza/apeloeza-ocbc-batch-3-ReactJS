import React from "react";
import { Draggable } from "react-beautiful-dnd";
import CardTask from "./CardTask";
import InputTask from "./InputTask";


export default class KanbanList extends React.Component {
  render() {
    return (
      <div className="col-3" ref={this.props.innerRef}>
        <div className="card">
          <div className="card-header bg-warning fw-bold text-center">{this.props.list.title}</div>
          <div className="card-body">
          {this.props.tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided, snapshot) => (
                  <CardTask
                    list={this.props.list}
                    task={task}
                    innerRef={provided.innerRef}
                    provided={provided}
                  />
                )}
              </Draggable>
            ))}
            {this.props.provided.placeholder}
            {this.props.list.id === "backlog" && <InputTask />}
          </div>
        </div>
      </div>
    );
  }
}

