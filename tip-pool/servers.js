let serverNameInput = document.getElementById('serverName');
let serverForm = document.getElementById('serverForm');

let serverTbody = document.querySelector('#serverTable tbody');

let allServers = {};
let serverId = 0;

serverForm.addEventListener('submit', submitServerInfo);

function submitServerInfo(evt) {
  if (evt) evt.preventDefault();

  let serverName = serverNameInput.value.trim(); 
  console.log('serverName:', serverName);
  console.log('Object.keys(allServers).length:', Object.keys(allServers).length);
  

  const validNamePattern = /^[A-Za-z\s]+$/;

  if (serverName !== '' && validNamePattern.test(serverName)) {
    const isDuplicate = Object.values(allServers).some(
      (server) => server.serverName === serverName
    );
    if (!isDuplicate) {
      serverId++;
      allServers['server' + serverId] = { serverName };

      updateServerTable();

      serverNameInput.value = '';

    } else {
      alert('Server Name already used. Please insert a new name');
    }
  } else {
    // Invalid name, do nothing (no server should be added)
  }
}

// Create table row element and pass to appendTd function with input value
function updateServerTable() {
  serverTbody.innerHTML = '';

  for (let key in allServers) {
    let curServer = allServers[key];

    let newTr = document.createElement('tr');
    newTr.setAttribute('id', key);

    let tipAverage = sumPaymentTotal('tipAmt') / Object.keys(allServers).length;

    appendTd(newTr, curServer.serverName);
    appendTd(newTr, '$' + tipAverage.toFixed(2));
    appendDeleteBtn(newTr, 'server');

    serverTbody.append(newTr);
  }
}