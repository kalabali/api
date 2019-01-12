const fs = require('fs')
const dotenv = require('dotenv').config({
    path: './.env.test'
});
const envConfig = dotenv.parse(fs.readFileSync('.env.test'))
for (let k in envConfig) {
  process.env[k] = envConfig[k]
}

const request = require('supertest');
const mongoose = require('mongoose');            
const app = require('../app');

describe('Test the root path', () => {    
    test('It should response the GET method', (done) => {
        return request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done()            
            mongoose.disconnect()
        });
    });
});