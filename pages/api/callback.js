// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const multiparty = require('multiparty');
const gmail = require('gmail-send');

export default (req, res) => {
    const form = new multiparty.Form({
        maxFilesSize: 20971520,
        autoFiles: false,
    });

    // eslint-disable-next-line consistent-return
    form.parse(req, (err, fields) => {
        if (err) {
            res.statusCode = 400;
            return res.json(err);
        }

        const email = {
            user: 'tavrida.sender@gmail.com',
            pass: 'odkzsxdyksvyjrvc',
            to: ['tavrida.media@mail.ru', 'trissenkov@gmail.com', 'tetchenko@gmail.com'],
        };

        const send = gmail({ ...email, subject: 'Заказан обратный звонок с tavridamedia.com' });

        send({
            html: `
                Имя: ${fields.name}<br/>
                Телефон: ${fields.phone}<br/>
            `,
        }, (error) => {
            if (error) {
                console.log(error);
                res.statusCode = 500;
                res.end();
            } else {
                res.json({ success: true });
            }
        });
    });
};

export const config = {
    api: {
        bodyParser: false,
        sizeLimit: '25mb',
    },
};
