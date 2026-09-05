import { Locator, Page, expect } from "@playwright/test";

export class Dashboard{

    readonly page : Page;
    readonly swagLabs : Locator;
    readonly productLabel : Locator;


    constructor(page : Page){
        this.page = page;
        this.swagLabs = page.locator('div.app_logo')
        this.productLabel = page.getByText('Products');
    }

    /**
     * This method verifies the Dashboard page.
     */
    async verifyDashboardPage(){
        await expect(this.swagLabs).toContainText("Swag Labs");
        await expect(this.productLabel).toContainText("Products");
    }

}