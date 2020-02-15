import { REGISTER_PATH, LOGIN_PATH, LOAD_USER_PATH } from '../../routes/routes';
import getCookie from './getCookie';



const userLogin = (formData) => {
    const csrfToken = getCookie('csrftoken');

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken,
    };

    const endpoint = new URL(LOGIN_PATH);

    return fetch(endpoint, {
        method: 'POST',
        mode: 'same-origin',
        body: JSON.stringify(formData),
        headers
    })
    .then(response => {
        const { status, statusText } = response;
        if (status === 200) {
            return response.json();
        }

        return {
            response,
            status,
            error: statusText
        };
    })
    .catch(error => {
        return error;
    })
};

const userLoad = (token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
    };

    const endpoint = new URL(LOAD_USER_PATH);

    return fetch(endpoint, { headers })
    .then(response => {
        const { status, statusText } = response;
        if (status == 200) {
            return response.json();
        }

        return { 
            status,
            error: statusText
        }
    })
    .catch(error => {
        return error;
    })
}


export {
    userLogin,
    userLoad
};
