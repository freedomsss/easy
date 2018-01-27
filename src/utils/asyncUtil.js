import 'whatwg-fetch';

export function doPost(url, data, xUserToken) {
	return new Promise(function(resolve, reject) {
		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Access-Control-Request-Method': 'POST',
				'X-User-Token': xUserToken
			},
			body: JSON.stringify(data),
			timeout: 1000000,
		}).then(function(response) {
			return response.json();
		}).then(function(json) {
			resolve(json);
		}).catch(function(err) {
			reject(err.message);
		});
	});
}
export function doPut(url, data, xUserToken) {
	return new Promise(function(resolve, reject) {
		fetch(url, {
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Access-Control-Request-Method': 'PUT',
				'X-User-Token': xUserToken
			},
			body: JSON.stringify(data),
			timeout: 1000000,
		}).then(function(response) {
			return response.json();
		}).then(function(json) {
			resolve(json);
		}).catch(function(err) {
			reject(err.message);
		});
	});
}
// export function doDelete(url, data, xUserToken) {
// 	return new Promise(function(resolve, reject) {
// 		fetch(url, {
// 			method: 'DELETE',
// 			headers: {
// 				'Accept': 'application/json',
// 				'Content-Type': 'application/json',
// 				'Access-Control-Request-Method': 'DELETE',
// 				'X-User-Token': xUserToken
// 			},
// 			body: JSON.stringify(data),
// 			timeout: 1000000,
// 		}).then(function(response) {
// 			return response.json();
// 		}).then(function(json) {
// 			resolve(json);
// 		}).catch(function(err) {
// 			reject(err.message);
// 		});
// 	});
// }

export function doPostForm(url, formData) {
 return AsyncStorage.getItem('token').then((xUserToken) => {
  return new Promise(function(resolve, reject) {
   fetch(url, {
    method: 'POST',
    headers: {
     'Accept': 'application/json',
     'Content-Type': 'multipart/form-data',
     'X-User-Token': xUserToken
    },
    body: formData
   }).then(function(response) {
    return response;
   }).then(function(json) {
    resolve(json);
   }).catch(function(err) {
    reject(err.message);
   });
  });
 });
}
export function doDelete(url, xUserToken) {
	return new Promise(function(resolve, reject) {
		fetch(url, {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Access-Control-Request-Method': 'DELETE',
				'X-User-Token': xUserToken
			}
		}).then(function(response) {
			return response.json();
		}).then(function(json) {
			resolve(json);
		}).catch(function(err) {
			reject(err.message);
		});
	});
}
export function doGet(url, xUserToken) {
	return new Promise(function(resolve, reject) {
		fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Access-Control-Request-Method': 'GET',
				'X-User-Token': xUserToken
			}
		}).then(function(response) {
			return response.json();
		}).then(function(json) {
			resolve(json);
		}).catch(function(err) {
			reject(err.message);
		});
	});
}

export function doGetFile(url, xUserToken) {
	return new Promise(function(resolve, reject) {
		fetch(url, {
			method: 'get',
			headers: {
				'X-User-Token': xUserToken,
				'Access-Control-Request-Method': 'GET'
			}
		}).then(function(response) {
			return response.blob();
		}).then(function(blob) {
			resolve(blob);
		}).catch(function(err) {
			reject(err.message);
		});
	});
}

export function doPostWithoutToken(url, data) {
	return new Promise(function(resolve, reject) {
		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Access-Control-Request-Method': 'POST'
			},
			body: JSON.stringify(data)
		}).then(function(response) {
			return response.json();
		}).then(function(json) {
			resolve(json);
		}).catch(function(err) {
			reject(err.message);
		});
	});
}

export function doGetWithoutToken(url) {
	return new Promise(function(resolve, reject) {
		fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Access-Control-Request-Method': 'GET'
			}
		}).then(function(response) {
			return response.json();
		}).then(function(json) {
			resolve(json);
		}).catch(function(err) {
			reject(err.message);
		});
	});
}

export function verifyOtp(url, payload) {
	return new Promise(function(resolve, reject) {
		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Access-Control-Request-Method': 'POST'
			},
			body: JSON.stringify(payload)
		}).then(function(response) {
			resolve(response);
		}).catch(function(err) {
			reject(err.message);
		});
	});
}

