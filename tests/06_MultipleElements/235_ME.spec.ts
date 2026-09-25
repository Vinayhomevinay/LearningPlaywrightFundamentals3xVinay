import {test,expect} from '@playwright/test';


test('Basic verify how to handle multiple elements',async ({page})=>{

await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

const rightPanelLinksTexts: string[]= await page.locator('a.list-group-item').allInnerTexts();
console.log(rightPanelLinksTexts.length);

for (const link of rightPanelLinksTexts )
{
    console.log(link);

}

for (const linktext of rightPanelLinksTexts)
{
    if (linktext ==="Forgotten Password")
    {
        await page.getByText(linktext).first().click();
    }

}
await page.pause();

});
