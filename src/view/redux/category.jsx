import T from '../common/js/common';

export const UPDATE_CATEGORY_PAGE = 'category:updateCategoryPage';
export const UPDATE_CATEGORY_IN_PAGE = 'category:updateCategoryInPage';
export const UPDATE_CATEGORY_ALL = 'category:updateCategoryAll';

// Reducer -------------------------------------------------------------------------------------------------------------
export default function categoryReducer(state = null, data) {
    switch (data.type) {
        case UPDATE_CATEGORY_PAGE:
            const {list, pageNumber, pageSize, pageTotal, totalItem} = data;
            return Object.assign({}, state, {page: {list, pageNumber, pageSize, pageTotal, totalItem}});

        case UPDATE_CATEGORY_IN_PAGE:
            let newState = Object.assign({}, state);
            if (newState.page) {
                for (let i = 0, n = newState.page.list.length; i < n; i++) {
                    if (data.category._id === newState.page.list[i]._id) {
                        newState.page.list[i] = data.category;
                        break;
                    }
                }
            }
            return newState;

        case UPDATE_CATEGORY_ALL:
            return Object.assign({}, state, {all: data.all});

        default:
            return state;
    }
}

// Actions -------------------------------------------------------------------------------------------------------------
export function updateCategoryPage(list, pageNumber, pageSize, pageTotal, totalItem) {
    return {type: UPDATE_CATEGORY_PAGE, list, pageNumber, pageSize, pageTotal, totalItem}
}

export function updateCategoryInPage(category) {
    return {type: UPDATE_CATEGORY_IN_PAGE, category}
}

export function updateCategoryAll(all) {
    return {type: UPDATE_CATEGORY_ALL, all}
}

export function deleteCategory(_id, pageNumber, pageSize, done) {
    return dispatch => {
        const url = '/admin/category';
        T.delete(T.url(url), {data: {_id}}).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({html: 'Delete category has some errors!'});
                    console.error('DELETE: ' + url + '. ' + res.data.error);
                } else {
                    T.m.toast({html: 'The category has been deleted!'});
                    dispatch(getCategoryPage(pageNumber, pageSize));
                }
            } else {
                T.m.toast({html: 'Delete category has some errors!'});
                console.error('DELETE: ' + url + '.');
            }
            done && done();
        }).catch(error => {
            T.m.toast({html: 'Delete category has some errors!'});
            console.error('DELETE: ' + url + '.', error);
            done && done();
        });
    };
}

export function saveCategory(category, pageNumber, pageSize, done) {
    return dispatch => {
        const url = '/admin/category',
            method = category._id ? 'put' : 'post';
        T[method](T.url(url), {category}).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({html: 'Save category has some errors! ' + res.data.error.message});
                    console.error(method.toUpperCase() + ': ' + url + '.', res.data.error);
                } else {
                    T.m.toast({html: 'Save!'});
                    dispatch(category._id ? updateCategoryInPage(res.data.category) : getCategoryPage(pageNumber, pageSize));
                }
            } else {
                T.m.toast({html: 'Save category has some errors!'});
                console.error(method.toUpperCase() + ': ' + url + '.');
            }
            done && done();
        }).catch(error => {
            T.m.toast({html: 'Save category has some errors!'});
            console.error(method.toUpperCase() + ': ' + url + '.', error);
            done && done();
        });
    };
}

export function getCategoryPage(pageNumber, pageSize, done) {
    return dispatch => {
        const url = '/admin/category/page/' + pageNumber + '/' + pageSize;
        T.get(T.url(url)).then(res => {
            if (res && res.data) {
                if (res.data.error || res.data.page == null) {
                    T.m.toast({html: 'Get category has some errors!'});
                    console.error('GET: ' + url + '. ' + res.data.error);
                    dispatch(updateCategoryPage([], pageNumber, pageSize, 0, 0));
                } else {
                    let {list, pageNumber, pageSize, totalItem} = res.data.page;
                    dispatch(updateCategoryPage(list, pageNumber, pageSize, Math.ceil(totalItem / pageSize), totalItem));
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

export function getCategoryAll(done) {
    return dispatch => {
        const url = '/category/all';
        T.get(T.url(url)).then(res => {
            if (res && res.data) {
                if (res.data.error || res.data.page == null) {
                    T.m.toast({html: 'Get all categories has some errors!'});
                    console.error('GET: ' + url + '. ' + res.data.error);
                    dispatch(updateCategoryAll([]));
                } else {
                    dispatch(updateCategoryAll(res.data.all));
                }
            } else {
                T.m.toast({html: 'Get all categories has some errors!'});
                console.error('GET: ' + url + '.');
            }
            done && done();
        }).catch(error => {
            T.m.toast({html: 'Get all categories has some errors!'});
            console.error('GET: ' + url + '.', error);
            done && done();
        });
    };
}

export function updateCategoryImage(category, data, done) {
    return dispatch => {
        const url = '/admin/image-upload/category/' + category._id;
        T.post(T.url(url), data).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({html: 'Post image has some errors!'});
                    console.error('Post: ' + url + '. ' + res.data.error);
                } else {
                    dispatch(updateCategoryInPage(res.data.item));
                    done && done(res.data.item.image);
                }
            } else {
                T.m.toast({html: 'Post image has some errors!'});
                console.error('GET: ' + url + '.');
            }
        }).catch(error => {
            T.m.toast({html: 'Post image has some errors!'});
            console.error('Post: ' + url + '.', error);
        });
    };
}

export function swapCategory(categoryId, isMoveUp, pageNumber, pageSize) {
    return dispatch => {
        const url = '/admin/category/swap/priority';
        T.put(T.url(url), {categoryId, isMoveUp}).then(res => {
            if (res && res.data) {
                if (res.data.error) {
                    T.m.toast({html: 'Change position has some errors!'});
                    console.error('Put: ' + url + '. ' + res.data.error);
                } else {
                    dispatch(getCategoryPage(pageNumber, pageSize, () => {
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