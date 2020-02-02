import { ADD_CATEGORY, ADD_TOPIC, ADD_NOTE } from '../constants/action-types';


const addCategory = (payload) => {
    return {
        type: ADD_CATEGORY,
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

export {
    addCategory,
    addTopic,
    addNote,
};
 