import {Locator, Page, test} from "@playwright/test";
import { MethodOverriding1 } from "./MethodOverriding1";

class MethodOverloading2 extends MethodOverriding1{

    readonly page: Page;
    readonly loc1: Locator;
    readonly loc2: Locator;

    constructor(page:Page){
        super(page);
        this.page = page;
        this.loc1 = page.locator("");
        this.loc2 = page.locator("");
    }

    async MO1Fun1(){
        console.log("This is MO1Fun1");   
    }

    async accessfun(){
        super.MO1Fun1();
    }

}