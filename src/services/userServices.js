import { authHeader } from './authHeader';
import {reactLocalStorage} from 'reactjs-localstorage';
import { browserHistory } from 'react-router';

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    Delete,
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };
    
    return fetch('http://localhost:5500/login/data', requestOptions)
        .then(response => {
            console.log(response)
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .catch(error => {
            console.log('error', error)
        })
        .then(user => {
            console.log(user, 'user')
            // login successful if there's a jwt token in the response
                        if (user && user.token) {
                console.log('user-token', user.token)
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        })
}

function logout() {
    // remove user from local storage to log user out
        localStorage.removeItem('user');
    browserHistory.push('/')
}

function register(user) {
    console.log('requestOptions', requestOptions)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
        return fetch('http://localhost:5500/data', requestOptions).then(handleResponse);
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
        return fetch('http://localhost:5500/data', requestOptions).then(handleResponse);
}

function getById(_id) {
    const requestOptions = {
        method: 'GET',
         headers: authHeader()
    };
          return fetch('http://localhost:5500/data/' + _id, requestOptions).then(handleResponse);
}

function update(user) {

    const user1 = reactLocalStorage.getObject('user');
    console.log('username', user1.user.username)
    //console.log('user---', user)
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
        return fetch('http://localhost:5500/data/' + user1.user._id, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function Delete(_id) {
    const requestOptions = {
        method: 'DELETE',
         headers: authHeader()
    };
    return fetch('http://localhost:5500/data/' + _id, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }
    return response.json();
}