import {test, expect} from "@playwright/test";
import { TIMEOUT } from "node:dns";


test.describe("describe the test", () => {

    test("file upload", async ({page}) => {

        await page.goto("https://qaplayground.com/practice/file-upload");
        await page.getByTestId('fu-single-input').setInputFiles("Screenshots/screen.png");

        await page.waitForTimeout(3000);

       //page.locator("").click({timeout: 3000});

       page.locator("").pressSequentially("Hello",{delay: 2000});
       page.locator("").press('Enter');
       page.keyboard.type("", {delay:1000});

       page.locator("").click({timeout:3000});
       page.keyboard.type("Hello", {delay:1000});

    });

});