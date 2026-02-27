const request = require("supertest");
const app = require("../app");

describe("GET /",()=>{
    it("should return 200 and hello world message", async()=>{
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("message", "hello world")
    })
})

describe("POST /api/auth/register",()=>{
    it("should return 201 and register a user with user data",async()=>{
        const res = await request(app).post("/api/auth/register").send({
            username:"test",
            email:"test@test.com",
            password:"test"
        })
        
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("message","user register successfully");
        expect(res.body).toHaveProperty("user");
        expect(res.body.user).toHaveProperty("username","test");
        expect(res.body.user).toHaveProperty("email","test@test.com");
    })
})