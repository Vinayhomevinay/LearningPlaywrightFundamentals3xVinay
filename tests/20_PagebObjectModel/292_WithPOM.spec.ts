import{expect, test} from '@playwright/test';
import{LoginPage} from './pages/loginPage';

test.describe('POM Implementation',() =>{

test('Login flow check',async({page})=>{

        const loginPage= new LoginPage(page);
        await loginPage.goto();
        await loginPage.loginflow('standard_user','tta_secret');
        await expect(page).toHaveTitle('TTACart - Products');

})



});

