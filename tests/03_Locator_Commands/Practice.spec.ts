import {test,expect} from "@playwright/test";

test("test the xpath functions capability using wingify",async({page})=>{

    await page.goto("https://wingify.com/free-trial/");

    await page.locator("//input[@class='WInput']").fill ("abcd");

    await page.pause();
    


});