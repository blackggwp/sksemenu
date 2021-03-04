const express = require('express');
const router = express.Router();
const app = require('../routes/readfiles')

describe('GET /readfiles', () => {
  it('return json response contain of imagePath', () => router(app)
    .get('/readfiles')
    .set('Accept', 'application/json')
    .expect('Content-Type', '/json/')
    .expect(200))
})
// const imgExt = ['.png', '.jpg', '.jpeg', '.webp', '.gif']

