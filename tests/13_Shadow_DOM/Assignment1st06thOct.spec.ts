import {test} from '@playwright/test';


test.describe('Shadow Dome test',()=>{
    const url="https://selectorshub.com/xpath-practice-page/";
    
    test.beforeEach('Every Step',async ({page})=>{
        await page.goto(url);


    });

test ("Testing the shadow dom assignment",async({page})=>{

    const jackport= page.locator("//div[@class='jackPart']");
    
    await jackport.locator("#kils").fill("vinay");
    await jackport.locator("#pizza").fill("farmhouse");
    await page.keyboard.press("TAB");
    await page.keyboard.press("keyboardmethods");
    await page.keyboard.press("TAB");
    await page.keyboard.press("TAB");
    await page.keyboard.press("secret123");

    
    await page.pause();

});






});