import { REGISTER_SUCCESS, REGISTER_FAIL } from '../constants';
import { userRegister } from '../components/endpoints';
import { fetchUserInfo } from './authActions';


const registerUser = (formData) => {
    return (dispatch) => {

        const regUser = userRegister(formData);
        regUser.then(response => {
            const { token } = response;

            if (token) {
                dispatch(userRegisterSuccess(token));
                return { token };
            }

            dispatch(userRegisterFail());
            return response;
        }).
        then(resp => {
            const { token } = resp;

            if (token) {
                dispatch(fetchUserInfo());
                return {
                    status: 200
                };
            }

            return {
                error: 'Something went wrong',
                response: resp
            };
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
    }
};

const userRegisterFail = () => {
    return {
        type: REGISTER_FAIL
    };
};

export {
    registerUser
};
