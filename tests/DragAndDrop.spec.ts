import {test, expect} from "@playwright/test";

test("Drag and Drop", async ({page}) => {

await page.goto('https://example.com');

// Define your source and target locators
const sourceElement = page.locator('#item-to-be-dragged');
const targetElement = page.locator('#item-to-drop-at');

// Perform the drag and drop action
await sourceElement.dragTo(targetElement);

// Assert the expected outcome (e.g., target contains the text or element)
await expect(targetElement).toHaveText('Dropped!');

// another exmaple.
page.locator("").dragTo(page.locator(""));

});