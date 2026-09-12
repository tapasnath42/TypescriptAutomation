import { test, expect } from "@playwright/test";
import { PayLoadData } from "./JsonPayLoad/PayLoadData";
import { GetToken } from "./JsonPayLoad/GetToken";


test("Update Booking", async ({request})=> {

    const jsonPayLoadData = new PayLoadData().UpdateBookingJsonPayLoadData;
    const authToken = await new GetToken().getTheToken(request);

    const response = await request.put("https://restful-booker.herokuapp.com/booking/800", ({headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
        "Cookie": "token=" + authToken,
    },
    data: jsonPayLoadData,
}))
    
    const responseBody = await response.text();
    console.log(typeof responseBody);
    
    //expect(response.status(), responseBody).toBe(200);
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");

    const jsonResponse = JSON.parse(responseBody);
    console.log(jsonResponse);
    await expect(jsonResponse.firstname).toBe(jsonPayLoadData.firstname);
    await expect(jsonResponse.lastname).toBe(jsonPayLoadData.lastname);
    console.log(jsonResponse.bookingdates.checkin);
    console.log(jsonResponse.bookingdates.checkout);
    

    


});