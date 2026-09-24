import {test, expect, Locator, Page} from "@playwright/test";

export class login{

    readonly page : Page;
    readonly username: Locator;
    readonly password : Locator;
    readonly loginButton : Locator;

    constructor(page: Page){

        this.page = page;
        this.username = page.getByRole('textbox', {name: 'username'});
        this.password = page.getByRole('textbox', {name: 'password'});
        this.loginButton = page.getByRole('button', {name: 'login'});
        
    }

    /**
     * Logs into the application.
     * @param username : Username 
     * @param password : Password
     */
    async loginToApplication(username:string, password:string):Promise<void>;

    /**
     * Logs into the application.
     * @param username : Username 
     * @param password : Password
     */
    async loginToApplication(username:string, password:number):Promise<void>;
    async loginToApplication(username:number, password:string):Promise<void>;
    async loginToApplication(username:number, password:number):Promise<void>;
    async loginToApplication(username:number, password:number, login:string):Promise<void>;

    /**
     * Logs into the application.
     * @param username : Username 
     * @param password : Password
     */
    async loginToApplication(username:any, password:any, login?:any):Promise<any>{
        //await this.username.fill(username);
        //await this.password.fill(password);
        //await this.loginButton.click();

        console.log("This is login function.");

        if(login){
            console.log(`Value given for login ${login}`);
        }else console.log("No value given for login");
        
    }

    async accessLogin(){
        const loginObj = new login(this.page);
        this.loginToApplication("","");
        this.loginToApplication(8,8,"");
    }


}

