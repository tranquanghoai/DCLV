module.exports = app => {
    const defaultResponse = (req, res) => app.createResponse(req, res, '/index.template');
    ['/', '/index.htm(l)?', '/registered(.htm(l)?)?', '/404.htm(l)?',
        '/introduction(.htm(l)?)?', '/event(.htm(l)?)?', '/student(.htm(l)?)?', '/news(.htm(l)?)?',
        '/career-fair-2018(.htm(l)?)?', '/active-user/:userId'
    ].forEach(route => app.get(route, defaultResponse));

    app.get('/home/state', (req, res) => {
        res.send({
            user: req.session.user,
            todayViews: 481,
            allViews: 5358102,
            email: 'sscc@hcmut.edu.vn',
            mobile: '(08) 2214 6555',
            address: 'Phòng 119B1 - Trường Đại học Bách Khoa - ĐHQG HCM | 268 Lý Thường Kiệt, P.14, Q.10'
        });
    });

    app.get('/home/carousel/:carouselType', (req, res) => {
        if (req.params.carouselType === 'strategic-partnership') {
            res.send([{
                text: 'PG',
                link: 'http://www.pg.com/vn/',
                img: '/img/partner/pg.png'
            }, {
                text: 'Hyosung',
                link: 'http://www.hyosungvina.com/vi/',
                img: '/img/partner/hyosung.png'
            }, {
                text: 'Unilever',
                link: 'https://www.unilever.com.vn/',
                img: '/img/partner/unilever.png'
            }, {
                text: 'Mondelez',
                link: 'https://vn.mondelezinternational.com/vi-vn',
                img: '/img/partner/mondelez.png'
            }, {
                text: 'Samsung',
                link: 'https://www.samsung.com/vn/',
                img: '/img/partner/samsung.png'
            }]);
        } else if (req.params.carouselType === 'recruiting-partners') {
            res.send([{
                link: 'https://www.google.com.vn/',
                img: '/img/partner/logo_phu-14.png'
            }, {
                link: 'https://www.google.com.vn/',
                img: '/img/partner/200x90_hella.jpg'
            }, {
                link: 'https://www.google.com.vn/',
                img: '/img/partner/elca.png'
            }, {
                link: 'https://www.google.com.vn/',
                img: '/img/partner/logo_phu-13.png'
            }, {
                link: 'https://www.google.com.vn/',
                img: '/img/partner/dek.png'
            }, {
                link: 'https://www.google.com.vn/',
                img: '/img/partner/VGU-Logo.png'
            }, {
                link: 'https://www.google.com.vn/',
                img: '/img/partner/logo_phu-22.png'
            }, {
                link: 'https://www.google.com.vn/',
                img: '/img/partner/200x90_pepsico.jpg'
            }, {
                link: 'https://www.google.com.vn/',
                img: '/img/partner/logo_phu-4.png'
            }, {
                link: 'https://www.google.com.vn/',
                img: '/img/partner/logo_phu-26.png'
            }, {
                link: 'https://www.google.com.vn/',
                img: '/img/partner/logo_phu-23.png'
            }, {
                link: 'https://www.google.com.vn/',
                img: '/img/partner/logo-OSD.jpg'
            }, {
                link: 'https://www.google.com.vn/',
                img: '/img/partner/200x90_samsung.jpg'
            }, {
                link: 'https://www.google.com.vn/',
                img: '/img/partner/logo_phu-18.png'
            }, {
                link: 'https://www.google.com.vn/',
                img: '/img/partner/logo_phu-21.png'
            }, {
                link: 'https://www.google.com.vn/',
                img: '/img/partner/200x90_myphuong.jpg'
            }, {
                link: 'https://www.google.com.vn/',
                img: '/img/partner/logo_phu-12.png'
            }, {
                link: 'https://www.google.com.vn/',
                img: '/img/partner/logo_phu-10.png'
            }, {
                link: 'https://www.google.com.vn/',
                img: '/img/partner/harveynash-.png'
            }, {
                link: 'https://www.google.com.vn/',
                img: '/img/partner/logo_phu-20.png'
            }, {
                link: 'https://www.google.com.vn/',
                img: '/img/partner/logo_phu-17.png'
            }, {
                link: 'https://www.google.com.vn/',
                img: '/img/partner/logo_phu-6.png'
            }, {
                link: 'https://www.google.com.vn/',
                img: '/img/partner/logo_phu-3.png'
            }]);
        }
    });

    app.get('/event/event-item/career-fair-2018', (req, res) => {
        app.model.event.getByName('career-fair-2018', (error, event) => {
            if (error) {
                res.send({
                    error
                });
            } else if (event == null) {
                res.send({
                    error: 'Invalid event name!'
                });
            } else {
                app.model.eventItem.getByEventId(event._id, (error, items) => res.send({
                    error,
                    items
                }));
            }
        });
    });

    app.get('/event/career-fair-2018', (req, res) => {
        app.model.event.getByName('career-fair-2018', (error, event) => {
            if (error || event == null) {
                res.send({
                    error: error ? error : 'Invalid event!'
                })
            } else {
                app.model.register.get(event._id, (error, register) => res.send({
                    error,
                    event,
                    register
                }));
            }
        });
    });

    app.get('/event/register/:eventId', app.isUser, (req, res) => { //TODO: isUser must return JSON
        app.model.register.getByEventUserId(req.params.eventId, req.session.user._id, (error, register) => {
            res.send({
                error,
                register
            });
        });
    });

    app.post('/event/register', app.isUser, (req, res) => {
        const data = Object.assign({}, req.body.data);
        if (data.eventId != null && data.email != null && data.phoneNumber != null && data.contactName != null && data.name != null && data.displayName != null && data.address != null && data.taxCode) {
            data.userId = req.session.user._id;
            app.model.register.getByEventUserId(data.eventId, data.userId, (error, register) => {
                if (error) {
                    res.send({
                        error
                    });
                } else if (register) {
                    register.email = data.email;
                    register.phoneNumber = data.phoneNumber;
                    register.contactName = data.contactName;
                    register.name = data.name;
                    register.displayName = data.displayName;
                    register.address = data.address;
                    register.taxCode = data.taxCode;

                    register.save(error => res.send({
                        error
                    }))
                } else {
                    app.model.register.create(data, error => res.send({
                        error
                    }));
                }
            });
        } else {
            res.send({
                error: 'Invalid data!'
            })
        }
    });

    app.get('/event/event-item/:eventId', app.isUser, (req, res) => {
        app.model.eventItem.getByEventUserId(req.params.eventId, req.session.user._id, (error, items) => res.send({
            error,
            items
        }));
    });
    app.post('/event/event-item', app.isUser, (req, res) => {
        const data = Object.assign({}, req.body.data);
        if (data.eventId != null && data.ids != null) {
            app.model.eventItem.updateRegister(data.eventId, req.session.user._id, data.ids, (error, items) => {
                res.send({
                    error,
                    items
                });
            });
        } else {
            res.send({
                error: 'Invalid data!'
            })
        }
    });


    app.get('/login-user', (req, res) => res.send({
        user: req.session.user
    }));
    app.post('/register', app.registerUser);
    app.post('/login', app.loginUser);
    app.post('/logout', app.logoutUser);

    app.post('/active-user/:userId', (req, res) => app.model.user.get(req.params.userId, (error, user) => {
        if (error || user == null) {
            res.send({
                message: 'Địa chỉ kích hoạt tài khoản không đúng!'
            });
        } else if (user.active) {
            res.send({
                message: 'Bạn kích hoạt tài khoản đã được kích hoạt!'
            });
        } else if (user.token !== 'new') {
            res.send({
                message: 'Bạn kích hoạt tài khoản đã được kích hoạt!'
            });
        } else {
            user.active = true;
            user.token = '';
            user.save(error => {
                res.send({
                    message: error ? 'Quá trình kích hoạt tài khoản đã lỗi!' : 'Bạn đã kích hoạt tài khoản thành công!'
                });
            });
        }
    }));

    app.redirectToWebpackServer();
};