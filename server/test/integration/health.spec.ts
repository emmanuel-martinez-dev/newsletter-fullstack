import request from "supertest";
import HttpStatus from "http-status";
import { createServer } from "../../src/server";

describe("health", () => {
  const server = createServer().listen(80);

  afterAll(async () => {
    server.close();
  });

  it("should return 200 if the server is up", async () => {
    await request(server)
      .get("/v1/health")
      .send()
      .expect("ok")
      .expect(HttpStatus.OK);
  });
});
