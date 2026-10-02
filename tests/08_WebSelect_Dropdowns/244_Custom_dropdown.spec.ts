import {test} from '@playwright/test';


test('custom dropdowns',async ({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");

    await page.locator("#lang-trigger").click();
    await page.getByRole("option",{ name:"JavaScript" }).click();


    await page.getByTestId("framework-trigger").click();
    await page.getByRole("option",{name:"Svelte"}).click();


    await page.getByTestId("dropdown-experience").click();
    await page.getByRole("option",{name:"Mid-level (4-6 years)"}).click();

    await page.getByTestId("dropdown-save").click();

    const outputval= await page.locator("#dropdown-output").innerText();
    console.log(outputval);

    await page.pause();
});