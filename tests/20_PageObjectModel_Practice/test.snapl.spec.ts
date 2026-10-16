import {test} from '@playwright/test';
import {Loginpage} from './pages/loginpage';


test.describe('using snaplocator POM',()=>{

    test('test and check login flow',async({page})=>{

        const loginpage=new Loginpage(page);

        await loginpage.goto();

        await loginpage.loginflowsnaplocator('standard_user','tta_secret');

        await page.pause();
    });
});