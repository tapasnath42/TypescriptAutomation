//import { expect, test } from "@playwright/test";
import { Login } from "../Pages/Login";
import { Dashboard } from "../Pages/Dashboard";
import { CartPage } from "../Pages/CartPage";
import { ElementNotFoundError } from "./CustomException";

import {test, expect} from "../Fixtures/TestFixtures";


test("Verify login into the application", async ({page, loginObj, dashboardObj, cartPageObj}) => {

        // const loginPageObj = new Login(page);
        // const dashboardPageObj = new Dashboard(page);
        // const cartPageObj = new CartPage(page);

        await loginObj.openApplication();
        await loginObj.login("standard_user", "secret_sauce");
        await dashboardObj.verifyDashboardPage();

        //await dashboardPageObj.clickOnProduct("Bike");
        //await dashboardPageObj.clickOnProductAndCheckRemove("Bike");

        const arr = ["Backpack", "Fleece", "Bike", "Bolt"];
        await dashboardObj.clickOnProductAndCheckRemove(arr);

        await expect(page.locator("button:has-text('Remove')")).toHaveCount(arr.length);

        await dashboardObj.clickCartIcon();

        await cartPageObj.verifyProductCartPage(arr);

        try{
                await page.waitForTimeout(2000);
        }catch{
                throw new ElementNotFoundError("not found", "this locator not found.");
        }finally{
                
        }
       
        CartPage.fun1();

});