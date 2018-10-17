// import T from '../common/js/common';

export const UPDATE_LOGIN_USER = 'user:updateLoginUser';
export const UPDATE_USER_PAGE = 'user:updateUserPage';
export const UPDATE_USER_IN_PAGE = 'user:updateUserInPage';

// Reducer -------------------------------------------------------------------------------------------------------------
export default function userReducer(state = null, data) {
    switch (data.type) {
        case UPDATE_LOGIN_USER:
            return Object.assign({}, state, { loginUser: data.loginUser });

        case UPDATE_USER_PAGE:
            return Object.assign({}, state, { page: data });

        case UPDATE_USER_IN_PAGE:
            let newState = Object.assign({}, state);
            if (newState.page) {
                for (let i = 0, n = newState.page.list.length; i < n; i++) {
                    if (data.user._id === newState.page.list[i]._id) {
                        newState.page.list[i] = data.user;
                        break;
                    }
                }
            }
            return newState;

        default:
            return state;
    }
}

// Actions -------------------------------------------------------------------------------------------------------------
export function updateLoginUser(user) {
    console.log(user != null ? 'Login ' + user.email + ' as ' + user.role + '.' : 'Logout!');
    return { type: UPDATE_LOGIN_USER, loginUser: user }
}

export function updateUserPage(list, pageNumber, pageSize, pageTotal, totalItem) {
    T.setPageInfo('User', pageNumber, pageSize);
    return { type: UPDATE_USER_PAGE, list, pageNumber, pageSize, pageTotal, totalItem }
}

export function updateUserInPage(user) {
    return { type: UPDATE_USER_IN_PAGE, user }
}

export function getLoginUser(done) {
    return dispatch => {
        const url = '/login-user';
        T.get(T.url(url)).then(res => {
            dispatch(updateLoginUser(res.data.user));
            done && done();
        }).catch(error => {
            T.m.toast({ html: 'Get current user has some errors!' });
            console.error('GET: ' + url + '.', error);
            done && done();
        });
    };
}

export function loginUser(email, password, done) {
    return dispatch => {
        const url = '/login';
        T.post(T.url(url), { email, password }).then(res => {
            if (res.data.user) {
                dispatch(updateLoginUser(res.data.user));
            }
            done && done(res.data.error);
        }).catch(error => {
            T.m.toast({ html: 'Login has some errors!' });
            console.error('POST: ' + url + '.', error);
            done && done(null);
        });
    };
}

export function logoutUser(done) {
    return dispatch => {
        const url = '/logout';
        T.get(T.url(url)).then(res => {
            dispatch(updateLoginUser(null));
            done && done();
        }).catch(error => {
            T.m.toast({ html: 'Logout has some errors!' });
            console.error('GET: ' + url + '.', error);
            done && done();
        });
    };
}

export function deleteUser(_id, pageNumber, pageSize, done) {
    return dispatch => {
        const url = '/admin/user';
        T.delete(T.url(url), { data: { _id } }).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({ html: 'Delete user has some errors!' });
                    console.error('DELETE: ' + url + '. ' + res.data.error);
                } else {
                    T.m.toast({ html: 'The user has been deleted!' });
                    dispatch(getUserPage(pageNumber, pageSize));
                }
            } else {
                T.m.toast({ html: 'Delete user has some errors!' });
                console.error('DELETE: ' + url + '.');
            }
            done && done();
        }).catch(error => {
            T.m.toast({ html: 'Delete user has some errors!' });
            console.error('DELETE: ' + url + '.', error);
            done && done();
        });
    }
}

export function changePasswordUser(_id, password, done) {
    return dispatch => {
        const url = '/admin/user';
        T.put(T.url(url), { user: { _id, password } }).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({ html: 'Change user password has some errors!' });
                    console.error('PUT: ' + url + '. ' + res.data.error);
                } else {
                    T.m.toast({ html: 'The user password has been updated!' });
                }
            } else {
                T.m.toast({ html: 'Change user password has some errors!' });
                console.error('PUT: ' + url + '.');
            }
            done && done();
        }).catch(error => {
            T.m.toast({ html: 'Change user password has some errors!' });
            console.error('PUT: ' + url + '.', error);
            done && done();
        });
    };
}

export function saveUser(user, pageNumber, pageSize, done) {
    return dispatch => {
        const url = '/admin/user',
            method = user._id ? 'put' : 'post';
        T[method](T.url(url), { user }).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({ html: 'Save user has some errors! ' + res.data.error.message });
                    console.error(method.toUpperCase() + ': ' + url + '.', res.data.error);
                } else {
                    T.m.toast({ html: 'Save!' });
                    dispatch(user._id ? updateUserInPage(res.data.user) : getUserPage(pageNumber, pageSize));
                }
            } else {
                T.m.toast({ html: 'Save user has some errors!' });
                console.error(method.toUpperCase() + ': ' + url + '.');
            }
            done && done();
        }).catch(error => {
            T.m.toast({ html: 'Save user has some errors!' });
            console.error(method.toUpperCase() + ': ' + url + '.', error);
            done && done();
        });
    }
}

export function getUserPage(pageNumber, pageSize, done) {
    return dispatch => {
        const url = '/admin/user/page/' + pageNumber + '/' + pageSize;
        T.get(T.url(url)).then(res => {
            if (res && res.data) {
                if (res.data.error || res.data.page == null) {
                    T.m.toast({ html: 'Get users has some errors!' });
                    console.error('GET: ' + url + '. ' + res.data.error);
                    dispatch(updateUserPage([], pageNumber, pageSize, 0, 0));
                } else {
                    let { list, pageNumber, pageSize, totalItem } = res.data.page;
                    dispatch(updateUserPage(list, pageNumber, pageSize, Math.ceil(totalItem / pageSize), totalItem));
                }
            } else {
                T.m.toast({ html: 'Get users has some errors!' });
                console.error('GET: ' + url + '.');
            }
            done && done();
        }).catch(error => {
            T.m.toast({ html: 'Get users has some errors!' });
            console.error('GET: ' + url + '.', error);
            done && done();
        });
    }
}

export function updateUserImage(user, data, done) {
    return dispatch => {
        const url = '/admin/image-upload/user/' + user._id;
        T.post(T.url(url), data).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({ html: 'Post image has some errors!' });
                    console.error('Post: ' + url + '. ' + res.data.error);
                } else {
                    dispatch(updateUserInPage(res.data.item));
                    done && done(res.data.item.image);
                }
            } else {
                T.m.toast({ html: 'Post image has some errors!' });
                console.error('GET: ' + url + '.');
            }
        }).catch(error => {
            T.m.toast({ html: 'Post image has some errors!' });
            console.error('Post: ' + url + '.', error);
            done && done();
        });
    };
}