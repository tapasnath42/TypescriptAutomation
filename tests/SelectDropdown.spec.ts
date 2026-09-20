import {test, expect} from "@playwright/test";

test("Select Option", async ({page}) => {

    await page.goto("https://qaplayground.com/practice/dropdowns");
    await page.waitForTimeout(2000);
    //await page.getByRole('combobox', {name: 'fruit'}).selectOption("Apple");
    const selectDropdown = await page.getByRole('combobox', {name: 'fruit'});

    // Select By Value.
    await selectDropdown.selectOption({value: 'orange'});
    await page.waitForTimeout(2000);

    // Select by Label.
    await selectDropdown.selectOption({label:'Apple'});
    await page.waitForTimeout(2000);

    // Select by Index.
    await selectDropdown.selectOption({index:2});
    await page.waitForTimeout(2000);

    await expect(selectDropdown).toHaveText(['Orange','Apple','Banana']);

    // Select multiple values from dropdown.
    await selectDropdown.selectOption(["value1", "value2"]);
    await selectDropdown.selectOption([{value:''},{label:''},{index:2}]);
    await page.waitForTimeout(2000);


    //const options = await selectDropdown.locator('option').all();

    //console.log(options);
    
    await page.waitForTimeout(2000);

    const selectLocArray = await page.locator("//select[@id='fruitSelect']/option").all();
    // for (const value of selectLocArray) {
    //     const text: string = (await value.textContent()) ?? '';
    //     console.log(text);
    // }

    console.log("Select Combobox dropdown : " + selectLocArray);
    

    // for(let i=1; i<await selectLocArray.count(); i++){
    //     console.log(await selectLocArray.nth(i).innerText());
    // }

    for(let i=1; i<await selectLocArray.length; i++){
        console.log(await selectLocArray[i].innerText());
    }

    const newarr:string[] = [];

    selectLocArray.forEach(async (ele) => {
        //let val: string = (await ele.textContent()) ?? '';
        let val: string = await ele.textContent() ?? "";
        newarr.push(val);
    });

    console.log(newarr);
    
    


});