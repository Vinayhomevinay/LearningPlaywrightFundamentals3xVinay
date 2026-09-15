import {test,expect} from '@playwright/test';
test('test katalon login',async ({page})=>{
    
    await page.goto('https://katalon-demo-cura.herokuapp.com/', { waitUntil: 'domcontentloaded' });  
    let appointmentlink= page.locator("#btn-make-appointment");
    await appointmentlink.click();
    let username=page.locator("#txt-username");
    await username.fill ("John Doe");
    let password=page.locator("#txt-password");
    await password.fill("ThisIsNotAPassword");
    let loginbutton=page.locator("#btn-login");
    await loginbutton.click();
    let verifymessage=page.locator("h2");
    await expect(verifymessage).toContainText("Make Appointment");



});