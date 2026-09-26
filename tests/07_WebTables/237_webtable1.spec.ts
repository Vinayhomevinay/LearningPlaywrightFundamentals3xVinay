import {test} from '@playwright/test';

test('test the webtable1',async ({page})=>{

    await page.goto("https://awesomeqa.com/webtable1.html");

    const rows= await page.locator('//table[@border="1"]/tbody/tr').count();
    console.log(rows);

    await page.pause();

});