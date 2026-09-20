import {test, expect} from "@playwright/test";

    test.beforeAll("Test Before All", () => {
        console.log("This is the Test Before All");
    });

    test.beforeEach("Test Before Each", () => {
        console.log("This is the Test Before Each");
    });

    test("Test Describe 1", ({page}) => {
        console.log("This is the Test Describe 1");
        page.locator("").selectOption("");
        page.locator("").selectOption;
    });

    test("Test Describe 2", ({page}) => {
        console.log("This is the Test Describe 2");
    });

    test("Test Describe 3", ({page}) => {
        console.log("This is the Test Describe 3");
    });

    test("Test Describe 4", ({page}) => {
        console.log("This is the Test Describe 4");
    });

    test("Test Describe 5", ({page}) => {
        console.log("This is the Test Describe 5");
    });

    test.afterEach("Test After Each", () => {
        console.log("This is the Test After Each");
    });

    test.afterAll("Test After All", () => {
        console.log("This is the Test After All");
    });