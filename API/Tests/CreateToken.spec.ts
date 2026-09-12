import { test, expect } from "@playwright/test";
import { PayLoadData } from "./JsonPayLoad/PayLoadData";

test("Post Request", async ({ request }) => {

  const authdata = {
    "username" : "admin",
    "password" : "password123"
};

  const response = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      headers: {
        "Content-Type": "application/json",
      },
      data: authdata,
    }
  );

  expect(response.status()).toBe(200);
  expect(response.statusText()).toBe("OK");

  const body = await response.json();
  const token = body.token;
  console.log(token);

  //{ token: ' 9f03b71cb3f8e3a' } 
  
  
});