import { GET_CATEGORIES_BY_USER, ADD_TOPIC, ADD_NOTE, LOADING, SUCCESS } from '../constants';
import { getAllCategoriesByUserId } from '../../components/endpoints';


const getCategoriesByUser = (payload) => {
    return {
        type: GET_CATEGORIES_BY_USER,
        payload
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
}


export {
    getCategoriesByUser,
    addTopic,
    addNote,
    isLoading,
};
 