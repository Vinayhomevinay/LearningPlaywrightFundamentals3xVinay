import {test,expect} from '@playwright/test';


test('test orangehrm web table add and delete',async ({page})=>{

   const name="vinay"; 
   const lastname="kumar";
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

  

   await page.locator('span').filter({ hasText: 'PIM' }).first().click();





await page.pause();



});