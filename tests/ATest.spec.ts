import {test, expect} from "@playwright/test";

import {login} from "../Oops/MethodOverloading1";

test("test1", async({page}) => {

        const loginObj = new login(page);
        loginObj.loginToApplication(8, 8, true);

});