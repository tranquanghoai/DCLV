module.exports = (app) => {

    const adminNewsCategoryImageUpload = (srcPath, req, res) => {
        if (req.session.newsCategoryId) {
            app.model.newsCategory.get(req.session.newsCategoryId, (error, newsCategory) => {
                if (error) {
                    res.send({
                        error
                    });
                } else if (newsCategory) {
                    app.fs.unlink(newsCategory.image, (error) => {
                        const filename = app.path.basename(srcPath),
                            fileExtension = app.path.extname(filename);
                        newsCategory.image = '/img/news/category/' + req.session.newsCategoryId + fileExtension;
                        app.fs.rename(srcPath, app.path.join(app.publicPath, newsCategory.image), error => {
                            if (error) {
                                res.send({
                                    error
                                });
                            } else {
                                newsCategory.save(error => {
                                    if (error == null) app.io.emit('news-category-changed', newsCategory);
                                    res.send({
                                        error,
                                        image: newsCategory.image
                                    });
                                });
                            }
                        });
                    });
                } else {
                    res.send({
                        error: 'Invalid Id!'
                    });
                }
            });
        } else {
            res.send({
                error: 'Invalid Id!'
            });
        }
    };

    const adminNewsItemImageUpload = (srcPath, req, res) => {
        if (req.session.newsId) {
            app.model.news.get(req.session.newsId, (error, news) => {
                if (error) {
                    res.send({
                        error
                    });
                } else if (news) {
                    app.fs.unlink(news.image, (error) => {
                        const filename = app.path.basename(srcPath),
                            fileExtension = app.path.extname(filename);
                        news.image = '/img/news/' + req.session.newsCategoryId + fileExtension;
                        app.fs.rename(srcPath, app.path.join(app.publicPath, news.image), error => {
                            if (error) {
                                res.send({
                                    error
                                });
                            } else {
                                news.save(error => {
                                    if (error == null) app.io.emit('news-item-changed', news);
                                    res.send({
                                        error,
                                        image: news.image
                                    });
                                });
                            }
                        });
                    });
                } else {
                    res.send({
                        error: 'Invalid Id!'
                    });
                }
            });
        } else {
            res.send({
                error: 'Invalid Id!'
            });
        }
    };

    // ============================================================================================
    app.post('/admin/upload', app.role.isAdmin, (req, res) => {
        const uploadDir = app.path.join(app.uploadPath, new Date().yyyymmdd());
        if (!app.fs.existsSync(uploadDir)) app.fs.mkdirSync(uploadDir);

        app.getUploadForm().parse(req, (error, fields, files) => {
            console.log(files);
            if (error) {
                res.send({
                    error: error
                });
            } else if (files.mf_file_NewsCategoryImage && files.mf_file_NewsCategoryImage.length > 0) {
                adminNewsCategoryImageUpload(files.mf_file_NewsCategoryImage[0].path, req, res);
            } else if (files.mf_file_NewsItemImage && files.mf_file_NewsItemImage.length > 0) {
                adminNewsItemImageUpload(files.mf_file_NewsItemImage[0].path, req, res);
            } else {
                res.send({
                    error: 'Error'
                });
            }
        });
    });
};