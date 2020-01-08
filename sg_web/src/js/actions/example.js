import { ADD_ARTICLE, DATA_FETCHED } from '../constants/action-types';


const addArticle = (payload) => {
    return {
        type: ADD_ARTICLE,
        payload
    }
}

const getData = () => {
    return (dispatch) => {
        const endpoint = 'https://jsonplaceholder.typicode.com/posts';
        return fetch(endpoint)
            .then(response => {
                return response.json()
            })
            .then(json => {
                // dispatch must be explicitly called for dispatching the next action
                dispatch({
                    type: DATA_FETCHED,
                    payload: json
                });
            });

    };
}


export { addArticle, getData };
