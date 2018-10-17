import T from '../common/js/common';

export const UPDATE_CONTACT_PAGE = 'contact:updateContactPage';
export const UPDATE_CONTACT_IN_PAGE = 'contact:updateContactInPage';

// Reducer -------------------------------------------------------------------------------------------------------------
export default function contactReducer(state = null, data) {
    switch (data.type) {
        case UPDATE_CONTACT_PAGE:
            return Object.assign({}, state, {page: data});

        case UPDATE_CONTACT_IN_PAGE:
            let newState = Object.assign({}, state);
            if (newState.page) {
                for (let i = 0, n = newState.page.list.length; i < n; i++) {
                    if (data.contact._id === newState.page.list[i]._id) {
                        newState.page.list[i] = data.contact;
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
export function updateContactPage(list, pageNumber, pageSize, pageTotal, totalItem) {
    return {type: UPDATE_CONTACT_PAGE, list, pageNumber, pageSize, pageTotal, totalItem}
}

export function updateContactInPage(contact) {
    return {type: UPDATE_CONTACT_IN_PAGE, contact}
}

export function deleteContact(_id, pageNumber, pageSize, done) {
    return dispatch => {
        const url = '/admin/contact';
        T.delete(T.url(url), {data: {_id}}).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({html: 'Delete contact has some errors!'});
                    console.error('DELETE: ' + url + '. ' + res.data.error);
                } else {
                    T.m.toast({html: 'The contact has been deleted!'});
                    dispatch(getContactPage(pageNumber, pageSize));
                }
            } else {
                T.m.toast({html: 'Delete contact has some errors!'});
                console.error('DELETE: ' + url + '.');
            }
            done && done();
        }).catch(error => {
            T.m.toast({html: 'Delete contact has some errors!'});
            console.error('DELETE: ' + url + '.', error);
            done && done();
        });
    };
}

export function deleteAllContacts(pageSize, done) {
    return dispatch => {
        const url = '/admin/contact/all';
        T.delete(T.url(url)).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({html: 'Delete all contacts has some errors!'});
                    console.error('DELETE: ' + url + '. ' + res.data.error);
                } else {
                    T.m.toast({html: 'All contacts has been deleted!'});
                    dispatch(getContactPage(1, pageSize));
                }
            } else {
                T.m.toast({html: 'Delete all contacts has some errors!'});
                console.error('DELETE: ' + url + '.');
            }
            done && done();
        }).catch(error => {
            T.m.toast({html: 'Delete all contacts has some errors!'});
            console.error('DELETE: ' + url + '.', error);
            done && done();
        });
    };
}

export function readContact(_id, read, done) {
    return dispatch => {
        const url = '/admin/contact';
        T.put(T.url(url), {contact: {_id, read}}).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({html: 'Read contact has some errors!'});
                    console.error('GET: ' + url + '. ' + res.data.error);
                } else {
                    dispatch(updateContactInPage(res.data.contact));
                }
            } else {
                T.m.toast({html: 'Read contact has some errors!'});
                console.error('GET: ' + url + '.');
            }
            done && done();
        }).catch(error => {
            T.m.toast({html: 'Read contact has some errors!'});
            console.error('GET: ' + url + '.', error);
            done && done();
        });
    };
}

export function saveContact(contact, pageNumber, pageSize, done) {
    return dispatch => {
        const url = '/admin/contact',
            method = contact._id ? 'put' : 'post';
        T[method](T.url(url), {contact}).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({html: 'Save contact has some errors! ' + res.data.error.message});
                    console.error(method.toUpperCase() + ': ' + url + '.', res.data.error);
                } else {
                    T.m.toast({html: 'Save!'});
                    dispatch(contact._id ? updateContactInPage(res.data.contact) : getContactPage(pageNumber, pageSize));
                }
            } else {
                T.m.toast({html: 'Save contact has some errors!'});
                console.error(method.toUpperCase() + ': ' + url + '.');
            }
            done && done();
        }).catch(error => {
            T.m.toast({html: 'Save contact has some errors!'});
            console.error(method.toUpperCase() + ': ' + url + '.', error);
            done && done();
        });
    };
}

export function getContactPage(pageNumber, pageSize, done) {
    return dispatch => {
        const url = '/admin/contact/page/' + pageNumber + '/' + pageSize;
        T.get(T.url(url)).then(res => {
            if (res && res.data) {
                if (res.data.error || res.data.page == null) {
                    T.m.toast({html: 'Get contact has some errors!'});
                    console.error('GET: ' + url + '. ' + res.data.error);
                    dispatch(updateContactPage([], pageNumber, pageSize, 0, 0));
                } else {
                    let {list, pageNumber, pageSize, totalItem} = res.data.page;
                    dispatch(updateContactPage(list, pageNumber, pageSize, Math.ceil(totalItem / pageSize), totalItem));
                }
            } else {
                T.m.toast({html: 'Get contact has some errors!'});
                console.error('GET: ' + url + '.');
            }
            done && done();
        }).catch(error => {
            T.m.toast({html: 'Get contact has some errors!'});
            console.error('GET: ' + url + '.', error);
            done && done();
        });
    };
}