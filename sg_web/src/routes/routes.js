

const BASE_SCHEME = 'http://'
const BASE_DOMAIN = process.env.NODE_ENV == 'DEVELOPMENT' || 'development' ? 'localhost' : '';
const BASE_PORT = ':8000';
const API_PATH = '/api';
const BASE_PATH = BASE_SCHEME + BASE_DOMAIN + BASE_PORT + API_PATH;


// Categories
const CATEGORY = '/category';
const CATEGORIES = '/categories';

const CATEGORIES_ALL_PATH = BASE_PATH + CATEGORIES;
const CATEGORY_DETAIL_PATH = BASE_PATH + CATEGORY + '/:id/';
const CATEGORY_ADD_PATH = BASE_PATH + CATEGORY + '/add/';

const USER = '/user';
const USERS = '/users';
const USERS_ALL_PATH = BASE_PATH + USERS;
const USER_CATEGORIES_ALL_PATH = BASE_PATH + USER + '/:id' + CATEGORIES;

// Topics


// Notes




export {
    CATEGORIES_ALL_PATH,
    CATEGORY_DETAIL_PATH,
    CATEGORY_ADD_PATH,
    BASE_PATH,
    USER_CATEGORIES_ALL_PATH,
};
