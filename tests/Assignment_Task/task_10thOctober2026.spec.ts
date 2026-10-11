import {test,expect} from '@playwright/test';


test('Expect assertions test',async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    await expect(page).toHaveURL("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    await expect (page.locator("#email")).toBeEditable();
    await expect(page.locator("#password")).toBeEditable();
    
    await expect.soft(page.locator("#page-title")).toHaveText("Master multiple element filters on a real login UI");

    await expect(page.locator("#footer-links a")).toHaveCount(16);



});