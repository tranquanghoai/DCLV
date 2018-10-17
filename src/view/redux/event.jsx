import T from '../common/js/common';

export const UPDATE_EVENT_PAGE = 'event:updateEventPage';
export const UPDATE_EVENT_IN_PAGE = 'event:updateEventInPage';

// Reducer -------------------------------------------------------------------------------------------------------------
export default function eventReducer(state = null, data) {
    switch (data.type) {
        case UPDATE_EVENT_PAGE:
            return Object.assign({}, state, { page: data });

        case UPDATE_EVENT_IN_PAGE:
            let newState = Object.assign({}, state);
            if (newState.page) {
                for (let i = 0, n = newState.page.list.length; i < n; i++) {
                    if (data.event._id === newState.page.list[i]._id) {
                        newState.page.list[i] = data.event;
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
export function updateEventPage(list, pageNumber, pageSize, pageTotal, totalItem) {
    return { type: UPDATE_EVENT_PAGE, list, pageNumber, pageSize, pageTotal, totalItem }
}

export function updateEventInPage(event) {
    return { type: UPDATE_EVENT_IN_PAGE, event }
}

export function deleteEvent(_id, pageNumber, pageSize, done) {
    return dispatch => {
        const url = '/admin/event';
        T.delete(T.url(url), { data: { _id } }).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({ html: 'Delete event has some errors!' });
                    console.error('DELETE: ' + url + '. ' + res.data.error);
                } else {
                    T.m.toast({ html: 'The event has been deleted!' });
                    dispatch(getEventPage(pageNumber, pageSize));
                }
            } else {
                T.m.toast({ html: 'Delete event has some errors!' });
                console.error('DELETE: ' + url + '.');
            }
            done && done();
        }).catch(error => {
            T.m.toast({ html: 'Delete event has some errors!' });
            console.error('DELETE: ' + url + '.', error);
            done && done();
        });
    };
}

export function saveEvent(event, pageNumber, pageSize, done) {
    return dispatch => {
        const url = '/admin/event',
            method = event._id ? 'put' : 'post';
        T[method](T.url(url), { event, pageNumber, pageSize }).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({ html: 'Save event has some errors! ' + res.data.error.message });
                    console.error(method.toUpperCase() + ': ' + url + '.', res.data.error);
                } else {
                    T.m.toast({ html: 'Save!' });
                    dispatch(event._id ? updateEventInPage(res.data.event) : getEventPage(pageNumber, pageSize));
                }
            } else {
                T.m.toast({ html: 'Save event has some errors!' });
                console.error(method.toUpperCase() + ': ' + url + '.');
            }
            done && done();
        }).catch(error => {
            T.m.toast({ html: 'Save event has some errors!' });
            console.error(method.toUpperCase() + ': ' + url + '.', error);
            done && done();
        });
    };
}

export function getEventPage(pageNumber, pageSize, done) {
    return dispatch => {
        const url = '/admin/event/page/' + pageNumber + '/' + pageSize;
        T.get(url, res => {
            if (res && res.data) {
                if (res.data.error || res.data.page == null) {
                    T.m.toast({ html: 'Get event has some errors!' });
                    console.error('GET: ' + url + '. ' + res.data.error);
                    dispatch(updateEventPage([], pageNumber, pageSize, 0, 0));
                } else {
                    let { list, pageNumber, pageSize, totalItem } = res.data.page;
                    dispatch(updateEventPage(list, pageNumber, pageSize, Math.ceil(totalItem / pageSize), totalItem));
                }
            } else {
                T.m.toast({ html: 'Get event has some errors!' });
                console.error('GET: ' + url + '.');
            }
            done && done();
        }, error => {
            T.m.toast({ html: 'Get event has some errors!' });
            done && done();
        });
    };
}

export function getEvent(eventId, done) {
    return dispatch => {
        const url = '/admin/event/item/' + eventId;
        T.get(T.url(url)).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({ html: 'Get event has some errors! ' + res.data.error.message });
                    console.error('GET: ' + url + '.', res.data.error);
                } else {
                    // dispatch(updateEventInPage(res.data.item));
                    done && done(res.data.item);
                }
            } else {
                T.m.toast({ html: 'Get event has some errors!' });
                console.error('GET: ' + url + '.');
                done && done(null);
            }
        }).catch(error => {
            T.m.toast({ html: 'Get event has some errors!' });
            console.error('GET: ' + url + '.', error);
            done && done(null);
        });
    };
}

export function updateEventImage(event, data, done) {
    return dispatch => {
        const url = '/admin/image-upload/event/' + event._id;
        T.post(T.url(url), data).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({ html: 'Post image has some errors!' });
                    console.error('Post: ' + url + '. ' + res.data.error);
                } else {
                    dispatch(updateEventInPage(res.data.item));
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

export function updateEventImageContent(event, data, done) {
    return dispatch => {
        const url = '/admin/content/image-upload/event/' + event._id;
        T.post(T.url(url), data).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    console.error('Post: ' + url + ' has some errors! Error: ' + res.data.error);
                } else {
                    done(res.data.img);
                }
            } else {
                console.error('Post data from ' + url + ' has some errors!');
            }
        });
    }
}

export function swapEvent(eventId, isMoveUp, pageNumber, pageSize) {
    return dispatch => {
        const url = '/admin/event/swap/priority';
        T.put(T.url(url), { eventId, isMoveUp }).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({ html: 'Change position has some errors!' });
                    console.error('Put: ' + url + '. ' + res.data.error);
                } else {
                    dispatch(getEventPage(pageNumber, pageSize, () => {
                        T.m.toast({ html: 'Change position successfully!' });
                    }));
                }
            } else {
                T.m.toast({ html: 'Change position has some errors!' });
                console.error('Put: ' + url + '.');
            }
        }).catch(error => {
            T.m.toast({ html: 'Change position has some errors!' });
            console.error('Put: ' + url + '.', error);
        });
    };
}
