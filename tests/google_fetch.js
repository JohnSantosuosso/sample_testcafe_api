import { Selector } from 'testcafe';

fixture `Google Search`
.page `https://google.com`;
 
test('Google Search Activity', async t => {

    await t
        // .request('http://www.boredapi.com/api/activity?minprice=0&maxprice=0.1')
        .debug(10000)

    //  const apiUrl = 'http://www.boredapi.com/api/activity?minprice=0&maxprice=0.1';
    //  const fetchPromise = fetch(apiUrl);
    //  console.log(fetchPromise);
    //  const json = await response.json();

    // Make API call and retrieve response

    // // Extract 'activity' value from the JSON response
    // const activityValue = json.activity;

    // Update inputElement value with 'activity' value
    const inputElement = Selector('input[aria-label="Google Search"]');
    await t.typeText(inputElement, activityValue);

    // Submit the form
    const formElement = Selector('form[role="search"]');
    await t.click(formElement);
});
