const sendHttpRequest = require('../sendHttpRequest');
const axios = require('axios');
const shazamJsonSchema = require('../testData/shazamSchema.json');

describe('Shazam API tests', () => {

    test('1. Validate Shazam JSON Schema', async () => {
        const conf = {
            url: 'https://shazam.p.rapidapi.com/search',
            params: { term: 'lose yourself', locale: 'en-US', offset: '0', limit: '5' },
            headers: {
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
                'X-RapidAPI-Key': 'ec4b00b039mshd7b4dfda562ff9ep1d57fejsn844bbb8ba022'
            }
        }

        response = await sendHttpRequest(conf);
        console.log(response);
        await expect(response.data).toBeValidSchema(shazamJsonSchema);
    });

    test('2. Status code 400 is received', async () => {
        const conf = {
            url: 'https://shazam.p.rapidapi.com/search',
            params: { term: 'lose yourself', locale: 'en-US', offset: '0', limit: '5' },
            headers: {
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
                'X-RapidAPI-Key': 'ec4b00b039mshd7b4dfda562ff9ep1d57fejsn844bbb8ba022'
            }
        }

        response = await sendHttpRequest(conf);
        await expect(response.status).toEqual(200);
    });

    test('3. Status code 403 is received, when using a wrong RapidAPI-Key', async () => {
        const conf = {
            url: 'https://shazam.p.rapidapi.com/search',
            params: { term: 'lose yourself', locale: 'en-US', offset: '0', limit: '5' },
            headers: {
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
                'X-RapidAPI-Key': 'ec4b00b039mshd7b4dfda562ff'
            }
        }
        response = await sendHttpRequest(conf, 'POST');
        await expect(response).toBeValidStatusCode(403);
        await expect(response.data.message).toEqual('You are not subscribed to this API.');
    });

    test('4. Status code 204 is received, when not all params are passed', async () => {
        const conf = {
            url: 'https://shazam.p.rapidapi.com/search',
            params: { offset: '0', limit: '5' },
            headers: {
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
                'X-RapidAPI-Key': 'ec4b00b039mshd7b4dfda562ff9ep1d57fejsn844bbb8ba022'
            }
        }
        response = await sendHttpRequest(conf, 'POST');
        // Когда ставлю в ожидании 204 тест падает с 404 error. В Postman норма - 204...
        await expect(response).toBeValidStatusCode(204);
    });

    test('5. Status code 401 is received, when X-RapidAPI-Key is not passed', async () => {
        const conf = {
            url: 'https://shazam.p.rapidapi.com/search',
            params: { offset: '0', limit: '5' },
            headers: {
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
                'X-RapidAPI-Key': ''
            }
        }
        response = await sendHttpRequest(conf, 'POST');
        await expect(response).toBeValidStatusCode(401);
        await expect(response.data.message).toEqual('Invalid API key. Go to https://docs.rapidapi.com/docs/keys for more info.');
    });
});
