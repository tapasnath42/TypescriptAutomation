import {test} from "@playwright/test";

test("", async({page}) => {

    // Mouse Hover.
    await page.locator("").hover();

    // Define your source and target locators
    const sourceElement = await page.locator('#source-item');
    const targetElement = await page.locator('#drop-zone');

    // Perform the drag and drop action
    await sourceElement.dragTo(targetElement);

    


});