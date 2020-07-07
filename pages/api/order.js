// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const multiparty = require('multiparty');
const gmail = require('gmail-send');

export default (req, res) => {
    const form = new multiparty.Form({
        maxFilesSize: 20971520,
        autoFiles: false,
    });

    // eslint-disable-next-line consistent-return
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.statusCode = 400;
            return res.json(err);
        }

        const processedFiles = files.file.reduce((filesRes, current) => {
            if (current.size) {
                return filesRes.concat({ path: current.path, filename: current.originalFilename });
            }

            return filesRes;
        }, []);

        const email = {
            user: 'tavrida.sender@gmail.com',
            pass: 'ntnxtyrj',
            to: ['tavrida.media@mail.ru', 'trissenkov@gmail.com', 'tetchenko@gmail.com'],
        };

        const send = gmail({ ...email, subject: 'Заказ с tavridamedia.com' });

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
