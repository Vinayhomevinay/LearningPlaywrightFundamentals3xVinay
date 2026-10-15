import {test} from '@playwright/test';
import userdata from './280_Users.json';

test('test the ddt',async ({page})=>{

    console.log(userdata.username);
    console.log(userdata.password);
});

