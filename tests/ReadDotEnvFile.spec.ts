
import {test, expect} from "../Fixtures/TestFixtures";
import dotenv from "dotenv";

dotenv.config({path: 'TestData/.env'});
test("Reading data from dot env file", async ({page, loginObj, dashboardObj, cartPageObj}) => {

    const appURL = process.env.url as string;
    const username = process.env.username as string;
    const password = process.env.password as string;

    await page.goto(appURL);
    await page.waitForTimeout(1000);
    await loginObj.login(username, password);

    await page.waitForTimeout(3000);

});