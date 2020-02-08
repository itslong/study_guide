import { GET_CATEGORIES_BY_USER, ADD_TOPIC, ADD_NOTE, LOADING, SUCCESS, FAILURE } from '../constants';


const exampleCategories = [
    {id: 1, category_name: 'something', category_desc: 'or nothing'}, 
    {id: 2, category_name: 'more', category_desc: ''},
]

const initialState = {
    categories: [],
    topics: [{id: 1, name: 'cooking'}, {id: 2, name: 'zombies'}, {id:3, name: 'galore'}],
    notes: [],
    isLoading: false,
    user: null
};


const getCategoriesByUser = (state, action) => {
    return {
        ...state,
        isLoading: false,
        categories: action.payload
    };
};

const addTopic = (state, action) => {
    return state.topics.concat(action.payload);
};

const addNote = (state, action) => {
    return state.notes.concat(action.payload);
};

const isLoading = (state, action) => {
    return {
        ...state,
        isLoading: true,
    };
}


// TODO: will refactor into 3 reducers
const sgReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_TOPIC: {
            return addTopic(state, action);
        }

        case ADD_NOTE: {
            return addNote(state, action);
        }

        case LOADING: {
            return isLoading(state, action);
        }

        case GET_CATEGORIES_BY_USER: {
            return getCategoriesByUser(state, action);
        }

        default:
            return state;
    }
};


export default sgReducer;
