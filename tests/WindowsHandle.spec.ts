import {test, expect} from "@playwright/test";

test("Windows Handles", async ({page, context}) => {

    await page.goto("https://qaplayground.com/practice/tabs-windows");

    await page.getByRole('link', {name: '🔗 Open in New Tab'}).click();

    const winpages = await context.pages();

    await winpages[0].bringToFront();
    await page.waitForTimeout(3000);
    await winpages[1].bringToFront();
    await page.waitForTimeout(3000);

    const [winIns] = await Promise.all([
         context.waitForEvent('page'),
         page.getByRole('link', {name: '🔗 Open in New Tab'}).click(),
    ]);

    await winIns.waitForLoadState();
    await winIns.bringToFront();



});