import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";
import Participants from "../models/Participant";

process.env.NODE_ENV = "test";

const server = app.listen(4000);

chai.use(chaiHttp);

describe("Participants", () => {
  beforeEach((done) => {
    Participants.deleteMany({}, (err) => {
      done();
    });
  });

  describe("GET - /participants", () => {
    it("it should GET all the participants", (done) => {
      chai
        .request(server)
        .get("/participants")
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe("POST - /participant", () => {
    it("it should POST a participant ", (done) => {
      const participant = {
        name: "John",
        lastname: "Cena",
        participation: 0,
      };

      chai
        .request(server)
        .post("/participant")
        .send(participant)
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });

  describe("DELETE - /delete", () => {
    it("it should DELETE all participants ", (done) => {
      chai
        .request(server)
        .delete("/delete")
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });
});
