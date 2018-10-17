module.exports = app => {

    const schema = app.db.Schema({
        priority: Number,
        categories: [String],
        title: String,
        image: String,
        link: String,
        active: {
            type: Boolean,
            default: false
        },
        content: String,
        createdDate: {
            type: Date,
            default: Date.now
        },
        startPost: Date,
        stopPost: Date,
        view: {
            type: Number,
            default: 0
        },
    });
    const model = app.db.model('News', schema);

    app.model.news = {
        create: (data, done) => model.find({}).sort({
            priority: -1
        }).limit(1).exec((error, items) => {
            data.priority = error || items == null || items.length === 0 ? 1 : items[0].priority + 1;
            model.create(data, (error, item) => {
                if (error) {
                    done(error);
                } else {
                    item.image = '/img/news/' + item._id + '.jpg';
                    const srcPath = app.path.join(app.publicPath, '/img/avatar.jpg'),
                        destPath = app.path.join(app.publicPath, item.image);
                    app.fs.copyFile(srcPath, destPath, error => {
                        if (error) {
                            done(error);
                        } else {
                            item.save(done);
                        }
                    });
                }
            });
        }),

        getPage: (pageNumber, pageSize, condition, done) => model.count({}, (error, totalItem) => {
            if (error) {
                done(error);
            } else {
                let result = {
                    totalItem,
                    pageSize,
                    pageTotal: Math.ceil(totalItem / pageSize)
                };
                result.pageNumber = pageNumber === -1 ? result.pageTotal : Math.min(pageNumber, result.pageTotal);
                const skipNumber = (result.pageNumber > 0 ? result.pageNumber - 1 : 0) * result.pageSize;
                model.find(condition).sort({
                    priority: -1
                }).skip(skipNumber).limit(result.pageSize).exec((error, items) => {
                    result.list = (error ? [] : items).map(item => app.clone(item, {
                        content: ''
                    }));
                    done(error, result);
                });
            }
        }),

        getAll: (done) => model.find({}).sort({
            priority: -1
        }).exec(done),

        getPage: (pageNumber, pageSize, condition, done) => model.count({}, (error, totalItem) => {
            if (error) {
                done(error);
            } else {
                let result = {};
                result.pageSize = pageSize;
                result.pageTotal = Math.ceil(totalItem / pageSize);
                result.pageNumber = pageNumber === -1 ? result.pageTotal : Math.min(pageNumber, result.pageTotal);
                result.totalItem = totalItem;

                const skipNumber = (result.pageNumber > 0 ? result.pageNumber - 1 : 0) * result.pageSize;
                model.find(condition).sort({
                    priority: -1
                }).skip(skipNumber).limit(result.pageSize).exec((error, items) => {
                    result.list = error ? [] : items;
                    done(error, result);
                });
            }
        }),

        get: (_id, done) => model.findOne({
            _id
        }, done),

        getByLink: (link, done) => model.findOne({
            link
        }, done),

        update: (_id, changes, done) => model.findOneAndUpdate({
            _id
        }, {
            $set: changes
        }, {
            new: true
        }, done),

        swapPriority: (_id, isMoveUp, done) => model.findOne({
            _id
        }, (error, item1) => {
            if (error || item1 === null) {
                done('Invalid news Id!');
            } else {
                model.find({
                        priority: isMoveUp ? {
                            $gt: item1.priority
                        } : {
                            $lt: item1.priority
                        }
                    })
                    .sort({
                        priority: isMoveUp ? 1 : -1
                    }).limit(1).exec((error, list) => {
                        if (error) {
                            done(error);
                        } else if (list == null || list.length === 0) {
                            done(null);
                        } else {
                            let item2 = list[0],
                                priority = item1.priority;
                            item1.priority = item2.priority;
                            item2.priority = priority;
                            item1.save(error1 => item2.save(error2 => done(error1 ? error1 : error2)));
                        }
                    });
            }
        }),

        delete: (_id, done) => model.findOne({
            _id
        }, (error, item) => {
            if (error) {
                done(error);
            } else if (item == null) {
                done('Invalid Id!');
            } else {
                const image = app.path.join(app.publicPath, item.image);
                if (app.fs.existsSync(image)) {
                    app.fs.unlinkSync(image);
                }

                item.remove(done);
            }
        }),

        count: (condition, done) => done ? model.count(condition, done) : model.count({}, condition),
    };
};