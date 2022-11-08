// hold the tests for code in the index.js file.
import supertest from 'supertest';
import app from '../index';

//create req object (running the super test on app which is imported from index)
const request = supertest(app);
//create a test for the end point
describe('test endpoint response', () => {
  it('get api endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
