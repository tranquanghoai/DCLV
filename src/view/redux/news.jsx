import T from '../common/js/common';

export const UPDATE_NEWS_PAGE = 'news:updateNewsPage';
export const UPDATE_CATEGORY = 'news:updateCategory';
export const UPDATE_NEWS_IN_PAGE = 'news:updateNewsInPage';

// Reducer -------------------------------------------------------------------------------------------------------------
export default function newsReducer(state = null, data) {
    switch (data.type) {
        case UPDATE_NEWS_PAGE:
            return Object.assign({}, state, {page: data});
        case UPDATE_CATEGORY:
            return Object.assign({}, state, {category: data.category});
        case UPDATE_NEWS_IN_PAGE:
            let newState = Object.assign({}, state);
            if (newState.page) {
                for (let i = 0, n = newState.page.list.length; i < n; i++) {
                    if (data.news._id === newState.page.list[i]._id) {
                        newState.page.list[i] = data.news;
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
export function updateNewsPage(list, pageNumber, pageSize, pageTotal, totalItem) {
    return {type: UPDATE_NEWS_PAGE, list, pageNumber, pageSize, pageTotal, totalItem}
}

export function updateCategory(listCategory) {
    return {type: UPDATE_CATEGORY, category: listCategory}
}


export function updateNewsInPage(news) {
    return {type: UPDATE_NEWS_IN_PAGE, news}
}

export function deleteNews(_id, pageNumber, pageSize, done) {
    return dispatch => {
        const url = '/admin/news';
        T.delete(T.url(url), {data: {_id}}).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({html: 'Delete news has some errors!'});
                    console.error('DELETE: ' + url + '. ' + res.data.error);
                } else {
                    T.m.toast({html: 'The news has been deleted!'});
                    dispatch(getNewsPage(pageNumber, pageSize));
                }
            } else {
                T.m.toast({html: 'Delete news has some errors!'});
                console.error('DELETE: ' + url + '.');
            }
            done && done();
        }).catch(error => {
            T.m.toast({html: 'Delete news has some errors!'});
            console.error('DELETE: ' + url + '.', error);
            done && done();
        });
    };
}

export function saveNews(news, pageNumber, pageSize, done) {
    return dispatch => {
        const url = '/admin/news',
            method = news._id ? 'put' : 'post';
        T[method](T.url(url), {news, pageNumber, pageSize}).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({html: 'Save news has some errors! ' + res.data.error.message});
                    console.error(method.toUpperCase() + ': ' + url + '.', res.data.error);
                } else {
                    T.m.toast({html: 'Save!'});
                    dispatch(news._id ? updateNewsInPage(res.data.news) : getNewsPage(pageNumber, pageSize));
                }
            } else {
                T.m.toast({html: 'Save news has some errors!'});
                console.error(method.toUpperCase() + ': ' + url + '.');
            }
            done && done();
        }).catch(error => {
            T.m.toast({html: 'Save news has some errors!'});
            console.error(method.toUpperCase() + ': ' + url + '.', error);
            done && done();
        });
    };
}

export function getNewsPage(pageNumber, pageSize, done) {
    return dispatch => {
        const url = '/admin/news/page/' + pageNumber + '/' + pageSize;
        T.get(T.url(url)).then(res => {
            if (res && res.data) {
                if (res.data.error || res.data.page == null) {
                    T.m.toast({html: 'Get news has some errors!'});
                    console.error('GET: ' + url + '. ' + res.data.error);
                    dispatch(updateNewsPage([], pageNumber, pageSize, 0, 0));
                } else {
                    let {list, pageNumber, pageSize, totalItem} = res.data.page;
                    dispatch(updateNewsPage(list, pageNumber, pageSize, Math.ceil(totalItem / pageSize), totalItem));
                }
            } else {
                T.m.toast({html: 'Get news has some errors!'});
                console.error('GET: ' + url + '.');
            }
            done && done();
        }).catch(error => {
            T.m.toast({html: 'Get news has some errors!'});
            console.error('GET: ' + url + '.', error);
            done && done();
        });
    };
}

export function getCategory(done) {
    return dispatch => {
        const url = '/admin/category/getAll';
        T.get(T.url(url)).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({html: 'Get category has some errors!'});
                    console.error('GET: ' + url + '. ' + res.data.error);
                    dispatch(updateCategory([]));
                } else {
                    dispatch(updateCategory(res.data.listCategory));
                }
            } else {
                T.m.toast({html: 'Get category has some errors!'});
                console.error('GET: ' + url + '.');
            }
            done && done();
        }).catch(error => {
            T.m.toast({html: 'Get category has some errors!'});
            console.error('GET: ' + url + '.', error);
            done && done();
        });
    };
}

export function updateNewsImage(news, data, done) {
    return dispatch => {
        const url = '/admin/image-upload/news/' + news._id;
        T.post(T.url(url), data).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({html: 'Post image has some errors!'});
                    console.error('Post: ' + url + '. ' + res.data.error);
                } else {
                    dispatch(updateNewsInPage(res.data.item));
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

export function updateNewsImageContent(news, data, done){
    return dispatch => {
        const url = '/admin/content/image-upload/news/' + news._id;
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

export function swapNews(newsId, isMoveUp, pageNumber, pageSize) {
    return dispatch => {
        const url = '/admin/news/swap/priority';
        T.put(T.url(url), {newsId, isMoveUp}).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({html: 'Change position has some errors!'});
                    console.error('Put: ' + url + '. ' + res.data.error);
                } else {
                    dispatch(getNewsPage(pageNumber, pageSize, () => {
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


