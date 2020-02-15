import { GET_CATEGORIES_BY_USER, ADD_CATEGORY, ADD_TOPIC, ADD_NOTE, LOADING, SUCCESS } from '../constants';
import { getAllCategoriesByUserId, createCategory } from '../../components/endpoints';


// action creators
const getCategoriesByUser = (userId) => {
    return dispatch => {
        const categories = getAllCategoriesByUserId(userId);
        categories.then(data => {
            dispatch(fetchUserCategories(data))
            return data;
        });
    }
};

const addCategoryToUser = (category) => {
    const { user } = category;

    return dispatch => {
        const cat = createCategory(category);
        cat.then(data => {
            dispatch(addCategory());
            dispatch(getCategoriesByUser(user))
            return data;
        })
    }
};


// actions
const fetchUserCategories = (payload) => {
    return {
        type: GET_CATEGORIES_BY_USER,
        payload
    }
}

const addCategory = () => {
    return {
        type: ADD_CATEGORY
    }
};

const addTopic = (payload) => {
    return {
        type: ADD_TOPIC,
        payload
    }
};

const addNote = (payload) => {
    return {
        type: ADD_NOTE,
        payload
    }
};

const isLoading = () => {
    return {
        type: LOADING,
    }
};


export {
    getCategoriesByUser,
    addCategoryToUser,
    addCategory,
    addTopic,
    addNote,
    isLoading,
};
 