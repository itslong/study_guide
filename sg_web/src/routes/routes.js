

const BASE_SCHEME = 'http://'
const BASE_PATH = process.env.NODE_ENV == 'DEVELOPMENT' || 'development' ? 'localhost' : '';
const BASE_PORT = ':8000';
const API_PATH = '/api';
const fullPath = BASE_SCHEME + BASE_PATH + BASE_PORT + API_PATH;


// Categories
const CATEGORY = '/category';

const CATEGORIES_ALL_PATH = fullPath + '/categories/';
const CATEGORY_DETAIL_PATH = fullPath + CATEGORY + '/:id/';
const CATEGORY_ADD_PATH = fullPath + CATEGORY + '/add/';

// Topics


// Notes



export {
    CATEGORIES_ALL_PATH,
    CATEGORY_DETAIL_PATH,
    CATEGORY_ADD_PATH
};
