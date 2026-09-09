import { Locator, Page, expect } from "@playwright/test";

export class Dashboard{

    readonly page : Page;
    readonly swagLabs : Locator;
    readonly productLabel : Locator;
    readonly cartIcon : Locator;
    readonly yourCartLabel : Locator;


    constructor(page : Page){
        this.page = page;
        this.swagLabs = page.locator('div.app_logo')
        this.productLabel = page.getByText('Products');
        this.cartIcon = page.locator("//a[contains(@class,'shopping_cart')]");
        this.yourCartLabel = page.getByText('Your Cart', { exact: true });
    }

    /**
     * This method verifies the Dashboard page.
     */
    async verifyDashboardPage(){
        await expect(this.swagLabs).toContainText("Swag Labs");
        await expect(this.productLabel).toContainText("Products");
    }

    // //button[contains(@id, 'add-to-cart')]/parent::div/parent::div//a/div
    //div[@class='inventory_item']//a/div[contains(text(),'Bolt')]/parent::a/parent::div/following-sibling::div//button

    async clickOnProduct(proName : string){
        const products = await this.page.$$("//button[contains(@id, 'add-to-cart')]/parent::div/parent::div//a/div");

        for(let i=0; i<products.length; i++){
            //let productName = products[i].textContent();
            const productName: string | null = await products[i].textContent();
            if(productName?.includes(proName)){
                await this.page.locator("(//button[contains(@id,'add-to-cart')])["+(i+1)+"]").click();
            }
        }
    }

    /**
     * Clicks on the Add Product and check remove.
     * @param proName 
     */
    async clickOnProductAndCheckRemove(proName : string | string[]){

        for(const val of proName){
            let element = this.page.locator("//div[@class='inventory_item']//a/div[contains(text(),'"+val+"')]/parent::a/parent::div/following-sibling::div//button");
        await element.click();
        await expect(element).toContainText("Remove");
        }

        // let element = this.page.locator("//div[@class='inventory_item']//a/div[contains(text(),'"+proName+"')]/parent::a/parent::div/following-sibling::div//button");
        // await element.click();
        // await expect(element).toContainText("Remove");
    }

    /**
     * Clicks on the Cart Icon.
     */
    async clickCartIcon(){
        await this.cartIcon.click();
        await expect(this.yourCartLabel).toContainText("Your Cart");
    }

    async fun(num : number[]): Promise<number[]>{
        return num; 
    }





}