import { ADD_ARTICLE, DATA_FETCHED } from '../constants/action-types';


const initialState = {
    articles: [],
    remoteArticles: []
};

const exampleReducer = (state=initialState, action) => {
    let newState;

    switch (action.type) {
        case ADD_ARTICLE:
            newState = Object.assign({}, state, {
                articles: state.articles.concat(action.payload)
            });
            break;

        case DATA_FETCHED:
            newState = Object.assign({}, state, {
                remoteArticles: state.remoteArticles.concat(action.payload)
            });
            break;

        default:
            return state;
    }

    return newState;
};

export default exampleReducer;
