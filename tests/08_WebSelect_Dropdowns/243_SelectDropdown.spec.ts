import {test} from '@playwright/test';

test('verify dropdown option is clickable', async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/dropdown");

    await page.locator("#dropdown").click();
    await page.selectOption("#dropdown","Option 1");
    

    await page.pause();


});