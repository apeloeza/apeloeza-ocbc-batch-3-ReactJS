import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import _ from 'lodash';


function tasks(state, action) {
    if (state === undefined) {
        return {
            1: { id: "1", title: "Task 1" },
            2: { id: "2", title: "Task 2" },
            3: { id: "3", title: "Task 3" },
            4: { id: "4", title: "Task 4" },
        };
    }

    let task;

    switch (action.type) {
        case "ADD_TASK":
            task = { id: action.id, title: "New Task" };
            return {
                ...state,
                [action.id]: task,
            };
        case "EDIT_TASK":
            task = state[action.id];
            return {
                ...state,
                [action.id]: { ...task, title: action.value },
            };
        case "DELETE_TASK":
            return _.omit(state, action.id);
        default:
            return state;
    }
}

function lists(state, action) {
    // initial state
    if (state === undefined) {
        return {
            backlog: { id: "backlog", title: "Backlog", tasks: [] },
            inProgress: { id: "inProgress", title: "In Progress", tasks: [] },
            evaluation: { id: "evaluation", title: "Evaluation", tasks: [] },
            done: { id: "done", title: "Done", tasks: [] },
        };
    }

    switch (action.type) {
        case "ADD_TASK": {
            return {
                ...state,
                backlog: {
                    ...state.backlog,
                    tasks: state.backlog.tasks.concat(action.id),
                },
            };
        }
        case "MOVE_TASK": {
            const fromList = state[action.fromListId];
            const toList = state[action.toListId];
            return {
                ...state,
                [fromList.id]: { ...fromList, tasks: _.without(fromList.tasks, action.id) },
                [toList.id]: { ...toList, tasks: toList.tasks.concat(action.id) },
            };
        }
        case "DELETE_TASK": {
            const list = state[action.listId];
            return {
                ...state,
                [list.id]: { ...list, tasks: _.without(list.tasks, action.id) },
            };
        }
        default:
            return state;
    }

}
const enhancer = applyMiddleware(thunk);
export const store = createStore(lists, enhancer);


export default combineReducers({ tasks, lists})


