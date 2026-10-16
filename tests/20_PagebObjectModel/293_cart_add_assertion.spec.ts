import {test,expect} from '@playwright/test';
import {InventoryPage} from './pages/inventoryPage'
import { LoginPage } from './pages/loginPage';
import { CartPage } from './pages/cartPage';


test.describe('planning a flow from login to cart', () =>{

    test('Checking the TTACart Flow',async ({page})=>{

        const loginPage= new LoginPage(page);
        const inventoryPage=new InventoryPage(page);
        const cartPage=new CartPage(page);

       await loginPage.goto();
       await loginPage.loginflow('standard_user','tta_secret');
      const itemvalue=  await inventoryPage.AddtoCartFlow();

       // const itemvalue = await cartPage.verifycart();

        await expect(cartPage.itemname).toHaveText(itemvalue);


       await page.pause();
       

    });


});