import { ADD_CATEGORY, ADD_TOPIC, ADD_NOTE } from '../constants/action-types';


const initialState = {
    categories: [{id: 1, name: 'something'}, {id: 2, name: 'more'}],
    topics: [{id: 1, name: 'cooking'}, {id: 2, name: 'zombies'}, {id:3, name: 'galore'}],
    notes: []
};


const addCategory = (state, action) => {
    return state.concat(action.payload)
};

const addTopic = (state, action) => {
    return state.concat(action.payload);
};

const addNote = (state, action) => {
    return state.concat(action.payload);
};

// TODO: will refactor into 3 reducers
const sgReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_CATEGORY: {
            return addCategory(state, action);
        }

        case ADD_TOPIC: {
            return addTopic(state, action);
        }

        case ADD_NOTE: {
            return addNote(state, action);
        }
        default:
            return state;
    }
};


export default sgReducer;
