const admin = require('firebase-admin');
const twilio = require('./twillio');

module.exports = function (req, res) {
    if (!req.body.phone) {
        return res
            .status(422)
            .send({ error: 'You must provide a phone number' });
    }

    const phone = String(req.body.phone).replace(/[^\d]/g);

    admin
        .auth()
        .getUser(phone)
        .then((user) => {
            const code = Math.floor(Math.random() * 8999 + 1000);

            twilio.messages.create(
                {
                    body: `You code is ${code}`,
                    to: `+${phone}`,
                    from: '+12543292709',
                },
                (err) => {
                    if (err) {
                        console.log(err);
                        return res.status(422).send({ error: err });
                    }

                    admin
                        .database()
                        .ref(`users/${phone}`)
                        .update({ code: code, codeValid: true }, () => {
                            res.send({ success: true });
                        })
                        .catch((err) => {
                            res.status(500).send({ error: err });
                        });
                }
            );
        })
        .catch((err) => {
            res.status(422).send({ error: err });
        });
};
