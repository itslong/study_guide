import { CATEGORIES_ALL_PATH, CATEGORY_DETAIL_PATH, CATEGORY_ADD_PATH } from '../../routes/routes';
import getCookie from './getCookie';


const getAllCategoriesByUserId = (user_id) => {

    fetch(getAllCategories)
    .then(response => {
        return response.json()
    })
    .then(json => {
        console.log('the json: ', JSON.stringify(json))
    })
};


const getCategoryDetail = (id) => {
    return null;
};


const addCategory = (formData) => {
    const csrfToken = getCookie('csrftoken');
    const endpoint = new URL(CATEGORY_ADD_PATH);

    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFToken': csrfToken,
    };

    return fetch(endpoint, {
        method: 'POST',
        mode: 'same-origin',
        body: JSON.stringify(formData),
        headers
    })
    .then(response => {
        const { status } = response;
        const res = response.status === 201 ? response.json() : Promise.reject({ error: status });
        return res;
    })
    .catch(error => {
        console.log(`Adding Categorey error: ${error} from this endpoint: ${endpoint}`);
        return error;
    })
};


export {
    getAllCategoriesByUserId,
    getCategoryDetail,
    addCategory
};

