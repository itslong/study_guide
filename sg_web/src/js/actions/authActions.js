import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../constants';

import { userLogin, userLoad } from '../../components/endpoints';


const fetchUserInfo = () => {
    return (dispatch, getState) => {
        dispatch(userLoading());
        const { user } = getState();
        const { token } = user;

        const userInfo = userLoad(token);
        userInfo.then(response => {
            const { id } = response;
            if (id) {
                dispatch(userLoaded(response));
            }
            return response;
        })
        .catch(error => {
            dispatch(authError(error));
            return error;
        })
    };
};

const authenticateUser = (formData) => {
    return dispatch => {
        const auth = userLogin(formData);
        auth.then(response => {
            const { user, token } = response;

            if (token) {
                dispatch(userLoginSuccess(token));
                return {
                    status: 200,
                    user
                };
            }
            return response
        })
        .then((resp) => {
            const { error, status } = resp;
            if (!error) {
                dispatch(fetchUserInfo());
                return resp
            }

            dispatch(userLoginFail());
            return resp;
        })
        .catch(error => {
            dispatch(userLoginFail());
            return error;
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
    fetchUserInfo,
    authenticateUser
};
