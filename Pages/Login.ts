import {Locator, Page} from "@playwright/test";

export class Login{

    // These are the declaration of the properties.
    // And you need to initialise those in the constructor.
    private readonly page : Page;
    private readonly userNameTextBox : Locator;
    private readonly passwordTextBox : Locator;
    private readonly loginButton : Locator;


    constructor(page: Page){
        this.page = page;
        this.userNameTextBox = page.getByRole('textbox', { name: 'Username' });
        this.passwordTextBox = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button');
    }

    /**
     * This method will login into the application.
     */
    async login(userName : string, password : string): Promise<void>{
        await this.userNameTextBox.fill(userName);
        await this.passwordTextBox.fill(password);
        await this.loginButton.click();
    }

    async openApplication(){
        await this.page.goto("https://www.saucedemo.com/");
    }

    

}