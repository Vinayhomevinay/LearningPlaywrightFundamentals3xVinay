import {test,expect} from '@playwright/test';


test('fill the qa profile form ',async({page})=>{

    const firstname="Vinay";
    const lastname="Kumar";
    const gender="Male";
    const experience="7";
    const profession="Automation Tester";
    const continent="Asia";
    const tools="UFT";

    await page.goto("https://app.thetestingacademy.com/playwright/tables/practice#page");

    await page.getByTestId("first-name").fill(firstname);
    await page.getByTestId("last-name").fill(lastname);
    await page.getByTestId("gender-male").click();
    await page.selectOption("#years-experience",experience);
    await page.getByTestId("profession-automation").click();
    await page.getByTestId("tool-uft").click();
    await page.getByTestId("continent-asia").click();
    await page.getByTestId("profile-submit").click();

    const outputlog= await page.locator("#submission-output").innerText();
    console.log(outputlog);

});