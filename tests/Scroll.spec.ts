import {test, expect} from "@playwright/test";

test("Scroll to the element", async({page}) => {

    page.locator('').scrollIntoViewIfNeeded();

    // Scroll the footer into view, forcing an "infinite list" to load more content
await page.getByText('Footer text').scrollIntoViewIfNeeded();


// Position the mouse and scroll with the mouse wheel
await page.getByTestId('scrolling-container').hover();
await page.mouse.wheel(0, 10);

// Alternatively, programmatically scroll a specific element
// This is just like javascript scroll in selenium.
await page.getByTestId('scrolling-container').evaluate(e => e.scrollTop += 100);

// Scrolling inside the container.
const container = await page.locator("#desktop-1");
await container.scrollIntoViewIfNeeded();
const product = await container.getByAltText('');
await product.scrollIntoViewIfNeeded();
await product.click();

});