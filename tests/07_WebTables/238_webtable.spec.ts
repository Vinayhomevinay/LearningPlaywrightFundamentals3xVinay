import {test,expect} from '@playwright/test';


test ('verify the Webtable example1', async ({page})=>{

    await page.goto("https://awesomeqa.com/webtable.html");
    ////table[@id='customers']/tbody/tr
    const firstpart = "//table[@id='customers']/tbody/tr[";
    const secondpart = "]/td[";
    const thirdpart = "]";

    const rowscount=await page.locator("//table[@id='customers']/tbody/tr").count();
    const colscount= await page.locator("//table[@id='customers']/tbody/tr/th").count();
 

    for (let i=2;i<=rowscount;i++)
    {
      for (let j=1;j<=colscount;j++)
        {

          const dynamicxpath=`${firstpart}${i}${secondpart}${j}${thirdpart}`;
           const data= await page.locator(dynamicxpath).innerText();
          // console.log(data)   ;            

          if (data.includes("Helen Bennett"))
          {
            const countrypath=dynamicxpath+"/following-sibling::td";
             const data1= await page.locator(countrypath).innerText();
              console.log(data1);
          }


        }   

    } 

    


    await page.pause();

});