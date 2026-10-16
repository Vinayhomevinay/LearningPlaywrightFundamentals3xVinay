import {Page,Locator} from '@playwright/test';

export class InventoryPage{

        //Locators
        readonly page:Page;
        readonly firstItemName:Locator;
        readonly firstItemAddtoCart:Locator;
        readonly addItemtoCart:Locator;

        constructor(page:Page){
            this.page=page;
            this.firstItemName=page.locator("[data-test='item-test-allthethings-tshirt-red-title-link']");
            this.firstItemAddtoCart=page.locator('[data-test="add-to-cart-test-allthethings-tshirt-red"]');
            this.addItemtoCart=page.locator("//a[@id='shopping_cart_container']//*[name()='svg']");

        }



        //Actions
        async AddtoCartFlow(){
           const iteamName= await this.firstItemName.innerText();
           await this.firstItemAddtoCart.click();
           await this.addItemtoCart.click();
            return iteamName;
        }


}
