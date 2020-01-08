import { ADD_ARTICLE } from '../constants/action-types';


const forbiddenWords = ['spam', '$pam', 'sp8m'];

const forbiddenWordsMiddleware = ({ dispatch }) => {
    return (next) => {
        return (action) => {
            if (action.type === ADD_ARTICLE) {
                // pass the title from payload to see if any words are in forbiddenWords
                const foundWord = forbiddenWords.filter(word => {
                    return action.payload.title.includes(word)
                });
                // if found, dispatch a type
                if (foundWord.length) {
                    return dispatch({ type: 'FOUND_BAD_WORD' });
                }
            }
            // always return next(action)
            return next(action);
        }
    }
};


export default forbiddenWordsMiddleware;
