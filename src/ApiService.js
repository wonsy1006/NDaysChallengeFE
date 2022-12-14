import axios from 'axios';

const axios = require('axios');
const API_BASE_URL = 'http://localhost:8080/';

export function call(api, method, request) {
  let options = {
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    url: API_BASE_URL + api,
    method: method,
  };

  if (request) {
    // GET method
    options.body = JSON.stringify(request);
  }

  return fetch(options.url, options)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 403) {
        window.location.href = '/login'; // redirect
      } else {
        Promise.reject(response);
        throw Error(response);
      }
    })
    .catch((error) => {
      console.log('http error');
      console.log(error);
    });
}

// export function signIn(userDTO) {
//   return call('/auth/signIn', 'POST', userDTO).then((response) => {
//     console.log('response: ', response);
//     alert('로그인 토큰: ' + response.token);
//   });
// }
