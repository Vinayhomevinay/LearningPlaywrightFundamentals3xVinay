import {test,expect} from '@playwright/test';


test('hover menu assignment',async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");

    
    await page.getByTestId("nav-add-ons").hover();
    await page.getByTestId("test-id-Wifi").click();
    const ouputlog= await page.locator("#output").innerText();
    await expect(page.locator("#output")).toContainText("Wi-Fi");
    console.log(ouputlog);
    await page.pause();

});