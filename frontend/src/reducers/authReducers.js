import { 
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
} from '../constants';


let initialState = {
    username: null,
    userId: null,
    isAuthenticated: false,
    isAdmin: false,
    token: localStorage.getItem('token'),
    isLoading: false,
    authErrors: null,
    registrationErrors: null
};


const authReducers = (state=initialState, action) => {
    switch(action.type) {
        case USER_LOADING: {
            return {
                ...state,
                isLoading: true,
                authErrors: null
            };
        }

        case USER_LOADED: {
            const { id: userId, username, is_staff: isAdmin } = action.payload;
            return {
                ...state,
                userId,
                username,
                isAdmin,
                isLoading: false,
                isAuthenticated: true,
                authErrors: null
            };
        }

        case REGISTER_SUCCESS: 
        case LOGIN_SUCCESS: {
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                token: action.payload,
                authErrors: null,
                registrationErrors: null
            };
        }

        case AUTH_ERROR:
        case LOGIN_FAIL: {
            const { errors } = action.payload;
            return {
                ...state,
                authErrors: {...errors}
            };
        }

        case REGISTER_FAIL: {
            localStorage.removeItem('token');
            const { errors } = action.payload;
            return {
                ...state,
                registrationErrors: {...errors}
            };
        }

        case LOGOUT_SUCCESS: {
            localStorage.removeItem('token');
            return {
                ...state,
                username: null,
                userId: null,
                isAuthenticated: false,
                isAdmin: false,
                token: null,
                isLoading: false,
                authErrors: null
            };
        }

        default:
            return state;
    }
};

export default authReducers;
