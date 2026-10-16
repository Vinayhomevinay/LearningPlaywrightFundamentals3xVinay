import {Page,Locator} from '@playwright/test';

export class CartPage{

    //Locator
    readonly page:Page;
    readonly itemname:Locator;

    constructor(page:Page){
        this.page=page;
        this.itemname=page.locator("//a[@class='cart-name']");


    }


    //Actions
    async verifycart()
    {
       const itemname= this.itemname.innerText();
       return itemname;
    }

}