import {test,expect} from '@playwright/test';
import path from 'path';

test.describe('testing in group the multiple files',()=>{

    const url="https://www.patternfly.org/components/file-upload/multiple-file-upload/";

    test.beforeEach('goto url',async({page})=>{
        await page.goto(url);
    });

    test('uploading multiple files',async({page})=>{
        const filepath1=path.join(__dirname,'Screenshot 2024-02-16 152049.png');
        const filepath2=path.join(__dirname,'Screenshot 2024-02-16 153505.png');

        await page.locator("div.pf-v6-c-multiple-file-upload input").setInputFiles([filepath1,filepath2]);
        
        const uploadArea = page.locator('div.pf-v6-c-multiple-file-upload');
        await expect(uploadArea).toContainText('Screenshot 2024-02-16 152049.png');
        await expect(uploadArea).toContainText('Screenshot 2024-02-16 153505.png');
        
      await page.pause();

    });


});