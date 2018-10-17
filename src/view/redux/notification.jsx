import T from '../common/js/common';

export const UPDATE_NOTIFICATION_PAGE = 'notification:updateNotificationPage';
export const UPDATE_NOTIFICATION_IN_PAGE = 'notification:updateNotificationInPage';

// Reducer -------------------------------------------------------------------------------------------------------------
export default function notificationReducer(state = null, data) {
    switch (data.type) {
        case UPDATE_NOTIFICATION_PAGE:
            return Object.assign({}, state, {page: data});

        case UPDATE_NOTIFICATION_IN_PAGE:
            let newState = Object.assign({}, state);
            if (newState.page) {
                for (let i = 0, n = newState.page.list.length; i < n; i++) {
                    if (data.notification._id === newState.page.list[i]._id) {
                        newState.page.list[i] = data.notification;
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
export function updateNotificationPage(list, pageNumber, pageSize, pageTotal, totalItem) {
    return {type: UPDATE_NOTIFICATION_PAGE, list, pageNumber, pageSize, pageTotal, totalItem}
}

export function updateNotificationInPage(notification) {
    return {type: UPDATE_NOTIFICATION_IN_PAGE, notification}
}

export function deleteNotification(_id, pageNumber, pageSize, done) {
    return dispatch => {
        const url = '/admin/notification';
        T.delete(T.url(url), {data: {_id}}).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({html: 'Delete notification has some errors!'});
                    console.error('DELETE: ' + url + '. ' + res.data.error);
                } else {
                    T.m.toast({html: 'The notification has been deleted!'});
                    dispatch(getNotificationPage(pageNumber, pageSize));
                }
            } else {
                T.m.toast({html: 'Delete notification has some errors!'});
                console.error('DELETE: ' + url + '.');
            }
            done && done();
        }).catch(error => {
            T.m.toast({html: 'Delete notification has some errors!'});
            console.error('DELETE: ' + url + '.', error);
            done && done();
        });
    };
}

export function deleteAllNotifications(pageSize, done) {
    return dispatch => {
        const url = '/admin/notification/all';
        T.delete(T.url(url)).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({html: 'Delete all notifications has some errors!'});
                    console.error('DELETE: ' + url + '. ' + res.data.error);
                } else {
                    T.m.toast({html: 'All notifications has been deleted!'});
                    dispatch(getNotificationPage(1, pageSize));
                }
            } else {
                T.m.toast({html: 'Delete all notifications has some errors!'});
                console.error('DELETE: ' + url + '.');
            }
            done && done();
        }).catch(error => {
            T.m.toast({html: 'Delete all notifications has some errors!'});
            console.error('DELETE: ' + url + '.', error);
            done && done();
        });
    };
}

export function saveNotification(notification, pageNumber, pageSize, done) {
    return dispatch => {
        const url = '/admin/notification';
        T.post(T.url(url), {notification, pageNumber, pageSize}).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({html: 'Save notification has some errors! ' + res.data.error.message});
                    console.error('POST: ' + url + '.', res.data.error);
                } else {
                    T.m.toast({html: 'Save!'});
                    dispatch(notification._id ? updateNotificationInPage(res.data.notification) : getNotificationPage(pageNumber, pageSize));
                }
            } else {
                T.m.toast({html: 'Save notification has some errors!'});
                console.error('POST: ' + url + '.');
            }
            done && done();
        }).catch(error => {
            T.m.toast({html: 'Save notification has some errors!'});
            console.error('POST: ' + url + '.', error);
            done && done();
        });
    };
}

export function getNotificationPage(pageNumber, pageSize, done) {
    return dispatch => {
        const url = '/admin/notification/page/' + pageNumber + '/' + pageSize;
        T.get(T.url(url)).then(res => {
            if (res && res.data) {
                if (res.data.error || res.data.page == null) {
                    T.m.toast({html: 'Get notification has some errors!'});
                    console.error('GET: ' + url + '. ' + res.data.error);
                    dispatch(updateNotificationPage([], pageNumber, pageSize, 0, 0));
                } else {
                    let {list, pageNumber, pageSize, totalItem} = res.data.page;
                    dispatch(updateNotificationPage(list, pageNumber, pageSize, Math.ceil(totalItem / pageSize), totalItem));
                }
            } else {
                T.m.toast({html: 'Get notification has some errors!'});
                console.error('GET: ' + url + '.');
            }
            done && done();
        }).catch(error => {
            T.m.toast({html: 'Get notification has some errors!'});
            console.error('GET: ' + url + '.', error);
            done && done();
        });
    };
}