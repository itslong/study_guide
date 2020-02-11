import { 
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS 
} from '../constants';


const initialState = {
    username: null,
    userId: null,
    isAuthenticated: false,
    isAdmin: false,
    token: localStorage.getItem('token'),
    isLoading: false
};


const authReducers = (state=initialState, action) => {
    switch(action.type) {
        case USER_LOADING: {

        }

        case USER_LOADED: {

        }

        case AUTH_ERROR: {

        }

        case REGISTER_SUCCESS: {

        }

        case REGISTER_FAIL: {

        }

        case LOGIN_SUCCESS: {

        }

        case LOGIN_FAIL: {

        }

        case LOGOUT_SUCCESS: {

        }

        default:
            return state;
    }
};

export default authReducers;
