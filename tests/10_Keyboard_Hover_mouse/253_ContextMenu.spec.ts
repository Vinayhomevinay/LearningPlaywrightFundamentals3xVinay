import {test,expect} from '@playwright/test';

test('verify context menu options is ok', async ({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/context-menu");

    await page.getByTestId("ctx-target").click({button:"right"});

    const contextmenulist= await page.getByTestId("ctx-menu").allInnerTexts();

    const contextmenuoption:string[]= await page.locator('ul.context-menu-list span').allInnerTexts();
    console.log(contextmenuoption);

    await page.getByText('Copy', { exact: true }).first().click();

       
        console.log(`After click ##### the other method: ${contextmenulist}`);

    await page.pause();
});