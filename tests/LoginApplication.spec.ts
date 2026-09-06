import { expect, test } from "@playwright/test";
import { Login } from "../Pages/Login";
import { Dashboard } from "../Pages/Dashboard";
import { CartPage } from "../Pages/CartPage";


test("Verify login into the application", async ({page}) => {

        const loginPageObj = new Login(page);
        const dashboardPageObj = new Dashboard(page);
        const cartPageObj = new CartPage(page);

        await loginPageObj.openApplication();
        await loginPageObj.login("standard_user", "secret_sauce");
        await dashboardPageObj.verifyDashboardPage();
        //await dashboardPageObj.clickOnProduct("Bike");
        //await dashboardPageObj.clickOnProductAndCheckRemove("Bike");

        const arr = ["Backpack", "Fleece", "Bike", "Bolt"];
        await dashboardPageObj.clickOnProductAndCheckRemove(arr);

        await expect(page.locator("button:has-text('Remove')")).toHaveCount(arr.length);

        await dashboardPageObj.clickCartIcon();

        await cartPageObj.verifyProductCartPage(arr);

        await page.waitForTimeout(5000);


});