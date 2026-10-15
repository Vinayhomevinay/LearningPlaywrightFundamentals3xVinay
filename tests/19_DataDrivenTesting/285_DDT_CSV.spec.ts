import{test,expect} from '@playwright/test';
import {readCSV} from  './util/csvReader';
import path from 'path';


test.describe('DDT CSV', ()=>{
    const loginData=readCSV(path.join(__dirname,'/test-data/login-data.csv'));

    for (const data of loginData){

   test(`login with csv data ${data.description}`, async ({page})=>{  
        
        await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter")
        await page.locator('#email').fill(data.username);
        await page.locator('#password').fill(data.password);
        await page.getByTestId('login-button').click();

        console.log(data.description);
        await expect(page).toHaveURL(data.expectedURL);
        });

    }





});
