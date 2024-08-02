import app from "../server";
import request from "supertest";

// describe("POST /user", function () {
//   it("responds with json", async () => {
//     const res = await request(app)
//       .post("/user")
//       .send({ username: "userss", password: "passss" })
//       .set("Accept", "application/json")

//     expect(res.status).toEqual(200);
//   });
// });

describe("GET /product", function () {
    it("responds with json", async () => {
        const res = await request(app)
        .get("/api/product")
        .set("Accept", "application/json")
        .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTZkNjQyLTY4MTEtNGFiNC1hMjQ1LWJmNTQ5Y2E0NTVmNSIsInVzZXJuYW1lIjoibGFjZW4iLCJpYXQiOjE3MjI1NTA5NDl9.JpxPz8g5UvmHJG_xgsmn2GDG_pGjJD3erGM6ZjROjo4")
    
        // expect(res.status).toEqual(401); // 401 Unauthorized because no token
        expect(res.status).toEqual(200); // 200 OK because token is provided
    });
});