import request from 'supertest';
import { expect } from 'chai';
import app from '../index.js';

describe('Auth API', () => {
  describe('POST /register', () => {
    it('should register a new user', (done) => {
      request(app)
        .post('/api/register')
        .send({
          username: 'testuser',
          email: 'testuser@example.com',
          password: 'password123'
        })
        .expect(201)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property('message', 'User registered successfully');
          done();
        });
    });
  });

  describe('POST /login', () => {
    it('should login a user and return a JWT', (done) => {
      request(app)
        .post('/api/login')
        .send({
          email: 'testuser@example.com',
          password: 'password123'
        })
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property('token');
          done();
        });
    });
  });

  describe('GET /profile', () => {
    it('should retrieve the logged-in user\'s profile', (done) => {
      request(app)
        .post('/api/login')
        .send({
          email: 'testuser@example.com',
          password: 'password123'
        })
        .end((err, res) => {
          if (err) return done(err);
          const token = res.body.token;
          request(app)
            .get('/api/profile')
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
            .end((err, res) => {
              if (err) return done(err);
              expect(res.body).to.have.property('username', 'testuser');
              expect(res.body).to.have.property('email', 'testuser@example.com');
              done();
            });
        });
    });
  });
});
