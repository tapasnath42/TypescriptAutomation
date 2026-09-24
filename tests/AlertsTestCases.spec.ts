import { test, expect } from "@playwright/test";

test("Dialog opens after trigger button click", async({ page }) => {

    await page.goto("https://qaplayground.com/practice/alerts-dialogs");
    await page.getByRole('button', {name: 'Open Info Dialog'}).click();

    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('dialog');
        await dialog.accept();
    });

});

test.only("Dailog", async({ page }) => {

    await page.goto("https://qaplayground.com/practice/alerts-dialogs");
    await page.getByRole('button', {name: 'Open Confirm Dialog'}).click();

    page.once('dialog', async dialog => {
        console.log("this is the dailog box : " + await dialog.type());
        expect(await dialog.type()).toBe('dialog');   
        await dialog.accept();
    });

    console.log("");
    
});

test("Handle Dailog box", async ({page}) => {

    page.once('dialog', async dailog => {
        await dailog.accept();
        await dailog.dismiss();
        await dailog.message();
        await dailog.type();
    });

});

test("Dailog Box.", async({page, context}) => {

    await expect(page).toHaveURL("");
    await expect(page).toHaveTitle("");

   page.once('dialog', async dailog => {
        dailog.accept();
   }); 

});