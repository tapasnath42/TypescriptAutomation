import {test, expect, Page, Locator} from "@playwright/test";

export class MethodOverriding1{

    readonly page:Page;
    readonly loc1 : Locator;
    readonly loc2 : Locator;

    constructor(page:Page){
        this.page = page;
        this.loc1 = page.locator("");
        this.loc2 = page.locator("");
    }

    async MO1Fun1(){
        console.log("This is MO1Fun1");
        
    }

    async MO1Fun2(){
        console.log("This is MO1Fun2");
    }

}