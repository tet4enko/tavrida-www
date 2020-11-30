// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import multiparty from 'multiparty';
import gmail from 'gmail-send';

import logger from './logger';
import checkRecaptcha from './check-recaptcha';

export default (req, res) => {
    const form = new multiparty.Form({
        maxFilesSize: 20971520,
        autoFiles: false,
    });

    // eslint-disable-next-line consistent-return
    form.parse(req, async (err, fields, files) => {
        if (err) {
            res.statusCode = 400;
            return res.json(err);
        }

        const isRecaptchaChecked = await checkRecaptcha(fields.recaptcha[0]);
        if (!isRecaptchaChecked) {
            res.statusCode = 400;
            return res.end();
        }

        const processedFiles = files.file.reduce((filesRes, current) => {
            if (current.size) {
                return filesRes.concat({ path: current.path, filename: current.originalFilename });
            }

            return filesRes;
        }, []);

        const email = {
            user: 'tavrida.sender@gmail.com',
            pass: 'odkzsxdyksvyjrvc',
            to: ['tavrida.media@mail.ru', 'trissenkov@gmail.com', 'tetchenko@gmail.com'],
        };

        const send = gmail({ ...email, subject: 'Заказ с tavridamedia.com' });

        logger.info(`\n\nЗаказ от '${fields.name}':\n${JSON.stringify(fields)}\n${JSON.stringify(req.headers)}\n`);

        send({
            html: `
                Имя: ${fields.name}<br/>
                Почта: ${fields.email}<br/>
                Телефон: ${fields.phone}<br/>
                Комментарий: ${fields.comment}<br/>
                Файл: ${processedFiles.length ? 'да' : 'нет'}
            `,
            files: processedFiles,
        }, (error) => {
            if (error) {
                logger.error(`Ошибка при заказе от '${fields.name}':\n${error.message}`);
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
