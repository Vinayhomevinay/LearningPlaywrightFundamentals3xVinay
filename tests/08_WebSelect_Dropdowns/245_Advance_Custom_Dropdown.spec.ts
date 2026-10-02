import {test,expect} from '@playwright/test';

test('test advance dropdowns',async ({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");

    //Single :Searchable
    await page.getByTestId("rs-single").click();
    await page.getByRole("option",{name : "Playwright" }).click();
    //Multi:Chips
    await page.locator("#rs-multi").click();
    await page.getByText("Pytest",{exact:true}).click();
    await page.getByText("JUnit",{exact:true}).click();
    await page.keyboard.press("Escape");

    // ③ Creatable multi — type and Enter
    await page.getByTestId("rs-creatable-input").click();
    await page.getByRole("option", {name:"performance" }).click();
    await page.getByRole("option", {name:"api-testing" }).click();
    await page.keyboard.press("Escape");
    
    //④ Grouped — categorised options
    await page.getByTestId("rs-grouped-input").click(); 
    await page.getByText("GCP",{exact:true}).click();
    await page.keyboard.press("Escape");

   // ⑤ Async — fetched on type
   await page.locator("#rs-async").click();
   await page.getByTestId("rs-async-input").fill("De");
  // await expect(page.getByTestId("rs-async-menu")).toContainText('Delhi') ;
   await expect(page.getByTestId('rs-async-menu')).toContainText('Delhi');
   await page.getByText("Delhi",{exact:true}).click();

   let outputvalue= await page.locator("#select-output").innerText();
   console.log(outputvalue);



    await page.pause(); 
});