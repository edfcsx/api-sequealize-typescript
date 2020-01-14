import 'jest';
import supertest from 'supertest';

describe('Utils API test', () => {
  it('GET /PING ', () => {
    return supertest('http://localhost:3000')
      .get('/ping')
      .then((response: any) => {
        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
      })
      .catch(fail)
  });
});