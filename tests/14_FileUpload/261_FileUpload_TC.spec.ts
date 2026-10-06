import {test,expect} from '@playwright/test';
import path from 'path';


test.describe('Upload File',()=>{

    const url="https://app.thetestingacademy.com/playwright/widgets/upload-download";
    test.beforeEach('url goto',async ({page})=>{
        await page.goto(url);
        

    });

    test('uploading single file',async({page})=>{

        const filepath=path.join(__dirname,'testdata.txt');
        console.log(filepath);

        await page.locator("#single-upload").setInputFiles([filepath]);
    
        await expect(page.getByTestId("single-preview")).toContainText("testdata.txt");

        
        await page.pause();


    });


});