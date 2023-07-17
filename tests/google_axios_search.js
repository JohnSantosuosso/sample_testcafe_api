const { Selector } = require('testcafe');
const axios = require('axios');

// Declare the variable outside the test function
let activity;

fixture`TestCafe Example`
  .page`https://www.google.com`;

test('Make API request before visiting Google.com', async (t) => {
// Make the API request
  const apiResponse = await axios.get('http://www.boredapi.com/api/activity', {
    params: {
      minprice: 0,
      maxprice: 0.1
    }
  });

// Capture the 'activity' from the API response and store it in the variable
  activity = apiResponse.data.activity;

// Log the API response
  console.log('API Response:', apiResponse.data);
  console.log(activity);

// Continue with visiting Google.com
  await t.navigateTo('https://www.google.com');
//   .debugger(10000)

// Update inputElement value with 'activity' value
  const inputElement = Selector('input[aria-label="Google Search"]');
  await t.typeText(inputElement, activity);

// Submit the form
  const formElement = Selector('form[role="search"]');
  await t.click(formElement);

});
