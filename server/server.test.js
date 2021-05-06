import chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from './server';

chai.use(chaiHttp);
chai.should();

describe('/connection', () => {
  it('should get the json string ', (done) => {
    chai
      .request(app)
      .get('/connection')
      .end((rej, res) => {
        res.should.have.status(200);
        res.body.should.be.a('string');
        done();
      });
  });
});
