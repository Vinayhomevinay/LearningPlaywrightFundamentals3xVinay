import {test,expect} from '@playwright/test';


test ('verify the test case', async ({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    


    await page.pause();

});