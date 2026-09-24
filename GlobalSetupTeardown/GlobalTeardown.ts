import {test as teardown} from "@playwright/test";

teardown('Global Tear Down', async() =>{
    console.log("This is Global tear down.");
});