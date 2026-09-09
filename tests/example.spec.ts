import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test.beforeAll('BeforeAll', async ({}) => {
    console.log("This is before all");
    
});

test.beforeEach('BeforeEach', async ({page}) => {
    console.log("This is before each");
    
});

test.afterEach('AfterEach', async ({page}) => {
    console.log("This is after each");
    
});

test.afterAll('AfterAll', async ({}) => {
    console.log("This is after all");
    
});
