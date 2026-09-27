import {test,expect} from '@playwright/test';



test('Flipkart Webtable navigation and print the name and price',async ({page})=>{

    await page.goto("https://www.flipkart.com/");
    await page.locator("//span[@role='button']").click();
    const searchbar= page.getByRole('textbox', { name: 'Search for products, brands and more' });
    await searchbar.fill("DSLR camera");
    await searchbar.press('Enter');
    await expect(page).toHaveURL("https://www.flipkart.com/search?q=DSLR%20camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off");
    await expect(page.locator("//div[@class='lvJbLV col-12-12']").first()).toBeVisible();
   
    
   // const shoppingitems:string[]= await page.locator(".QSCKDh.dLgFEE .lvJbLV.col-12-12").allInnerTexts();
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


    await page.pause();




});