import {test,expect} from '@playwright/test';
import {InventoryPage} from './pages/inventoryPage'
import { LoginPage } from './pages/loginPage';


test.describe('planning a flow from login to cart', () =>{

    test('Checking the TTACart Flow',async ({page})=>{

        const loginPage= new LoginPage(page);
        const inventoryPage=new InventoryPage(page);

       await loginPage.goto();
       await loginPage.loginflow('standard_user','tta_secret');
       await inventoryPage.AddtoCartFlow();

       await page.pause();
       

    });


});