import {test,expect, Locator} from '@playwright/test';


test('Basic verify how to handle multiple elements',async ({page})=>{

await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
const rightPanelLinks:Locator[] = await page.locator('a.list-group-item').all();
   
for (const link of rightPanelLinks) {
        console.log(await link.getAttribute("href"));
    }

    await page.pause();



});