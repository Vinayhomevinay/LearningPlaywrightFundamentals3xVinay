import {test} from '@playwright/test';


test('Check JS Alert', async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.once('dialog', async dialog=>{
        
        console.log('Alert type:', dialog.type());
        console.log('Alert Message',dialog.message);
        expect(dialog.message()).tobe("I am a JS Alert");
        
        await dialog.accept();
        

    });
    
    await page.pause();

});