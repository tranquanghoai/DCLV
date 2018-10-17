module.exports = app => {

    const schema = app.db.Schema({
        name: String,
        email: String,
        password: String,
        phoneNumber: String,
        image: String,
        role: String, // admin, company, user
        active: Boolean,
        createdDate: Date,
        token: String,
        tokenDate: Date
    });
    schema.methods.equalPassword = function (password) {
        return app.crypt.compareSync(password, this.password);
    };
    const model = app.db.model('User', schema);

    app.model.user = {
        hashPassword: password => app.crypt.hashSync(password, app.crypt.genSaltSync(8), null),

        auth: (email, password, done) => model.findOne({
                email
            }, (error, user) =>
            done(error == null && user != null && user.equalPassword(password) ? user : null)),

        create: (data, done) => app.model.user.getByEmail(data.email, (error, user) => {
            if (error) {
                if (done) done(error);
            } else if (user) {
                if (done) done('This email has registered!', user);
            } else {
                data.createdDate = new Date();
                data.tokenDate = new Date();
                data.token = 'new'; //app.getToken(8);
                data.password = app.model.user.hashPassword(data.password);
                if (data.active === undefined) data.active = false;

                model.create(data, (error, user) => done && done(error, user));
            }
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
                    _id: 1
                }).skip(skipNumber).limit(result.pageSize).exec((error, users) => {
                    result.list = (error ? [] : users).map(user => app.clone(user, {
                        password: ''
                    }));
                    done(error, result);
                });
            }
        }),

        get: (_id, done) => model.findOne({
            _id
        }, done),

        getByEmail: (email, done) => model.findOne({
            email
        }, done),

        getByPhoneNumber: (phoneNumber, done) => model.findOne({
            phoneNumber
        }, done),

        update: (_id, changes, done) => {
            const updateProfile = () => {
                if (changes.password) changes.password = app.model.user.hashPassword(changes.password);
                model.findOneAndUpdate({
                    _id
                }, {
                    $set: changes
                }, {
                    new: true
                }, done);
            };

            if (changes.email) {
                model.findOne({
                    email: changes.email
                }, (error, user) => {
                    if (error) {
                        done('Change password has some errors!');
                    } else if (user != null) {
                        done('Your email has been used!');
                    } else {
                        updateProfile();
                    }
                });
            } else {
                updateProfile();
            }
        },

        delete: (_id, done) => model.remove({
            _id
        }, done),

        count: (condition, done) => done ? model.count(condition, done) : model.count({}, condition),
    };

    app.createDebugUser();

    app.model.user.create({
        name: 'Admin',
        email: app.defaultAdminEmail,
        password: app.defaultAdminPassword,
        role: 'admin',
        active: true,
    })
};