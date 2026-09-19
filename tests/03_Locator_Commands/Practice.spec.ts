import {test,expect} from "@playwright/test";

test("Test the xpath functions using wingify",async ({page})=>{

    await page.goto("https://wingify.com/free-trial/");

    await page.locator("//input[@class='WInput']").fill ("abcd");

    await page.locator("#free-trial-step1-gdpr-consent-checkboxcu-marketing-consent-checkbox").click();
    await page.locator("#free-trial-step1-gdpr-consent-checkboxcu-gdpr-consent-checkbox").check();
    await page.locator("//span[@class='WButton-text']").first().click();
    let error_message= await page.locator("//div[contains(@class,'invalid-reason')]").first().textContent();

    expect(error_message).toContain("The email address you entered is incorrect.");

    await page.pause();



});