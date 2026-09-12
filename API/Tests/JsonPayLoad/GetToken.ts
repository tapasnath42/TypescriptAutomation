import { APIRequestContext, expect,  } from "@playwright/test";
import { PayLoadData } from "./PayLoadData";

export class GetToken{

      tokenPayLoadData = new PayLoadData().createTokenJsonData;

async getTheToken(apiContext: APIRequestContext): Promise<string>{
  const response = await apiContext.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      headers: {
        "Content-Type": "application/json",
      },
      data: this.tokenPayLoadData,
    }
  );

  expect(response.status()).toBe(200);
  expect(response.statusText()).toBe("OK");

  const body = await response.json();
  console.log(body.token);
  return body.token;
}


}