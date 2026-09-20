import {test, expect} from "@playwright/test";

test("Explicit Wait", async ({page}) => {

    await page.goto("https://qaplayground.com/practice/tabs-windows");

    const loc = await page.locator("//button[contains(@id,'tw-tab')]").first();
    // Here we are explicit waiting for the web-element to be visible.
    await loc.waitFor({state:'visible'});
    
    console.log(await loc.count());
    
    await loc.click();


});