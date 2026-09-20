import {test, expect} from "@playwright/test";

test("Check and Uncheck", async ({page}) => {

    await page.locator("").check();
    await page.locator("").uncheck();

});