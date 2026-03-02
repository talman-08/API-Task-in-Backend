import { app } from "../../express.js";
import { expect } from "chai";
import supertest from "supertest";

const request = supertest(app);

describe("Tasks API Integration Tests", () => {
  describe("GET /api/v1/tasks", () => {
    it("should return an array of tasks", async () => {
      const res = await request.get("/api/v1/tasks");

      expect(res.status).to.equal(200);
      expect(res.body).to.be.an("array");
    });
  });

  describe("GET /api/v1/tasks/:id", () => {
    let taskId;

    beforeEach(async () => {
      const res = await request
        .post("/api/v1/tasks")
        .send({ title: "Test Task", completed: false });

      taskId = res.body.id;
    });

    it("should return a task by id", async () => {
      const res = await request.get(`/api/v1/tasks/${taskId}`);

      expect(res.status).to.equal(200);
      expect(res.body.id).to.equal(taskId);
    });

    it("should return 404 if task not found", async () => {
      const res = await request.get("/api/v1/tasks/99999");

      expect(res.status).to.equal(404);
    });
  });

  describe("PATCH /api/v1/tasks/:id", () => {
    let taskId;

    beforeEach(async () => {
      const res = await request
        .post("/api/v1/tasks")
        .send({ title: "Patch Task", completed: false });

      taskId = res.body.id;
    });

    it("should update a task", async () => {
      const res = await request
        .patch(`/api/v1/tasks/${taskId}`)
        .send({ title: "New Title" });

      expect(res.status).to.equal(200);
      // NEW: Check if the returned object actually has the new title!
      expect(res.body.title).to.equal("New Title");
    });
  });

  describe("DELETE /api/v1/tasks/:id", () => {
    let taskId;

    beforeEach(async () => {
      const res = await request
        .post("/api/v1/tasks")
        .send({ title: "Delete Me" });

      taskId = res.body.id;
    });

    it("should delete a task", async () => {
      const res = await request.delete(`/api/v1/tasks/${taskId}`);

      expect(res.status).to.equal(204);
    });
  });

  describe("Invalid route", () => {
    it("should return 404 JSON", async () => {
      const res = await request.get("/api/v1/does-not-exist");

      expect(res.status).to.equal(404);
      expect(res.body).to.have.property("message");
    });
  });
});
