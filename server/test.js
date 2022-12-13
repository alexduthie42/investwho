 const feeCalculationsService = require('./services/feeCalculationsService')

 // Test 1 Happy Case
const test1AssertionData = 
[
  {
    name: 'Sharesies',
    brokerageFees: '26.00',
    fxFees: '20.80',
    managementFees: '1.56'
  },
  {
    name: 'Hatch',
    brokerageFees: 156,
    fxFees: '26.00',
    managementFees: '1.56'
  },
  {
    name: 'InvestNow',
    brokerageFees: '26.00',
    fxFees: 0,
    managementFees: '1.56'
  }
]

const test1Data = feeCalculationsService.calculateFeeData("weekly", 100);

if (JSON.stringify(test1AssertionData) === JSON.stringify(test1Data))
{
    console.log("Test 1 passed");
}
else {
    console.log("Test 1 failed")
}

 // Test 2
 const test2AssertionData = []

 const test2Data = feeCalculationsService.calculateFeeData(null, 100);

 if (JSON.stringify(test2AssertionData) === JSON.stringify(test2Data))
{
    console.log("Test 2 passed");
}
else {
    console.log("Test 2 failed")
}

 // Test 3
 const test3AssertionData = []

 const test3Data = feeCalculationsService.calculateFeeData("weekly", null);

 if (JSON.stringify(test3AssertionData) === JSON.stringify(test3Data))
{
    console.log("Test 3 passed");
}
else {
    console.log("Test 3 failed")
}


 // Test 4
const test4Amount = 100;

 const test4InvestNowBrokerageFee =  (test4Amount * 52 * 0.005).toFixed(2);

 const test4Data = feeCalculationsService.calculateFeeData("weekly", test4Amount);
 const test4InvestNowFees = test4Data.find((x) => x.name === 'InvestNow')

 if (test4InvestNowBrokerageFee === test4InvestNowFees.brokerageFees)
 {
    console.log("Test 4 passed");
 }
 else
 {
    console.log("Test 4 failed");
 }

 // Test 5
 const test5Amount = 10000;

 const test5InvestNowBrokerageFee =  (test5Amount * 52 * 0.005).toFixed(2);

 const test5Data = feeCalculationsService.calculateFeeData("weekly", test5Amount);
 const test5InvestNowFees = test5Data.find((x) => x.name === 'InvestNow')

 if (test5InvestNowBrokerageFee === test5InvestNowFees.brokerageFees)
 {
    console.log("Test 5 passed");
 }
 else
 {
    console.log("Test 5 failed");
 }

