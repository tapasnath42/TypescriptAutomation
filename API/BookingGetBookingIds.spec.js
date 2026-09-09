import {test, expect, request} from "@playwright/test";

test("Get Booking Ids", async ({ request })=>{

    // const jsonData = {

    // }

    const response = request.get("https://restful-booker.herokuapp.com/booking", {
        headers: { accept: "application/json" },
    });

    const jsonResponseData = await response.json();
    console.log(jsonResponseData);
    


});