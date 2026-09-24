import {test, expect} from "@playwright/test";

test("Switch into iframe by data-testid and fill a text input", async({page}) => {

    await page.goto("https://qaplayground.com/practice/iframes");
    //const fr = page.frames(); // Returns Frame array.
    
    const frame = await page.getByTestId('iframe-basic').contentFrame();
    await frame.getByPlaceholder("Enter your name").fill("Hello");
    await frame.getByRole("button", {name:'Submit'}).click();
});

test("Switch into iframe by title attribute", async({page}) => {

    await page.goto("https://qaplayground.com/practice/iframes");
    const frameLocator = await page.frameLocator('iframe[title="Basic Iframe"]');

    //const frame = await page.getByTestId('iframe-basic').contentFrame();
    await frameLocator.getByPlaceholder("Enter your name").fill("Hello");
    await frameLocator.getByRole("button", {name:'Submit'}).click();

    //await expect(page.getByTestId('result-s01')).toHaveText("Hello"); // For full text as equals
    await expect(page.getByTestId('result-s01')).toContainText("Hello"); // For partial text as contains

});

test("Switch into iframe by name attribute", async({page}) => {

    await page.goto("https://qaplayground.com/practice/iframes");
    const frameLocator = await page.frameLocator('iframe[name="basic-frame"]');
    await frameLocator.getByPlaceholder("Enter your name").fill("Hello");
    await frameLocator.getByRole("button", {name:'Submit'}).click();

    //await expect(page.getByTestId('result-s01')).toHaveText("Hello"); // For full text as equals
    await expect(page.getByTestId('result-s01')).toContainText("Hello"); // For partial text as contains

});

test.only("Select a dropdown option inside an iframe", async({page}) => {
    await page.goto("https://qaplayground.com/practice/iframes");
    const frameLocator = await page.frameLocator("iframe[title='Form Iframe']");
    await frameLocator.getByRole('combobox', {name: 'language'}).selectOption("Python");

    //await page.waitForTimeout(6000);
    const text = await frameLocator.getByRole('combobox', {name: 'language'}).textContent();
    console.log(text);

    const countlocator = await frameLocator.locator("//select[@id='iframe-lang-select']/option");
    //console.log(typeof countlocator[0]);
    //console.log(await countlocator[1].textContent());

    console.log(await countlocator.nth(2).textContent());
    // console.log(countlocator[1]);
    // console.log(countlocator[2]);
    
});