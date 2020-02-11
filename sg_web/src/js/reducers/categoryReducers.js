import { GET_CATEGORIES_BY_USER, ADD_CATEGORY, ADD_TOPIC, ADD_NOTE, LOADING, SUCCESS, FAILURE } from '../constants';


const exampleCategories = [
    {id: 1, category_name: 'something', category_desc: 'or nothing'}, 
    {id: 2, category_name: 'more', category_desc: ''},
]

const initialState = {
    items: [],
    isLoading: false,
};


const getCategoriesByUser = (state, action) => {
    return {
        ...state,
        isLoading: false,
        items: action.payload
    };
};

const addCategory = (state, action) => {
    return {
        ...state,
        isLoading: false
    }
}

const isLoading = (state, action) => {
    return {
        ...state,
        isLoading: true,
    };
}


// TODO: will refactor into 3 reducers
const categoryReducers = (state=initialState, action) => {
    switch(action.type) {
        case ADD_CATEGORY: {
            return addCategory(state, action);
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


export default categoryReducers;
