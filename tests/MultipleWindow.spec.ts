import {test, expect, chromium, ElementHandle} from "@playwright/test";

test("test1", async({page, context, browserName})=>{

    //test.skip(browserName==='chromium', "cannot able to run");

    // const browser = await chromium.launch({headless:false});
    // const context = await browser.newContext();
    // const page = await context.newPage();
    // await page.goto("");

    await page.goto("https://qaplayground.com/practice/tabs-windows");
    //await page.waitForTimeout(3000);
    const str = await page.locator('//span[text()="QA Playground"]').first().textContent();
    expect(await page.locator('//span[text()="QA Playground"]').first().textContent()).toBe("QA Playground");
    //console.log(typeof str);
    //str?.includes("ss") ? console.log("Present") : console.log("not present");
    //await page.getByRole('link', { name: '🔗 Open in New Tab' }).first();
    let [newTab] = await Promise.all([
    context.waitForEvent('page'),             // 1. Listen for the new page event
    page.getByRole('button', { name: '↗ Open Tab A' }).first().click() // 2. Perform click action
  ]);

  await newTab.waitForLoadState();
  //const locatorarr:ElementHandle[] = await page.$$("");
  // str?.startsWith("M");
  // locatorarr.forEach((locator) => {
  //   const text:Promise<string | null> = locator.textContent();
  //   expect(text).toContain("M");
  // });

  expect(newTab).toHaveURL("https://qaplayground.com/");
  //newTab.bringToFront();
  let pages = context.pages();

  await pages[0].bringToFront();
  await page.waitForTimeout(5000);
  [newTab] = await Promise.all([
    context.waitForEvent('page'),             // 1. Listen for the new page event
    page.getByRole('button', { name: '↗ Open Tab B' }).first().click() // 2. Perform click action
  ]);
  expect(newTab).toHaveURL("https://qaplayground.com/practice");

  await page.bringToFront();
  await page.waitForTimeout(2000);
  [newTab] = await Promise.all([
    context.waitForEvent('page'),             // 1. Listen for the new page event
    page.getByRole('button', { name: '↗ Open Tab C' }).first().click() // 2. Perform click action
  ]);
  expect(newTab).toHaveURL("https://qaplayground.com/practice/links");  



  console.log(context.pages().length);
  
  expect(context.pages().length === 2)
    
    //console.log(str);
    
    //expect().toBe("QA Playground");

    

});