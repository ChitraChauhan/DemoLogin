import { userConstants } from './userConstants';
import {alertActions} from './alertActions'
import { userService } from '../services/userServices';
import { browserHistory } from 'react-router';

export const login = (email, password) => {
    return dispatch => {
            
            dispatch(request({email, password}));
            userService.login(email, password)
                .then(
                    user => {
                        dispatch(success(user));
                        
                        browserHistory.push('/dashboard');
                        dispatch(alertActions.success('Login successfully done'));
                    },
                    error => {
                        dispatch(failure(error));
                        dispatch(alertActions.error(error));
                    }
                );
        function request(user) {
            return {type: userConstants.LOGIN_REQUEST, user}
        }

        function success(user) {
            return {type: userConstants.LOGIN_SUCCESS, user}
        }

        function failure(error) {
            return {type: userConstants.LOGIN_FAILURE, error}
        }
    };
};

export const  logout= ()=> {
    
    userService.logout();
    return { type: userConstants.LOGOUT };
}

export const register=(user)=> {
    return dispatch => {
        dispatch(request(user));
            
        userService.register(user)
            .then(
                user => {
                    dispatch(success(user));
                    browserHistory.push('/');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

 export const getAll=()=> {
    return dispatch => {
        dispatch(request());
        
        userService.getAll()
            .then(
                users => {
                    dispatch(success(users))
                        dispatch(alertActions.success('Get all users successfully'));
                },
                error => dispatch(failure(error))
            );
    };
    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}
export const getById=(_id)=> {
    return dispatch => {
        dispatch(request(_id));
        
        userService.getById(_id)
            .then(
                user=> {
                    dispatch(success(_id))
                        dispatch(alertActions.success('Get user successfully'));
                },
                error => dispatch(failure(_id, error))
            );
    };
    function request(_id) { return { type: userConstants.GETBYID_REQUEST,_id } }
    function success(_id) { return { type: userConstants.GETBYID_SUCCESS, _id } }
    function failure(_id, error) { return { type: userConstants.GETBYID_FAILURE, _id, error } }
}

export const update=(user)=> {
    return dispatch => {
        dispatch(request(user));
        
        userService.update(user)
            .then(
                user => {
                    dispatch(success(user));
                    browserHistory.push('/dashboard');
                    dispatch(alertActions.success('Update successfully'));
                },
                error => {
                    dispatch(failure(user, error));
                }
            );
    };
    function request(user) { return { type: userConstants.UPDATE_REQUEST, user } }
    function success(user) { return { type: userConstants.UPDATE_SUCCESS, user } }
    function failure(user, error) { return { type: userConstants.UPDATE_FAILURE, user, error } }
}

export const Delete=(_id)=> {
    return dispatch => {
        dispatch(request(_id));
        userService.Delete(_id)
            .then(
                user => {
                    dispatch(success(_id));
                    dispatch(alertActions.success('Delete successfully'));
                },
                error => {
                    dispatch(failure(_id, error));
                }
            );
    };
    function request(_id) { return { type: userConstants.DELETE_REQUEST, _id } }
    function success(_id) { return { type: userConstants.DELETE_SUCCESS, _id } }
    function failure(_id, error) { return { type: userConstants.DELETE_FAILURE, _id, error } }
}
