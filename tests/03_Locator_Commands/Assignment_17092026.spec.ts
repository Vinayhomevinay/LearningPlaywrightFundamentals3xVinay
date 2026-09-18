import {test,expect} from "@playwright/test";


test("Test the url after wrong login",async ({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    let url_beforedata= page.url();
    console.log(url_beforedata);
    let username= page.locator("//input[@id='email']");
    await username.fill("abc@dfc.com");
    let password= page.locator("//input[@id='password']");
    await password.fill("agshe");
    let checkb1= page.locator("//input[@name='remember']");
    await checkb1.check();

    let clickbutton=page.locator("button[type='submit']");
    await clickbutton.click();

    let url_afterdata= page.url();
    console.log(url_afterdata);

    if (url_beforedata===url_afterdata){
        console.log("URL is same");
        }
       else{
         console.log("URL is Different");   
        } 

});
