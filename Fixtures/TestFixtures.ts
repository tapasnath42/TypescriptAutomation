import {test as base} from "@playwright/test";

import { Login } from "../Pages/Login";
import { Dashboard } from "../Pages/Dashboard";
import { CartPage } from "../Pages/CartPage";

type Fixtures = {
    loginObj: Login;
    dashboardObj: Dashboard;
    cartPageObj: CartPage;
};

export const test = base.extend<Fixtures>({

    loginObj: async ({page}, use) => {
        const loginObj = new Login(page);
        await use(loginObj);
    },

    dashboardObj: async ({page}, use) => {
        const dashboardObj = new Dashboard(page);
        await use(dashboardObj);
    },

    cartPageObj: async ({page}, use) => {
        const cartPageObj = new CartPage(page);
        await use(cartPageObj);
    }
});

export {expect} from "@playwright/test";

