import {test} from '@playwright/test';


test('assignment 24thSept',async({page})=>{

  await page.goto("https://app.thetestingacademy.com/playwright/webtable");

    const rows= page.locator("//table[@aria-label='Employee Management System table']/tbody/tr");
    const cols= page.locator("//table[@aria-label='Employee Management System table']/tbody/tr[1]/td");
    const rowscount=await rows.count();
    const rowsdata= await rows.allInnerTexts();
    const colscount= await cols.count();
    const firspart="//table[@aria-label='Employee Management System table']/tbody/tr["
    const secondpart="]/td[";
    const thirdpart="]";
   // console.log(rowscount);
   // console.log(rowsdata);

    for ( let i=1;i<=rowscount;i++)
    {
       //const colsdata= await rows.nth(i).locator('td').allInnerTexts();
        //console.log(colsdata);
      // const rohanmehradatahardcoded= await page.locator("//table[@aria-label='Employee Management System table']/tbody/tr[3]/td[2]").
      for (let j=1;j<=colscount;j++)  
      {
          const dynamicxpath=`${firspart}${i}${secondpart}${j}${thirdpart}`;
          const  dynamicxpathcontent=await page.locator(dynamicxpath).innerText();
          if (dynamicxpathcontent.includes('Rohan.Mehta'))
          {
            const precedingxpath=`${dynamicxpath}/preceding-sibling::td/input`;
            await page.locator(precedingxpath).check();



            
            
          }



      }

    }


await page.pause();

});