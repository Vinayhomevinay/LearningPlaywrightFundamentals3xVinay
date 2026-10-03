import {test} from '@playwright/test';


test('',async ({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/dnd");

    
    await page.pause();

});