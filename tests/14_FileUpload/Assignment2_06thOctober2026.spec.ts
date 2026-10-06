import {test} from '@playwright/test';
import path from 'path';

const UPLOAD_DIR = "C:\\Users\\DVBV5335\\Downloads";



test("uploading image to profile",async({page})=>{

    await page.goto("https://app.thetestingacademy.com/login");
    const  filepath=path.join(UPLOAD_DIR,"Vinay80s.png")
    console.log(filepath);
   await  page.getByRole('textbox', { name: 'Email address' }).fill("vinayautomation2912@gmail.com");
   await page.getByRole('button', { name: 'Continue', exact: true }).click();

    await page.pause();
    await page.getByRole('button', { name: 'Dismiss' }).click();
   await  page.getByRole('link', { name: 'Settings' }).click();

   await page.locator("div.flex.flex-col.items-center.space-y-2 input").setInputFiles([filepath]);

   
    await page.getByRole('button', { name: 'Save Changes' }).click();

    await page.pause();
});