import {test as base, Page} from "@playwright/test"

type myfixtures = {
    loginpage:Page;
}

export const test = base.extend<myfixtures>({

    loginpage:async({page}, use) => {
        await page.goto("https://www.saucedemo.com/");
        await page.getByRole('textbox', { name: 'Username' }).fill("");
        await page.getByPlaceholder('Password').fill("");
        await page.getByRole('button').click();

        await use(page);

        // Write the code / steps to perform after the test case is over.
        

    }

});