import { REGISTER_SUCCESS, REGISTER_FAIL } from '../constants';
import { userRegister } from '../components/endpoints';


const registerUser = (formData) => {
    return (dispatch) => {

        const regUser = userRegister(formData);
        regUser.then(response => {
            const { token } = response;

            if (token) {
                dispatch(userRegisterSuccess(token));
                return response;
            }

            dispatch(userRegisterFail());
            return response;
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
