import {test, expect, chromium} from "@playwright/test";

test("Take full page screenshot", async ({page, context}) => {

    /*const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();*/

    await page.goto("https://qaplayground.com/practice/tabs-windows");

    await page.screenshot({path:"../TypescriptAutomation/Screenshots/screen.png", fullPage:true})

    const loc = await page.locator("//button[contains(@id,'tw-tab')]");
    //console.log(await loc.count());
    //console.log(await loc.nth(0).textContent());
    //let val = await loc.nth(0).textContent();
    
    //const loccount = await loc.count();
    for(let i=0; i<await loc.count(); i++){
        console.log(await loc.nth(i).textContent());
        console.log(await loc.nth(i).innerText());
    }

    

    const nn = await loc.frameLocator("");

    



    

    // let newTab = await Promise.all([
    //     context.waitForEvent("page"),
    //     await page.getByRole("button", {name:"button_name"}).click()
    // ]);

    // context.pages();

});