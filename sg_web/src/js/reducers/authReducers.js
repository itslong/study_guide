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
    userId: 1,
    isAuthenticated: false,
    isAdmin: true,
    token: localStorage.getItem('token'),
    isLoading: false
};


const authReducers = (state=initialState, action) => {
    switch(action.type) {
        case USER_LOADING: {
            return {
                ...state,
                isLoading: true
            };

        }

        case USER_LOADED: {
            const { id: userId, username, is_staff: isAdmin } = action.payload;
            return {
                ...state,
                userId,
                username,
                isAdmin,
                isLoading: false
            };

        }

        case REGISTER_SUCCESS: {

        }



        case LOGIN_SUCCESS: {
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                token: action.payload
            };
        }

        case AUTH_ERROR:
        case REGISTER_FAIL: 
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return {
                ...state,
                username: null,
                userId: null,
                isAuthenticated: false,
                isAdmin: false,
                token: null,
                isLoading: false
            }
        

        default:
            return state;
    }
};

export default authReducers;
