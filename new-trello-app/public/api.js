/* Calls our Server 
GET - GETS INFORMATION
POST - GIVES Information
PUT - Updates Information
DELETE - Remove 

 */


//when project loads call API async wait* 
// Get to Get Card
window.onload = async function () {
  fetch('/api/cards')
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(JSON.stringify(myJson));
    });
};


//ADD SWIM LANE POST REQUEST

/* Add Swim Lane Post Request */
function postData(url = '', data = {}) {
  // Default options are marked with *
  return fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses JSON response into native Javascript objects 
}