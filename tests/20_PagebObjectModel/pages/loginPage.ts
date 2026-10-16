import {Page,Locator} from '@playwright/test';

export class LoginPage{

    //page locators
    readonly page:Page;
    readonly emailInput:Locator;
    readonly password:Locator;
    readonly loginButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.emailInput=page.locator('#user-name');
        this.password=page.locator('#password');
        this.loginButton=page.locator('#login-button');
    }



    //Actions
 async goto()
 {
     await this.page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
     await this.page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
 }

 async loginflow(username:string,password:string)
 {
        await this.emailInput.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
 }



}