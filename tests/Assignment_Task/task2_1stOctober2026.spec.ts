import {test,expect} from '@playwright/test';

test('2nd assignment of a form',async ({page})=>{

    await page.goto("https://demo.applitools.com/");
    await page.locator("#username").fill("Admin");
    await page.locator("#password").fill("Password@123");
    await page.locator("#log-in").click();
    
    await expect(page).toHaveURL("https://demo.applitools.com/app.html");


    await page.pause();

});