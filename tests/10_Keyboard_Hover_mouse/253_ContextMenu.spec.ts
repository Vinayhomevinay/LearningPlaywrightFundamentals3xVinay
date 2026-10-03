import {test,expect} from '@playwright/test';

test('verify context menu options is ok', async ({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/context-menu");

    await page.getByTestId("ctx-target").click({button:"right"});
    

    await page.pause();
});