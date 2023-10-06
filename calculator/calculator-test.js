
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 300000, years: 30, rate: 7.8}
  expect(calculateMonthlyPayment(values)).toEqual('2159.61')
});

it("should return a result with 2 decimal places", function() {
  const values = {amount:350000, years: 30, rate: 7.8,};
  expect(calculateMonthlyPayment(values)).toEqual('2519.55');
});
