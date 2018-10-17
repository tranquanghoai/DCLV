module.exports = app => {

    app.get('/admin/jobhub/page/:pageNumber/:pageSize', (req, res) => {
        const pageNumber = parseInt(req.params.pageNumber),
            pageSize = parseInt(req.params.pageSize);
        app.model.jobHub.getPage(pageNumber, pageSize, {}, (error, page) => res.send({
            error,
            page
        }));
    });
    app.get('/admin/category/page/:pageNumber/:pageSize', app.role.isAdmin, (req, res) => {
        const pageNumber = parseInt(req.params.pageNumber),
            pageSize = parseInt(req.params.pageSize);
        app.model.category.getPage(pageNumber, pageSize, {}, (error, page) => res.send({
            error,
            page
        }));
    });
    app.get('/admin/category/getAll', app.role.isAdmin, (req, res) =>
        app.model.category.getAll((error, listCategory) => res.send({
            error,
            listCategory
        })));
    app.get('/admin/event/page/:pageNumber/:pageSize', app.role.isAdmin, (req, res) => {
        const pageNumber = parseInt(req.params.pageNumber),
            pageSize = parseInt(req.params.pageSize);
        app.model.event.getPage(pageNumber, pageSize, {}, (error, page) => res.send({
            error,
            page
        }));
    });
    app.get('/admin/contact/page/:pageNumber/:pageSize', app.role.isAdmin, (req, res) => {
        const pageNumber = parseInt(req.params.pageNumber),
            pageSize = parseInt(req.params.pageSize);
        app.model.contact.getPage(pageNumber, pageSize, {}, (error, page) => res.send({
            error,
            page
        }));
    });
    app.get('/admin/notification/page/:pageNumber/:pageSize', app.role.isAdmin, (req, res) => {
        const pageNumber = parseInt(req.params.pageNumber),
            pageSize = parseInt(req.params.pageSize);
        app.model.notification.getPage(pageNumber, pageSize, {}, (error, page) => res.send({
            error,
            page
        }));
    });
    app.get('/admin/user/page/:pageNumber/:pageSize', app.role.isAdmin, (req, res) => {
        const pageNumber = parseInt(req.params.pageNumber),
            pageSize = parseInt(req.params.pageSize);
        app.model.user.getPage(pageNumber, pageSize, {}, (error, page) => res.send({
            error,
            page
        }));
    });

    app.get('/admin/jobhub/item/:Id', (req, res) =>
        app.model.jobHub.get(req.params.Id, (error, item) => res.send({
            error,
            item
        })));

    app.get('/admin/statistic', app.role.isAdmin, (req, res) => {
        const onError = (error, next) => {
            if (error) {
                console.error('GET: /admin/statistic. Error: ', error);
                res.send({
                    error
                });
            } else {
                next();
            }
        };

        app.model.jobHub.count((error, numberOfJobHubs) =>
            onError(error, () => app.model.category.count((error, numberOfCategories) =>
                onError(error, () => app.model.news.count((error, numberOfNews) =>
                    onError(error, () => app.model.event.count((error, numberOfEvents) =>
                        onError(error, () => app.model.contact.count((error, numberOfContacts) =>
                            onError(error, () => app.model.notification.count((error, numberOfNotifications) =>
                                onError(error, () => app.model.user.count((error, numberOfUsers) =>
                                    onError(error, () => res.send({
                                        numberOfJobHubs,
                                        numberOfCategories,
                                        numberOfNews,
                                        numberOfEvents,
                                        numberOfContacts,
                                        numberOfNotifications,
                                        numberOfUsers,
                                    }))
                                ))
                            ))
                        ))
                    ))
                ))
            ))
        );
    });


    // POST ------------------------------------------------------------------------------------------------------------
    app.post('/admin/image-upload/:uploadType/:parentId', app.role.isAdmin, (req, res) => {
        app.getUploadForm().parse(req, (error, fields, files) => {
            if (files.image && files.image.length > 0) {
                const {
                    uploadType,
                    parentId
                } = req.params,
                    model = app.model[uploadType];
                if (model) {
                    model.get(parentId, (error, item) => {
                        const imageSrcPath = files.image[0].path,
                            imageLink = '/img/' + uploadType + '/' + parentId + app.path.extname(imageSrcPath),
                            imageDestPath = app.publicPath + imageLink;
                        if (error || item == null) {
                            res.send({
                                error: 'Upload image has some errors!'
                            });
                        } else {
                            if (item.image && app.fs.existsSync(app.publicPath + item.image)) {
                                app.fs.unlinkSync(app.publicPath + item.image);
                            }

                            app.jimp.read(imageSrcPath).then(image => {
                                image.resize(512, app.jimp.AUTO).write(imageDestPath);
                                app.fs.unlinkSync(imageSrcPath);

                                item.image = imageLink + '?v=' + new Date().getTime();
                                item.save(error =>
                                    res.send({
                                        error: error ? 'Upload image has some errors!' : null,
                                        item
                                    })
                                );
                            }).catch(error => {
                                console.error(error);
                                res.send({
                                    error: 'Process image has some errors!'
                                });
                            });
                        }
                    });
                } else {
                    res.send({
                        error: 'Invalid request!'
                    });
                }
            } else {
                res.send({
                    error: 'Process image has some errors!'
                });
            }
        });
    });
    app.post('/admin/content/image-upload/:uploadType/:parentId', app.role.isAdmin, (req, res) => {
        app.getUploadForm().parse(req, (error, fields, files) => {
            if (files.image && files.image.length > 0) {
                const {
                    uploadType,
                    parentId
                } = req.params;
                const imgSrcPath = files.image[0].path,
                    imgValue = '/img/' + uploadType + '/' + parentId + '/' + app.path.basename(imgSrcPath),
                    imgDestPath = app.publicPath + imgValue;
                app.jimp.read(imgSrcPath).then(image => {
                    image.resize(512, app.jimp.AUTO).write(imgDestPath);
                    app.fs.unlinkSync(imgSrcPath);

                    res.send({
                        error: null,
                        img: imgValue
                    });
                }).catch(error => {
                    console.error(error);
                    res.send({
                        error: 'Process image has some errors!'
                    });
                });
            }
        });
    });

    app.post('/admin/jobhub', app.role.isAdmin, (req, res) =>
        app.model.jobHub.create(req.body.jobHub, (error, jobHub) => res.send({
            error,
            jobHub
        })));
    app.post('/admin/category', app.role.isAdmin, (req, res) =>
        app.model.category.create(req.body.category, (error, category) => res.send({
            error,
            category
        })));
    app.post('/admin/news', app.role.isAdmin, (req, res) =>
        app.model.news.create(req.body.news, (error, news) => res.send({
            error,
            news
        })));
    app.post('/admin/event', app.role.isAdmin, (req, res) =>
        app.model.event.create(req.body.event, (error, event) => res.send({
            error,
            event
        })));
    app.post('/admin/notification', app.role.isAdmin, (req, res) =>
        app.model.notification.create(req.body.notification, (error, notification) => {
            if (error) {
                res.send({
                    error
                });
            } else {
                //TODO: send notification to user
                // app.sendNotification(notification.title, notification.message, ...);
                res.send({
                    error,
                    notification
                });
            }
        }));
    app.post('/admin/user', app.role.isAdmin, (req, res) => {
        const password = req.body.user.password;
        app.model.user.create(req.body.user, (error, user) => {
            const isUnactive = (user.active == null || user.active === false),
                activeLink = req.protocol + '://' + req.get('host') + '/active-user/' + user._id,
                activeText = isUnactive ? ` Go to ${activeLink} to active your account. ` : '',
                activeHtml = isUnactive ? `<br/>Click <a href='${activeLink}' target='_blank'>here</a> to active your account.` : '';

            app.email.sendEmail(user.email, [], 'SSCC App: New account',
                `Dear ${user.name}, Your account has been created. The login information is: email: ${user.email}, password: '${user.password}'. ${activeText}Best regard, SSCC Admin.`,
                `Dear ${user.name},<br/><br/>Your account has been created. The login information is: <br> - Email: ${user.email}<br> - Password: '${password}'.${activeHtml}<br/><br/>Best regard,<br/>SSCC Admin.`);
            res.send({
                error,
                user
            })
        });
    });


    // PUT -------------------------------------------------------------------------------------------------------------
    app.put('/admin/jobhub', app.role.isAdmin, (req, res) => {
        let data = req.body.jobHub,
            changes = {};
        if (data.title) changes.title = data.title;
        if (data.company) changes.company = data.company;
        if (data.location) changes.location = data.location;
        if (data.content) changes.content = data.content;
        if (data.startPost) changes.startPost = data.startPost;
        if (data.stopPost) changes.stopPost = data.stopPost;
        if (data.type) changes.type = data.type;
        if (data.active != null) changes.active = data.active;

        app.model.jobHub.update(data._id, changes, (error, jobHub) => res.send({
            error,
            jobHub
        }));
    });
    app.put('/admin/jobhub/swap/priority', app.role.isAdmin, (req, res) => {
        const {
            jobHubId,
            isMoveUp
        } = req.body;
        app.model.jobHub.swapPriority(jobHubId, isMoveUp, (error, jobHub) => res.send({
            error,
            jobHub
        }))
    });
    app.put('/admin/category', app.role.isAdmin, (req, res) => {
        let data = req.body.category,
            changes = {};
        if (data.priority) changes.priority = data.priority;
        if (data.title) changes.title = data.title;
        if (data.image) changes.image = data.image;
        if (data.active !== undefined) changes.active = data.active;

        app.model.category.update(data._id, changes, (error, category) => res.send({
            error,
            category
        }));
    });
    app.put('/admin/category/swap/priority', app.role.isAdmin, (req, res) => {
        const {
            categoryId,
            isMoveUp
        } = req.body;
        app.model.category.swapPriority(categoryId, isMoveUp, (error, category) => res.send({
            error,
            category
        }))
    });
    app.put('/admin/news', app.role.isAdmin, (req, res) => {
        let data = req.body.news,
            changes = {};
        if (data.title) changes.title = data.title;
        if (data.categories) changes.categories = data.categories;
        if (data.content) changes.content = data.content;
        if (data.startPost) changes.startPost = data.startPost;
        if (data.stopPost) changes.stopPost = data.stopPost;
        if (data.active !== undefined) changes.active = data.active;

        app.model.news.update(data._id, changes, (error, news) => res.send({
            error,
            news
        }));
    });
    app.put('/admin/news/swap/priority', app.role.isAdmin, (req, res) => {
        const {
            newsId,
            isMoveUp
        } = req.body;
        app.model.news.swapPriority(newsId, isMoveUp, (error, news) => res.send({
            error,
            news
        }))
    });
    app.put('/admin/event', app.role.isAdmin, (req, res) => {
        let data = req.body.event,
            changes = {};
        if (data.priority) changes.priority = data.priority;
        if (data.title) changes.title = data.title;
        if (data.location) changes.location = data.location;
        if (data.image) changes.image = data.image;
        if (data.active !== undefined) changes.active = data.active;
        if (data.content) changes.content = data.content;
        if (data.numOfRegisterUsers) changes.numOfRegisterUsers = data.numOfRegisterUsers;
        if (data.maxRegisterUsers) changes.maxRegisterUsers = data.maxRegisterUsers;
        if (data.startEvent) changes.startEvent = data.startEvent;
        if (data.stopEvent) changes.stopEvent = data.stopEvent;
        if (data.startPost) changes.startPost = data.startPost;
        if (data.stopPost) changes.stopPost = data.stopPost;

        app.model.event.update(data._id, changes, (error, event) => res.send({
            error,
            event
        }));
    });
    app.put('/admin/event/swap/priority', app.role.isAdmin, (req, res) => {
        const {
            eventId,
            isMoveUp
        } = req.body;
        app.model.event.swapPriority(eventId, isMoveUp, (error, event) => res.send({
            error,
            event
        }))
    });
    app.put('/admin/contact', app.role.isAdmin, (req, res) => {
        app.model.contact.get(req.body.contact._id, (error, contact) => {
            if (error) {
                res.send({
                    error
                });
            } else {
                let changed = false;
                if (req.body.contact.reply && req.body.contact.reply !== contact.reply) {
                    changed = true;
                    contact.reply = req.body.contact.reply;
                    app.email.sendEmail(contact.email, [app.defaultAdminEmail], `SSCC App: Reply "${contact.title}"`,
                        contact.reply, contact.reply);
                }
                if (req.body.contact.read !== undefined && req.body.contact.read !== contact.read) {
                    changed = true;
                    contact.read = req.body.contact.read;
                }

                if (changed) {
                    contact.save(error => res.send({
                        error,
                        contact
                    }));
                } else {
                    res.send({
                        contact
                    });
                }
            }
        });
    });
    app.put('/admin/user', app.role.isAdmin, (req, res) => {
        let data = req.body.user,
            changes = {};
        if (data.name) changes.name = data.name;
        if (data.email) changes.email = data.email;
        if (data.role) changes.role = data.role;
        if (data.password) changes.password = data.password;
        if (data.phoneNumber) changes.phoneNumber = data.phoneNumber;
        if (data.photoURL) changes.photoURL = data.photoURL;
        if (data.active != null) changes.active = data.active;

        app.model.user.update(data._id, changes, (error, user) => {
            if (error) {
                res.send({
                    error
                });
            } else {
                if (changes.password) {
                    app.email.sendEmail(user.email, [], 'New password',
                        `Dear ${user.name}, Your new password is '${data.password}'. Best regard, SSCC Admin.`,
                        `Dear ${user.name},<br/><br/>Your new password is '<b>${data.password}</b>'.<br/><br/>Best regard,<br/>SSCC Admin.`);
                }

                user.password = '';
                res.send({
                    error,
                    user
                });
            }
        })
    });


    // DELETE ----------------------------------------------------------------------------------------------------------
    app.delete('/admin/jobhub', app.role.isAdmin, (req, res) => app.model.jobHub.get(req.body._id, (error, deleteItem) => {
        if (error) {
            res.send({
                error
            });
        } else if (deleteItem == null) {
            res.send({
                error: 'Invalid Id!'
            });
        } else {
            const imgPath = app.publicPath + '/' + deleteItem.image;
            if (deleteItem.image && app.fs.existsSync(imgPath)) app.fs.unlinkSync(imgPath);
            deleteItem.remove(error => res.send({
                error
            }));
        }
    }));
    app.delete('/admin/category', app.role.isAdmin, (req, res) => app.model.category.get(req.body._id, (error, deleteItem) => {
        if (error) {
            res.send({
                error
            });
        } else if (deleteItem == null) {
            res.send({
                error: 'Invalid Id!'
            });
        } else {
            const imgPath = app.publicPath + '/' + deleteItem.image;
            if (deleteItem.image && app.fs.existsSync(imgPath)) app.fs.unlinkSync(imgPath);
            deleteItem.remove(error => {
                if (error) {
                    res.send({
                        error
                    });
                } else {
                    app.model.news.removeCategory(req.body._id, error => res.send({
                        error
                    }));
                }
            });
        }
    }));
    app.delete('/admin/news', app.role.isAdmin, (req, res) => app.model.news.get(req.body._id, (error, deleteItem) => {
        if (error) {
            res.send({
                error
            });
        } else if (deleteItem == null) {
            res.send({
                error: 'Invalid Id!'
            });
        } else {
            const imgPath = app.publicPath + '/' + deleteItem.image;
            if (deleteItem.image && app.fs.existsSync(imgPath)) app.fs.unlinkSync(imgPath);
            deleteItem.remove(error => res.send({
                error
            }));
        }
    }));
    app.delete('/admin/event', app.role.isAdmin, (req, res) => app.model.event.get(req.body._id, (error, deleteItem) => {
        if (error) {
            res.send({
                error
            });
        } else if (deleteItem == null) {
            res.send({
                error: 'Invalid Id!'
            });
        } else {
            const imgPath = app.publicPath + '/' + deleteItem.image;
            if (deleteItem.image && app.fs.existsSync(imgPath)) app.fs.unlinkSync(imgPath);
            deleteItem.remove(error => res.send({
                error
            }));
        }
    }));
    app.delete('/admin/contact', app.role.isAdmin, (req, res) =>
        app.model.contact.delete(req.body._id, error => res.send({
            error
        })));
    app.delete('/admin/contact', app.role.isAdmin, (req, res) =>
        app.model.contact.delete(req.body._id, error => res.send({
            error
        })));
    app.delete('/admin/notification', app.role.isAdmin, (req, res) =>
        app.model.notification.delete(req.body._id, error => res.send({
            error
        })));
    app.delete('/admin/user', app.role.isAdmin, (req, res) => app.model.user.get(req.body._id, (error, deleteItem) => {
        if (error) {
            res.send({
                error
            });
        } else if (deleteItem == null) {
            res.send({
                error: 'Invalid Id!'
            });
        } else {
            const imgPath = app.publicPath + '/' + deleteItem.image;
            if (deleteItem.image && app.fs.existsSync(imgPath)) app.fs.unlinkSync(imgPath);
            deleteItem.remove(error => res.send({
                error
            }));
        }
    }));

    app.delete('/admin/notification/all', app.role.isAdmin, (req, res) =>
        app.model.notification.deleteAll(error => res.send({
            error
        })));
    app.delete('/admin/contact/all', app.role.isAdmin, (req, res) =>
        app.model.contact.deleteAll(error => res.send({
            error
        })));
};