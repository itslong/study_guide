import { CATEGORY_ADD_PATH, USER_CATEGORIES_ALL_PATH } from '../../routes/routes';
import getCookie from './getCookie';
import { getCategoriesByUser, isLoading } from '../../js/actions';


const getAllCategoriesByUserId = (userId) => {
    return dispatch => {
        dispatch(isLoading());

        const fullPath = USER_CATEGORIES_ALL_PATH.replace(':id', userId);
        const endpoint = new URL(fullPath);

        fetch(endpoint)
        .then(response => {
            const { status } = response;
            const res = status === 200 ? response.json() : Promise.reject({ error: status });
            return res;
        })
        .then(json => {
            dispatch(getCategoriesByUser(json.categories));
            return json.categories;
        })
        .catch(error => {
            console.log(`Fetching all categories error: ${error} from this endpoint: ${endpoint}`);
            return error;
        });
    }
};


const getCategoryDetail = (id) => {
    return null;
};


const createCategory = (formData) => {
    return dispatch => {
        dispatch(isLoading());

        const csrfToken = getCookie('csrftoken');
        const endpoint = new URL(CATEGORY_ADD_PATH);

        const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        };

        fetch(endpoint, {
            method: 'POST',
            mode: 'same-origin',
            body: JSON.stringify(formData),
            headers
        })
        .then(response => {
            const { status } = response;
            const res = status === 201 ? response.json() : Promise.reject({ error: status });
            return res;
        })
        .catch(error => {
            console.log(`Adding a Category error: ${error} from this endpoint: ${endpoint}`);
            return error;
        });
    }
};


export {
    getAllCategoriesByUserId,
    getCategoryDetail,
    createCategory
};

