import T from '../common/js/common';

export const UPDATE_JOBHUB_PAGE = 'jobHub:updateJobHubPage';
export const UPDATE_JOBHUB_IN_PAGE = 'jobHub:updateJobHubInPage';

// Reducer -------------------------------------------------------------------------------------------------------------
export default function jobHubReducer(state = null, data) {
    switch (data.type) {
        case UPDATE_JOBHUB_PAGE:
            return Object.assign({}, state, {page: data});

        case UPDATE_JOBHUB_IN_PAGE:
            let newState = Object.assign({}, state);
            if (newState.page) {
                for (let i = 0, n = newState.page.list.length; i < n; i++) {
                    if (data.jobHub._id === newState.page.list[i]._id) {
                        newState.page.list[i] = data.jobHub;
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
export function updateJobHubPage(list, pageNumber, pageSize, pageTotal, totalItem) {
    return {type: UPDATE_JOBHUB_PAGE, list, pageNumber, pageSize, pageTotal, totalItem}
}

export function updateJobHubInPage(jobHub) {
    return {type: UPDATE_JOBHUB_IN_PAGE, jobHub}
}

export function deleteJobHub(_id, pageNumber, pageSize, done) {
    return dispatch => {
        const url = '/admin/jobhub';
        T.delete(T.url(url), {data: {_id}}).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({html: 'Delete job hub has some errors!'});
                    console.error('DELETE: ' + url + '. ' + res.data.error);
                } else {
                    T.m.toast({html: 'The job hub has been deleted!'});
                    dispatch(getJobHubPage(pageNumber, pageSize));
                }
            } else {
                T.m.toast({html: 'Delete job hub has some errors!'});
                console.error('DELETE: ' + url + '.');
            }
            done && done();
        }).catch(error => {
            T.m.toast({html: 'Delete job hub has some errors!'});
            console.error('DELETE: ' + url + '.', error);
            done && done();
        });
    };
}

export function saveJobHub(jobHub, pageNumber, pageSize, done) {
    return dispatch => {
        const url = '/admin/jobhub',
            method = jobHub._id ? 'put' : 'post';
        T[method](T.url(url), {jobHub, pageNumber, pageSize}).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({html: 'Save job hub has some errors! ' + res.data.error.message});
                    console.error(method.toUpperCase() + ': ' + url + '.', res.data.error);
                } else {
                    T.m.toast({html: 'Save!'});
                    dispatch(jobHub._id ? updateJobHubInPage(res.data.jobHub) : getJobHubPage(pageNumber, pageSize));
                }
            } else {
                T.m.toast({html: 'Save job hub has some errors!'});
                console.error(method.toUpperCase() + ': ' + url + '.');
            }
            done && done();
        }).catch(error => {
            T.m.toast({html: 'Save job hub has some errors!'});
            console.error(method.toUpperCase() + ': ' + url + '.', error);
            done && done();
        });
    };
}

export function getJobHubPage(pageNumber, pageSize, done) {
    return dispatch => {
        const url = '/admin/jobhub/page/' + pageNumber + '/' + pageSize;
        T.get(T.url(url)).then(res => {
            if (res && res.data) {
                if (res.data.error || res.data.page == null) {
                    T.m.toast({html: 'Get jobs has some errors!'});
                    console.error('GET: ' + url + '. ' + res.data.error);
                    dispatch(updateJobHubPage([], pageNumber, pageSize, 0, 0));
                } else {
                    let {list, pageNumber, pageSize, totalItem} = res.data.page;
                    dispatch(updateJobHubPage(list, pageNumber, pageSize, Math.ceil(totalItem / pageSize), totalItem));
                }
            } else {
                T.m.toast({html: 'Get jobs has some errors!'});
                console.error('GET: ' + url + '.');
            }
            done && done();
        }).catch(error => {
            T.m.toast({html: 'Get jobs has some errors!'});
            console.error('GET: ' + url + '.', error);
            done && done();
        });
    };
}

export function getJobHub(jobHubId, done) {
    return dispatch => {
        const url = '/admin/jobhub/item/' + jobHubId;
        T.get(T.url(url)).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({html: 'Get job hub has some errors! ' + res.data.error.message});
                    console.error('GET: ' + url + '.', res.data.error);
                } else {
                    // dispatch(updateJobHubInPage(res.data.item));
                    done && done(res.data.item);
                }
            } else {
                T.m.toast({html: 'Get job hub has some errors!'});
                console.error('GET: ' + url + '.');
                done && done(null);
            }
        }).catch(error => {
            T.m.toast({html: 'Get job hub has some errors!'});
            console.error('GET: ' + url + '.', error);
            done && done(null);
        });
    };
}

export function updateJobHubImage(jobHub, data, done) {
    return dispatch => {
        const url = '/admin/image-upload/jobHub/' + jobHub._id;
        T.post(T.url(url), data).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({html: 'Post image has some errors!'});
                    console.error('Post: ' + url + '. ' + res.data.error);
                } else {
                    dispatch(updateJobHubInPage(res.data.item));
                    done && done(res.data.item.image);
                }
            } else {
                T.m.toast({html: 'Post image has some errors!'});
                console.error('GET: ' + url + '.');
            }
        }).catch(error => {
            T.m.toast({html: 'Post image has some errors!'});
            console.error('Post: ' + url + '.', error);
            done && done();
        });
    };
}

export function updateJobHubImageContent(jobHub, data, done) {
    return dispatch => {
        const url = '/admin/content/image-upload/jobhub/' + jobHub._id;
        T.post(T.url(url), data).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    console.error('Post: ' + url + ' has some errors! Error: ' + res.data.error);
                } else {
                    done(res.data.img);
                }
            } else {
                T.m.toast({html: 'Update image content has some errors!'});
                console.error('Post: ' + url + ' has some errors!');
            }
        }).catch(error => {
            T.m.toast({html: 'Update image content has some errors!'});
            console.error('Put: ' + url + '.', error);
        });
    }
}

export function swapJobHub(jobHubId, isMoveUp, pageNumber, pageSize) {
    return dispatch => {
        const url = '/admin/jobhub/swap/priority';
        T.put(T.url(url), {jobHubId, isMoveUp}).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({html: 'Change position has some errors!'});
                    console.error('Put: ' + url + '. ' + res.data.error);
                } else {
                    dispatch(getJobHubPage(pageNumber, pageSize, () => {
                        T.m.toast({html: 'Change position successfully!'});
                    }));
                }
            } else {
                T.m.toast({html: 'Change position has some errors!'});
                console.error('Put: ' + url + '.');
            }
        }).catch(error => {
            T.m.toast({html: 'Change position has some errors!'});
            console.error('Put: ' + url + '.', error);
        });
    };
}
