"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FIREBASE_STOREAGE_KEYFILE = exports.FIREBASE_STORAGE_BUCKET = exports.FIREBASE_STORAGE_HOST = exports.API_PATH = exports.JWT_REFRESH_TOKEN_EXPIRATION_TIME = exports.JWT_ACCESS_TOKEN_EXPIRATION_TIME = exports.JWT_REFRESH_TOKEN_SECRET = exports.JWT_ACCESS_TOKEN_SECRET = exports.API_PREFIX = exports.PORT = exports.ENV = void 0;
exports.ENV = process.env.NODE_ENV || 'dev';
exports.PORT = process.env.PORT || 3001;
exports.API_PREFIX = 'api';
const server = {
    dev: `http://localhost:${exports.PORT}`,
    staging: 'https://beaty-saloon-api.herokuapp.com/',
    production: 'https://beaty-saloon-api.herokuapp.com/',
};
exports.JWT_ACCESS_TOKEN_SECRET = '0edf201b-89b0-4ffa-b079-8674b2ca39cf';
exports.JWT_REFRESH_TOKEN_SECRET = '0612922-b505-4613-bec6-92732b6d3600';
exports.JWT_ACCESS_TOKEN_EXPIRATION_TIME = 1800000;
exports.JWT_REFRESH_TOKEN_EXPIRATION_TIME = 2592000000;
exports.API_PATH = `${server[exports.ENV]}/${exports.API_PREFIX}`;
exports.FIREBASE_STORAGE_HOST = 'https://firebasestorage.googleapis.com';
exports.FIREBASE_STORAGE_BUCKET = 'gs://beautyserver-f04c1.appspot.com';
exports.FIREBASE_STOREAGE_KEYFILE = 'beautyserver-f04c1-firebase-adminsdk-scb1f-a60607ac9a.json';
//# sourceMappingURL=constants.js.map