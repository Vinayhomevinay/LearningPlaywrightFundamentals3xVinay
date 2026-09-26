import {test} from '@playwright/test';

test('test the webtable1',async ({page})=>{

    await page.goto("https://awesomeqa.com/webtable1.html");

    const rows=  page.locator('//table[@border="1"]/tbody/tr');
    const rowscount= await rows.count();
    console.log(rows);

    for (let i=0;i<=rowscount-1;i++)
    {
      const  colsdata= await rows.nth(i).locator('td').allInnerTexts();
       console.log(`Row${i+1}:`,colsdata);

    }
    await page.pause();

});