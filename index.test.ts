import request from "supertest";
import app from "./app";
import { sum } from "./functions";
import data from "./data";

describe("GET /", () => {
  it("should return Hello World!", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello World!");
  });
});


describe("POST /login", () => {
  it("should return Login successful!", async () => {
    const res = await request(app).post("/login");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(data);
  });
});


describe("GET /login", () => {
  it("should return html!", async () => {
    const res = await request(app).get("/login");
    expect(res.statusCode).toBe(200);
    // Check that response includes expected HTML snippet
    expect(res.text).toContain("<!DOCTYPE html>");
    expect(res.text).toContain("<form");
    expect(res.text).toContain("Username:");
    expect(res.text).toContain("Password:");
  });
});


describe("sum function", () => {
  it("add two numbers correctly", () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(-1, 1)).toBe(0);
  })
})