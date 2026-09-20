import { APIRequestContext, expect,  } from "@playwright/test";
import { PayLoadData } from "./PayLoadData";

export class GetToken{

      tokenPayLoadData = new PayLoadData().createTokenJsonData;

async getTheToken(request: APIRequestContext): Promise<string>{
  const response = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      headers: {
        "Content-Type": "application/json",
      },
      data: this.tokenPayLoadData,
      params:{
      }
    }
  );

  expect(response.status()).toBe(200);
  expect(response.statusText()).toBe("OK");

  const body = await response.json();
  console.log(body.token);
  return body.token;
}


}