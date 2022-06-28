const supertest = require('supertest');

const app = require('../src/app');

test('Deve inserir um estudante com sucesso', () => {
  return supertest(app).post('/students')
    .send({
      registration: '20221EWBJ2020',
      name: 'Testando',
      email: 'jobson.nascimento@pesqueira.ifpe.edu.br',
      birth_date: '03/05/1981',
    }).then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.registration).toBe('20221EWBJ2020');
      expect(res.body.name).toBe('Testando');
      expect(res.body.email).toBe('jobson.nascimento@pesqueira.ifpe.edu.br');
      expect(res.body.birth_date).toBe('03/05/1981');
    });
});

test('Deve inserir outro estudante com sucesso', () => {
  return supertest(app).post('/students')
    .send({
      registration: '20221EWBJ2021',
      name: 'Testando',
      email: 'jailson.nascimento@pesqueira.ifpe.edu.br',
      birth_date: '25/05/2000',
    }).then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.registration).toBe('20221EWBJ2021');
      expect(res.body.name).toBe('Testando');
      expect(res.body.email).toBe('jailson.nascimento@pesqueira.ifpe.edu.br');
      expect(res.body.birth_date).toBe('25/05/2000');
    });
});

test('Deve listar todos os estudantes', () => {
  return supertest(app).get('/students').then((res) => {
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(2);
    expect(res.body[0]).toEqual({
      registration: '20221EWBJ2020',
      name: 'Testando',
      email: 'jobson.nascimento@pesqueira.ifpe.edu.br',
      birth_date: '03/05/1981',
      id: 1,
    });
    expect(res.body[1]).toEqual({
      registration: '20221EWBJ2021',
      name: 'Testando',
      email: 'jailson.nascimento@pesqueira.ifpe.edu.br',
      birth_date: '25/05/2000',
      id: 2,
    });
  });
});

test('Deve listar um estudante', () => {
  return supertest(app).get('/students/2').then((res) => {
    expect(res.status).toBe(200);
    expect(res.body.registration).toBe('20221EWBJ2021');
    expect(res.body.name).toBe('Testando');
    expect(res.body.email).toBe('jailson.nascimento@pesqueira.ifpe.edu.br');
    expect(res.body.birth_date).toBe('25/05/2000');
  });
});

test('Deve apagar um estudante', () => {
  return supertest(app).delete('/students/1').then((res) => {
    expect(res.status).toBe(200);
    expect(res.body.registration).toBe('20221EWBJ2020');
    expect(res.body.name).toBe('Testando');
    expect(res.body.email).toBe('jobson.nascimento@pesqueira.ifpe.edu.br');
    expect(res.body.birth_date).toBe('03/05/1981');
  });
});

test('Deve alterar um estudante', () => {
  return supertest(app).put('/students/2')
    .send({
      registration: '20221EWBJ2021',
      name: 'Testando',
      email: 'jailson.tenorio@belojardim.ifpe.edu.br',
      birth_date: '16/10/1983',
    }).then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toEqual({
        registration: '20221EWBJ2021',
        name: 'Testando',
        email: 'jailson.tenorio@belojardim.ifpe.edu.br',
        birth_date: '16/10/1983',
        id: 2,
      });
    });
});

test('Deve listar o estudante com os dados alterados', () => {
  return supertest(app).get('/students/2').then((res) => {
    expect(res.status).toBe(200);
    expect(res.body.registration).toBe('20221EWBJ2021');
    expect(res.body.name).toBe('Testando');
    expect(res.body.email).toBe('jailson.tenorio@belojardim.ifpe.edu.br');
    expect(res.body.birth_date).toBe('16/10/1983');
  });
});

test('Deve apagar outro estudante', () => {
  return supertest(app).delete('/students/2').then((res) => {
    expect(res.status).toBe(200);
    expect(res.body.registration).toBe('20221EWBJ2021');
    expect(res.body.name).toBe('Testando');
    expect(res.body.email).toBe('jailson.tenorio@belojardim.ifpe.edu.br');
    expect(res.body.birth_date).toBe('16/10/1983');
  });
});
