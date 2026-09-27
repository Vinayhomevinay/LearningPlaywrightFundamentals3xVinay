import {test,expect} from '@playwright/test';


test('test orangehrm web table add and delete',async ({page})=>{

   const name="Amod"; 
   const lastname="Pandey";
   const totalname= name +" "+lastname;
   await page.goto(' https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   
   await page.locator("//input[@name='username']").fill("Admin");
   await page.locator("//input[@name='password']").fill("admin123");
   await page.locator('//button[@type="submit"]').click();
   await page.locator("//span[normalize-space()='PIM']").click();
   await page.getByRole('button', { name: 'Add' }).click();
   await page.getByRole('textbox', { name: 'First Name' }).fill(name);
   await page.getByRole('textbox', { name: 'Last Name' }).fill(lastname);
   await page.getByRole('button', { name: 'Save' }).click();
   await page.getByRole('heading', { name: 'Personal Details' }).isVisible();
   //await page.waitForTimeout(15000);
   const val1=await page.getByRole('heading', { name: totalname }).innerText();
   //console.log(val1);
   expect(val1).toBe('Amod Pandey');
   await page.locator('span').filter({ hasText: 'PIM' }).first().click();
   let attempts = 0;
   
   await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList");
   await expect(page.locator("div.oxd-table-card").first()).toBeVisible();
   
   
   let row;
    while (true){
      row = page.locator('//div[@class="oxd-table-body"]/div').filter({ hasText: name });

      if (await row.count())
      {
         break;
      }
     //await page.waitForTimeout(10000);

      const nextbutton= page.locator("//ul[@class='oxd-pagination__ul']//li[last()]//button")
      const nextCount = await nextbutton.count();

      console.log(`Attempt ${attempts}: nextCount = ${nextCount}`);
      
      if (nextCount === 0) {
       throw new Error("name not found");
      }
    
      await  nextbutton.click();
      
      await page.waitForTimeout(500);
      
      attempts++;

    }


   // await row.locator("/div/div[9]/div/button[2]").click();
     await row.locator("button i.bi-trash").click();
     await page.getByRole('button', { name: ' Yes, Delete' }).click();

await page.pause();



});