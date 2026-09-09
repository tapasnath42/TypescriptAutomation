import { Locator, Page } from "@playwright/test";

export class practicingLocators{
    
    private readonly page : Page;
    private readonly username : Locator;

    constructor(page: Page){
        this.page = page;
        this.username = page.locator("");
    }


    async name(params:string) : Promise<void>{
        this.page.getByRole('button', {name: "", level:1}).fill("");

        // Press each alphabet one by one.
        this.page.locator("").pressSequentially("");
        
        // fill("") , will enter the text in one go. (fast.)
        // pressSequentially , will enter one by one .
        // for every actions of the locator, 
        // 1. Attached to the DOM. 2. Enable. 3. Visible 4. Stable. 


        this.page.locator("").waitFor({state: "visible"});

        this.page.locator("").waitFor({state: 'visible', timeout: 5000}); // This will ecounter the actionTimeout

        await this.page.waitForLoadState('load');

        this.page.waitForSelector("", {state: 'visible', timeout: 5000});


        // Button press
        this.page.locator("").press("Enter");
        this.page.locator("").press("Enter+A");

        try {
            
        } catch (error: unknown) {
            console.log();
            
        }
        
        // Select option can be done from value, label and index.
        // Locate the select dropdown and select by its value attribute
        this.page.locator('#colors').selectOption('blue');

        // Target the dropdown and explicitly select by label
        this.page.locator('#country').selectOption({ label: 'India' });

        // Shortcut: Playwright automatically attempts to match by label or value
        this.page.locator('#country').selectOption('India');

        // Locate the select element and select the 3rd option (index 2)
        this.page.locator('#my-dropdown').selectOption({ index: 2 });

        // Example using a semantic locator
        this.page.getByLabel('Choose a color').selectOption({ index: 0 });






    }

}

