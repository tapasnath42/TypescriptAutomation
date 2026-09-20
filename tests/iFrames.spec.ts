import {test, expect} from "@playwright/test";

test("IFrames", async ({page}) => {

    await page.goto("https://qaplayground.com/practice/iframes");

    //first way
    page.frameLocator().getByRole('button', {name:'button'}).click();

    // second way
    const frame = await page.getByRole('link', {name: 'link'}).contentFrame();
    frame.getByRole('button', {name: ''}).click();

    const frame1 = page.frameLocator().frameLocator();
    frame1.locator("").waitFor({state: 'visible'});

    page.locator("", {has: page.locator("")}).click();


    //=====================================================
    /*
    // 1. Interact with an element inside the iframe
    const iframe = page.frameLocator('#my-iframe');
    await iframe.locator('#submit-button').click();

    // 2. "Switch back" to the main frame automatically 
    // Just call 'page' directly instead of 'iframe'
    await page.locator('#main-page-header').click();

    */


});