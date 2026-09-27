import {test} from '@playwright/test';



test('Flipkart Webtable navigation and print the name and price',async ({page})=>{

    await page.goto("https://www.flipkart.com/");

    await page.locator("//span[@role='button']").click();

    const searchbar= page.getByRole('textbox', { name: 'Search for products, brands and more' });
    
    await searchbar.fill("DSLR Camera");
    await searchbar.press('Enter');

    await page.pause();




});