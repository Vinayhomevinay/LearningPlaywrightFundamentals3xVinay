import{test,expect} from '@playwright/test';
import {readCSV} from  './util/csvReader';
import path from 'path';


test.describe('DDT CSV', ()=>{
    const loginData=readCSV(path.join(__dirname,'/test-data/login-data.csv'));

    test.beforeEach('navigating to the page',async({page})=>{

    });



});
