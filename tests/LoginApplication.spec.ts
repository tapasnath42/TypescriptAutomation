import {test} from "@playwright/test";
import { Login } from "../Pages/Login";
import { Dashboard } from "../Pages/Dashboard";



test("Verify login into the application", async ({page}) => {

        const loginPageObj = new Login(page);
        const dashboardPageObj = new Dashboard(page);

        await loginPageObj.openApplication();
        await loginPageObj.login("standard_user", "secret_sauce");
        await dashboardPageObj.verifyDashboardPage();
        //await dashboardPageObj.clickOnProduct("Bike");
        await dashboardPageObj.clickOnProductAndCheckRemove("Bolt");



});