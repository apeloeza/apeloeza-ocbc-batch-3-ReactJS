import React from "react";
import ListKanban from "../components/ListKanban";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { moveTask } from "../stores/KanbanActions";
import _ from "lodash";
import { connect } from "react-redux";


class Kanban extends React.Component {
    constructor(props) {
        super(props);
        this.onDragEnd = this.onDragEnd.bind(this);
    }


    onDragEnd({ source, destination, draggableId }) {
        if (!destination) {
            return;
        }
        if (source.droppableId !== destination.droppableId) {
            this.props.moveTask(
                source.droppableId,
                destination.droppableId,
                draggableId
            );
        }
    }

    getTasks(list, tasks) {
        return _.map(list.tasks, (taskId) => tasks[taskId]);
    }

    render() {
        const lists = this.props.lists;
        const tasks = this.props.tasks;

        return (
            <div className="card">
                <div className="card-header text-center"><h1>KANBAN BOARD</h1></div>
                <div className="card-body">
                    <div className="row">
                        <DragDropContext onDragEnd={this.onDragEnd}>
                            {lists.map((list) => (
                                <Droppable droppableId={list.id} key={list.id}>
                                    {(provided, snapshot) => (
                                        <ListKanban
                                            list={list}
                                            tasks={this.getTasks(list, tasks)}
                                            innerRef={provided.innerRef}
                                            provided={provided}
                                        />
                                    )}
                                </Droppable>
                            ))}
                        </DragDropContext>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    lists: _.values(state.lists),
    tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
    moveTask: (fromListId, toListId, id) =>
        dispatch(moveTask(fromListId, toListId, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Kanban);
