/** 
 * langkah langkah setup redux
 * 1. import createStore dari redux
 * 2. kita siappkan initialSate dan juga reducer
 * 3. kita siapkan state-nya dengan value dari createStore
 * 4. kita tambahkan satu function subcriber
 * 5. kita jaankan dispatch-nya
 * 
 * bonus:
 * 1. buat reducer
 * * -> manfaatkan combineReducer() -> masauk ke   
*/

// 1. - import createStore dari redux
import Redux, { combineReducers } from 'redux';

// ! deprecated
// * gunakan configureStore dari @redux/toolkit sebagai ganntinya
const {createStore} = Redux;

// 2 siapkan initialState dan reducer-nya

// initialState
const counterInitialState = {
    counter : 0

};

//reducer -> (state = initialState, action) => newState
// ? state = initialState -> untuk initialisasi sebuah state di
// ?             dalam reducer
// * action -> {type: string, poyland?: any}

const counterReducer = (state = counterInitialState, action) => {
    console.log({ state, action})
    
    switch(action.type) {
        case 'increment':
            //return:
            // 1. pecahan state lama ke dalam object baru
            // 2. masukkan data baru dalam object
            return { ...state, counter: state.counter + 1 };
        case 'decrement':
            return { ...state, counter: state.counter - 1 };
        case 'reset':
            return { ...state, counter: counterInitialState.counter };
    }
   
}

// bonus: combineReducer()

const userInitialState = { 
    name: ""
}

const userReducer = (state = userInitialState, action) => {
    switch(action.type){
        case 'setName':
            return {...state, name: action.payload};
    }

    return state;
}

// 3. buat state denga volume dari createStore(reducer)
// * TIP: gunakan combineReducer()

// gabungkan 2 reducer

const reducers = { 
    userReducer, 
    counterReducer
};

// const state = store.getState()
// ? state.[nameReducer].[property]
// * state.user.name
// * state.counter.counter

// createStore() dengan parameter combineReducers()
// * combineReducers() -> berisi parameter dari si reducer yang
// * sudah kita gabungkan

const store = createStore(combineReducers(reducers));

// 4 -subscribe-kan
StorageEvent.subscribe(() => {

    console.log(store.getState())
});

// 5. jalankan aksisnya

store.dispatch({ type: 'increment'});
store.dispatch({type: 'setName', payload: 'Alex'});