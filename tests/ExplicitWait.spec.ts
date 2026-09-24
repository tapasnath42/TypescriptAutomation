import {test, expect} from "@playwright/test";

test("Explicit Wait", async ({page}) => {

    await page.goto("https://qaplayground.com/practice/tabs-windows");

    const loc = await page.locator("//button[contains(@id,'tw-tab')]").first();
    // Here we are explicit waiting for the web-element to be visible.
    await loc.waitFor({state:'visible'});
    await loc.waitFor({state:'visible', timeout:3000});
    
    console.log(await loc.count());
    
    await loc.click();

});


/*Playwright handles waiting using a dual system: Auto-Waiting for standard user actions, and Explicit Waits for network or animation changes.
## Core Waiting Mechanisms

* Auto-Waiting: Before every action (like .click()), Playwright automatically loops until the target element passes 5 actionability checks: attached, visible, stable (no animation), enabled, and editable.
* Web-First Assertions: Using expect(locator).toBeVisible() automatically retries until the specified condition is met or the timeout expires, preventing flaky tests.
* Network & Navigation Waits: Methods like page.waitForResponse() and page.waitForURL() pause execution until specific API responses return or page routing completes.
* Locator & Event Waits: Functions like locator.waitFor({ state: 'hidden' }) let you explicitly track state changes or browser events (like popups).
* Static Timeouts: page.waitForTimeout() introduces hardcoded pauses; it should be used exclusively for debugging, not production.

Would you like help translating these strategies into code for your specific framework, or are you trying to fix a flaky test right now?
*/


// 1. Auto-wait (built-in, most common)
await page.click('button'); // Automatically waits

// 2. Wait for element state
await page.locator('button').waitFor({ state: 'visible' });
await page.locator('button').waitFor({ state: 'hidden' });

// 3. Wait for navigation
await Promise.all)] page.waitForNavigation(),page.click('a')]);

// 3. Wait for navigation (Correct Syntax)
await Promise.all([
  page.waitForNavigation(),
  page.click('a')
]);

