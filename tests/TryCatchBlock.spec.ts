import {test, expect} from "@playwright/test";

test("Unexpected errors and exceptions", async ({page}) => {
    try{
        await page.goto("https://qaplayground.com/practice");
    }catch(error){
        console.error("Error found : " , error);
        await page.screenshot({path: '../TypescriptAutomation/Screenshots/error.png'});
        throw error; // Re-Throw to fail the test.
    }
    


});