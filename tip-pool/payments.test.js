describe("Payments test", function() {
  beforeEach( ()=>{
    billAmtInput.value = 100;
    tipAmtInput.value = 10;
  })

  it('should add new payment', function () {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('100');
    expect(allPayments['payment1'].tipAmt).toEqual('10');
    expect(allPayments['payment1'].tipPercent).toEqual(10);
  });

  it('should not add a new payment with an empty input on Bill Amount', function () {
    billAmtInput.value = '';
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(0);
  });

  it('should update payment table', function () {
    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;

    appendPaymentTable(curPayment);

    let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

    expect(curTdList.length).toEqual(4);
    expect(curTdList[0].innerText).toEqual('$100');
    expect(curTdList[1].innerText).toEqual('$10');
    expect(curTdList[2].innerText).toEqual('%10');
    expect(curTdList[3].innerText).toEqual('X');
  });

  it('should create a new payment', function () {
    let expectedPayment = {
      billAmt: '100',
      tipAmt: '10',
      tipPercent: 10,
    }

    expect(createCurPayment()).toEqual(expectedPayment);
  });
  
  afterEach(() => {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    paymentId = 0;
    allPayments = {};
  });
});