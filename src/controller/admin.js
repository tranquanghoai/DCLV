module.exports = app => {
    const defaultResponse = (req, res) => app.createResponse(req, res, '/admin.template');
    ['/admin', '/admin/user',
        '/admin/home/carousel', '/admin/home/strategy-partner', '/admin/home/recruiting-partner',
        '/admin/introduction/carousel', '/admin/introduction/mission', '/admin/introduction/personnel',
        '/admin/news/carousel', '/admin/news/category', '/admin/news/list', '/admin/news/edit/:newsId',
        '/admin/event/carousel', '/admin/event/category', '/admin/event/list', '/admin/event/edit/:newsId',
        // '/admin/jobhub(.htm(l)?)?', '/admin/category(.htm(l)?)?', '/admin/news(.htm(l)?)?', '/admin/event(.htm(l)?)?',
        // '/admin/contact(.htm(l)?)?', '/admin/notification(.htm(l)?)?', '/admin/user(.htm(l)?)?'
    ].forEach(route => app.get(route, app.role.isAdmin, defaultResponse));

    // NEWS CATEGORY ------------------------------------------------------------------------------
    app.get('/admin/news/category/page/:pageNumber/:pageSize', app.role.isAdmin, (req, res) => {
        const pageNumber = parseInt(req.params.pageNumber),
            pageSize = parseInt(req.params.pageSize);
        app.model.newsCategory.getPage(pageNumber, pageSize, {}, (error, page) => res.send({
            error,
            page
        }));
    });

    app.post('/admin/news/category', app.role.isAdmin, (req, res) => {
        app.model.newsCategory.create({
            title: 'Danh mục',
            active: true
        }, (error, item) => res.send({
            error,
            item
        }));
    });

    app.delete('/admin/news/category', app.role.isAdmin, (req, res) => {
        app.model.newsCategory.delete(req.body.id, error => res.send({
            error
        }));
    });

    app.put('/admin/news/category/swap', app.role.isAdmin, (req, res) => {
        const isMoveUp = req.body.isMoveUp.toString() == 'true';
        app.model.newsCategory.swapPriority(req.body.id, isMoveUp, error => res.send({
            error
        }));
    });

    app.put('/admin/news/category', app.role.isAdmin, (req, res) => {
        app.model.newsCategory.update(req.body._id, req.body.changes, (error, item) => res.send({
            error,
            item
        }));
    });

    app.put('/admin/news/category/edit/:newsCategoryId', app.role.isAdmin, (req, res) => {
        req.session.newsCategoryId = req.params.newsCategoryId;
        res.send({});
    });

    // NEWS ---------------------------------------------------------------------------------------
    app.get('/admin/news/list/page/:pageNumber/:pageSize', app.role.isAdmin, (req, res) => {
        const pageNumber = parseInt(req.params.pageNumber),
            pageSize = parseInt(req.params.pageSize);
        app.model.news.getPage(pageNumber, pageSize, {}, (error, page) => res.send({
            error,
            page
        }));
    });

    app.post('/admin/news/list', app.role.isAdmin, (req, res) => {
        app.model.news.create({
            title: 'Bài viết',
            active: false
        }, (error, item) => res.send({
            error,
            item
        }));
    });

    app.delete('/admin/news/list', app.role.isAdmin, (req, res) => {
        app.model.news.delete(req.body.id, error => res.send({
            error
        }));
    });

    app.put('/admin/news/list/swap', app.role.isAdmin, (req, res) => {
        const isMoveUp = req.body.isMoveUp.toString() == 'true';
        app.model.news.swapPriority(req.body.id, isMoveUp, error => res.send({
            error
        }));
    });

    app.put('/admin/news/list', app.role.isAdmin, (req, res) => {
        app.model.news.update(req.body._id, req.body.changes, (error, item) => res.send({
            error,
            item
        }));
    });

    app.get('/admin/news/item/:newsId', app.role.isAdmin, (req, res) => {
        app.model.newsCategory.getAll((error, categories) => {
            if (error) {
                res.send({
                    error
                });
            } else {
                app.model.news.get(req.params.newsId, (error, item) => {
                    if (item) req.session.newsId = req.params.newsId;
                    res.send({
                        error,
                        categories,
                        item
                    });
                });
            }
        });
    });

    app.put('/admin/news/item/check-link', (req, res) => {
        app.model.news.getByLink(req.body.link, (error, item) => {
            res.send({
                error: error ? 'Lỗi hệ thống' : (item == null || item._id == req.body._id) ? null : 'Link không hợp lệ'
            });
        });
    });

    // NEWS ---------------------------------------------------------------------------------------
};