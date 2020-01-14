import 'jest';
import supertest from 'supertest';

describe('Users API', () => {
  it('(/user) should create user', () => {
    return supertest('http://localhost:3000')
      .post('/user')
      .send({
        name: 'test user',
        email: 'teste@teste.com',
        password: '123456',
      })
      .then((response: any) => {
        expect(response.status).toBe(200)
      })
      .catch(fail)
  });
});