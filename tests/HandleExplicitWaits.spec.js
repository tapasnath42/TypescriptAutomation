import { test, expect } from "@playwright/test";

test("Explicit waits", async ({ page }) => {

    // How do you handle explicit waits?

    // Wait for element to be visible
    // Playwright does not recommend this.
    await page.waitForSelector('#element', { state: 'visible' });

    // Wait for network to be idle
    await page.waitForLoadState('networkidle');

    // Wait for specific element state
    await page.locator('#button').waitFor({ state: 'visible' });
    await page.locator('#button').waitFor({ state: 'visible' }, { timeout: 3000 });
    await page.locator('#button').waitFor({ state: 'visible', timeout: 3000 });

    // Wait for URL
    await page.waitForURL('**/dashboard');

    // Wait for response
    await page.waitForResponse('**/api/data');

    // Custom timeout
    await page.click('#submit', { timeout: 5000 });


    await page.waitForLoadState('load', { timeout: 10000 });

    await page.waitForSelector('#input-firstname11', { state: 'visible', timeout: 5000 });

    await page.locator('#input-firstname11').waitFor({ state: 'visible' });

    await page.waitForURL('**/register', { timeout: 5000 });

    await page.click('input[name="agree11"][type="checkbox"][value="1"]', { timeout: 5000 });

    await page.locator('input[name="agree"][type="checkbox"][value="1"]').click({ timeout: 5000 });

    await expect(page.locator('#input-firstname1')).toBeVisible({ timeout: 4000 });

    //await page.waitForTimeout(5000);

});