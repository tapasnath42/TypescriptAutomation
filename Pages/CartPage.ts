
import { expect, Locator, Page } from "@playwright/test";
import { Dashboard } from "./Dashboard";

export class CartPage{

    readonly page : Page;
    readonly continueShopping : Locator;
    readonly checkout : Locator;
    readonly cartItem : Locator;

    constructor(page: Page){
        this.page = page;
        this.continueShopping = page.getByRole('button', { name: 'Continue Shopping' })
        this.checkout = page.getByRole('button', { name: 'Checkout' })
        this.cartItem = page.locator("//div[@class='cart_item']//a/div");
    };

    //async verifySingleProductCartPage(productName: string): Promise<void>;
    //async verifySingleProductCartPage(productName: number): Promise<void>;
    async verifyProductCartPage(productName: string[]) {
        
        for(let i=0; i<productName.length; i++){
            await expect(this.page.locator("(//div[@class='cart_item']//a/div)["+(i+1)+"]")).toContainText(productName[(i)]);
            await expect(this.page.locator("(//div[@class='cart_item']//a/div/../following-sibling::div//button)["+(i+1)+"]")).toContainText("Remove");
        }

        await expect(this.continueShopping).toBeVisible();
        await expect(this.continueShopping).toBeEnabled();

        await expect(this.checkout).toBeVisible();
        await expect(this.checkout).toBeEnabled();
    };


    /**
     * This is the example method.
     * @returns 
     */
   async newfun(): Promise<string>{
        //return "";

         let str: string = "";
         console.log(typeof str);
         return str;
   }



}


