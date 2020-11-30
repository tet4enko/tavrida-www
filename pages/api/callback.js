// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import multiparty from 'multiparty';
import gmail from 'gmail-send';

import logger from './logger';
import checkRecaptcha from './check-recaptcha';

const types = {
    callback: 'Заказан обратный звонок с tavridamedia.com',
    zamer: 'Заказан замер с tavridamedia.com',
    mail: 'Оформлена подписка на рассылку',
};

const email = {
    user: 'tavrida.sender@gmail.com',
    pass: 'odkzsxdyksvyjrvc',
    to: ['tavrida.media@mail.ru', 'trissenkov@gmail.com', 'tetchenko@gmail.com'],
};

export default (req, res) => {
    let type = 'callback';

    if (req.query.zamer !== undefined) {
        type = 'zamer';
    } else if (req.query.mail !== undefined) {
        type = 'mail';
    }

    const form = new multiparty.Form({
        maxFilesSize: 20971520,
        autoFiles: false,
    });

    // eslint-disable-next-line consistent-return
    form.parse(req, async (err, fields) => {
        if (err) {
            res.statusCode = 400;
            return res.json(err);
        }

        const isRecaptchaChecked = await checkRecaptcha(fields.recaptcha[0]);
        if (!isRecaptchaChecked) {
            res.statusCode = 400;
            return res.end();
        }

        let html;
        if (type !== 'mail') {
            html = `
                Имя: ${fields.name}<br/>
                Телефон: ${fields.phone}<br/>
            `;

            if (fields.comment) {
                html += `Комментарий: ${fields.comment}`;
            }
        } else {
            html = `Почта: ${fields.mail}`;
        }

        logger.info(
            // eslint-disable-next-line max-len
            `\n\nЗаказ обратного звонка от '${fields.name}':\n${JSON.stringify(fields)}\n${JSON.stringify(req.headers)}\n`,
        );

        gmail({ ...email, subject: types[type] })({
            html,
        }, (error) => {
            if (error) {
                logger.error(`Ошибка при заказе обратного звонка от '${fields.name}':\n${error.message}`);
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
