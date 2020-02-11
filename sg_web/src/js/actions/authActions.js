import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../constants';

import { userLogin, userLoad } from '../../components/endpoints';


const fetchUserState = () => {
    return (dispatch, getState) => {
        dispatch(userLoading());
        const token = getState().auth.token;

        const user = userLoad(token);
        user.then(response => {
            dispatch(userLoaded(response.data));
        })
        .catch(error => {
            dispatch(authError(error));
        })
    };
};

const authenticateUser = (formData) => {
    return dispatch => {
        const auth = userLogin(formData);
        auth.then(response => {
            dispatch(userLoginSuccess(response.data));
            return response.data;
        })
        .catch(error => {
            dispatch(userLoginFail(error.response.data));
        })
    };
};


const userLoading = () => {
    return {
        type: USER_LOADING
    };
};

const userLoaded = (payload) => {
    return {
        type: USER_LOADED,
        payload
    };
};

const userLoginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload
    };
};

const userLoginFail = () => {
    return {
        type: LOGIN_FAIL
    };
};


const authError = () => {
    return {
        type: AUTH_ERROR
    }
};


export {
    fetchUserState,
    authenticateUser
};
