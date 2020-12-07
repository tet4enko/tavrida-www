const { createServer: createServerHTTP } = require('http');
const { createServer: createServerHTTPS } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const preparedApp = app.prepare();

if (dev) {
    preparedApp.then(() => {
        createServerHTTP((req, res) => {
            const parsedUrl = parse(req.url, true);
            handle(req, res, parsedUrl);
        }).listen(3000, (err) => {
            if (err) {
                throw err;
            }
        });
    });
} else {
    const options = {
        key: fs.readFileSync('/etc/certs/ssl.key'),
        cert: fs.readFileSync('/etc/certs/ssl.crt'),
    };
    preparedApp.then(() => {
        createServerHTTPS(options, (req, res) => {
            const parsedUrl = parse(req.url, true);
            handle(req, res, parsedUrl);
        }).listen(443, (err) => {
            if (err) {
                throw err;
            }
        });
    });
}
