import {test} from '@playwright/test';
import datatest from './test-data/login.json';


test.describe('testing with valid data and invalid data',()=>{

 test.beforeEach('navigating to the page',async({page})=>{

    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

     });

  test('login with valid data',async({page})=>{

    await page.locator('#email').fill(datatest.validUser.email);
    await page.locator('#password').fill(datatest.validUser.password);
    await page.getByTestId('login-button').click();

  });   

  test('login with invalid password',async({page})=>{
    await page.locator('#email').fill(datatest.invalidUser.email);
    await page.locator('#password').fill(datatest.invalidUser.password);
    await page.getByTestId('login-button').click();
    await page.pause();
  });

});

   


