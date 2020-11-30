import fetch from 'node-fetch';
import logger from './logger';

export default async (token) => {
    try {
        const response = await fetch(
            // eslint-disable-next-line max-len
            `https://www.google.com/recaptcha/api/siteverify?secret=6LetzvMZAAAAAEt5IcQhgPdxjkShQc3qK35aeKYn&response=${token}`,
            { method: 'POST' },
        );

        const json = await response.json();

        const result = json.score > 0.5;

        if (!result) {
            logger.error(`Recaptcha rejected: ${JSON.stringify(json)}`);
        }

        return result;
    } catch (e) {
        logger.error(`Error recaptcha request: ${e.message}`);
        return false;
    }
};
