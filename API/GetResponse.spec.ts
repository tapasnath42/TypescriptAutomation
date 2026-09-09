import { expect, test } from "@playwright/test";

test("Get Response", async ({ request }) => {

  const authdata = {
  "email": "student@example.com",
  "password": "secret123"
}

  const response = await request.post("https://api.eventhub.rahulshettyacademy.com/api/auth/login", {
    headers: { accept: "application/json" },
    data: authdata,
  });

  expect(response.status()).toBe(200);
  expect(response.statusText()).toBe("OK");

  const body = await response.json();
  console.log(body);
  console.log(body.token);
  expect(body.user.email).toBe(authdata.email);
  expect(body.user.email).toContain("student");
  expect(body.user.email).not.toBeNull();
  console.log(body.user.email);
  

  expect(body).toMatchObject({
    success: true,
    user: {
      id: 4,
      email: "student@example.com",
    },
  });
  expect(typeof body.token).toBe("string");

});