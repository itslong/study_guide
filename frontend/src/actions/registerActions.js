import { REGISTER_SUCCESS, REGISTER_FAIL } from '../constants';
import { userRegister } from '../components/endpoints';
import { fetchUserInfo } from './authActions';


const registerUser = (formData) => {
    return (dispatch) => {

        const regUser = userRegister(formData);
        
        return regUser.then(response => {
            const { token } = response;

            if (token) {
                dispatch(userRegisterSuccess(token));
                return response;
            }

            dispatch(userRegisterFail(response));
            return response;
        })
        .then(resp => {
            const { token } = resp;

            if (token) {
                dispatch(fetchUserInfo());
                return {
                    status: 200
                };
            }

            return resp;
        })
        .catch(error => {
            dispatch(userRegisterFail());
            return error
        });
    };
};

const userRegisterSuccess = (payload) => {
    return {
        type: REGISTER_SUCCESS,
        payload
    };
};

const userRegisterFail = (payload) => {
    return {
        type: REGISTER_FAIL,
        payload
    };
};

export {
    registerUser,
    userRegisterFail,
};
