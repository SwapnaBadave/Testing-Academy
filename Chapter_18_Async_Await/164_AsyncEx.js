async function getTestResult() {
    return "Pass";
}

getTestResult.then(function(result){
    console.log(result)

})

import {test, except} from  '@playwright/test';
test('has title', async ({page})=> {
    await page.goto(" https://playwright.dev/")
    await except(page).toHaveTitle(/playwirght/);

})
