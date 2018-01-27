import 'whatwg-fetch';

export function doPost(url, data, xUserToken, successHandler, failHandler) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-User-Token': xUserToken
    },
    body: JSON.stringify(data)
  }).then(function(response) {
    return response.json();
  }).then(function(json) {
    successHandler(json);
  }).catch(function(err) {
    failHandler(err.message);
  });
}

export function doPostWithoutToken(url, data, successHandler, failHandler) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(function(response) {
    return response.json();
  }).then(function(json) {
    successHandler(json);
  }).catch(function(err) {
    failHandler(err.message);
  });
}