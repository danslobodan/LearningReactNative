const twilio = require('twilio');
const credentials = require('./twilio-credentials.json');

module.exports = new twilio.Twilio(
    credentials.acocuntSid,
    credentials.authToken
);
