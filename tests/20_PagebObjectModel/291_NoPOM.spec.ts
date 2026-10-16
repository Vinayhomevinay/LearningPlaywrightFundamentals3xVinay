import {test,expect} from '@playwright/test';

test.describe('test without pom',()=>{

     const data =
    {
        description: "valid credentials",
        username: "standard_user",
        password: "tta_secret",
        expectedURL: /ttacart/,
        shouldPass: true

    };
    test(`login with ${data.description}`,async ({page})=>{

        await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
        await page.locator('#user-name').fill(data.username);
        await page.locator('#password').fill(data.password);
        await page.locator('#login-button').click();

        await expect(page).toHaveURL(data.expectedURL);
        
        await page.pause();


    });

});
