describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    serverNameInput.value = 'Batchi';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Batchi');
  });

  it('should not add a new server with an empty input', function () {
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update server table', function () {
    submitServerInfo();
    updateServerTable();
    let curTdList = document.querySelectorAll('#serverTable tbody tr td');
    expect(curTdList.length).toEqual(3);
    expect(curTdList[0].innerText).toEqual('Batchi');
    expect(curTdList[1].innerText).toEqual('$0.00');
    expect(curTdList[2].innerText).toEqual('X');
  });
  
  it('should not add a server with an invalid name', function () {
    // Test cases with invalid server names
    serverNameInput.value = '$$$'; // Invalid characters
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  
    serverNameInput.value = 'VeryLongServerNameThatExceedsTheLimit'; // Exceeds character limit
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
  });

  afterEach(function() {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});