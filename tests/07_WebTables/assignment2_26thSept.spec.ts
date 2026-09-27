import {test,expect,Page,Locator} from '@playwright/test';

async function findrowname(page:Page,name:string): Promise<Locator>{
    let row;
    while (true){
      row = page.locator('RG5Slk').filter({ hasText: name });

      if (await row.count())
      {
         return row;
      }
      const nextbutton=  page.locator('span:has-text("NEXT")');
      const nextCount = await nextbutton.count();
      
      if (nextCount === 0) {
       //throw new Error("name not found");
       console.log("end of the file")
      }
      
      const itemnames:string[]= await page.locator(".RG5Slk").allInnerTexts();
    //.k7wcnx 
    const itemprice:string[]= await page.locator(".oFEPlD .hZ3P6w.DeU9vF").allInnerTexts();
    
    console.log(itemnames.length);
    console.log(itemprice.length);

    for (const link of itemnames)
    {
    console.log(link);
    }

    for (const linkprice of itemprice)
    {
        console.log(linkprice);
    }





      await  nextbutton.click();    
      await page.waitForTimeout(500);      
    }


}


test('Flipkart Webtable navigation and print the name and price',async ({page})=>{

    const name="SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (...";


    await page.goto("https://www.flipkart.com/");
    await page.locator("//span[@role='button']").click();
    const searchbar= page.getByRole('textbox', { name: 'Search for products, brands and more' });
    await searchbar.fill("DSLR camera");
    await searchbar.press('Enter');
    await expect(page).toHaveURL("https://www.flipkart.com/search?q=DSLR%20camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off");
    await expect(page.locator("//div[@class='lvJbLV col-12-12']").first()).toBeVisible();
    
    const rowLocator = await findrowname(page,name);
    console.log(await rowLocator.innerText());
    
   // const shoppingitems:string[]= await page.locator(".QSCKDh.dLgFEE .lvJbLV.col-12-12").allInnerTexts();
    
    await page.pause();




});