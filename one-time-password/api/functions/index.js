const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create-user');
const requestOneTimePassword = require('./request-one-time-password');
const verifyOneTimePassword = require('./verify-one-time-password');

const serviceAccount = require('./service-account.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:
        'https://one-time-password-9cc2e-default-rtdb.europe-west1.firebasedatabase.app/',
});

exports.createUser = functions.https.onRequest(createUser);
exports.requestOneTimePassword = functions.https.onRequest(
    requestOneTimePassword
);
exports.verifyOneTimePassword = functions.https.onRequest(
    verifyOneTimePassword
);
