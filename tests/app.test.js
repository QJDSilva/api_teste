const request = require('supertest');
const app = require('../src/app');

describe('Testes da API', () => {
  test('Deve retornar mensagem de funcionamento', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('API funcionando!');
  });

  test('Deve somar dois números corretamente', async () => {
    const res = await request(app).get('/soma?a=5&b=3');
    expect(res.statusCode).toBe(200);
    expect(res.body.resultado).toBe(8);
  });
});
