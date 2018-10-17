module.exports = app => {

    app.model.event.getByName('career-fair-2018', (error, event) => {
        if (error) {
            return console.log(error);
        } else if (event == null) {
            app.model.event.create({
                name: 'career-fair-2018',
                title: 'Ngày hội việc làm 2018'
            }, (error, event) => {
                for (let i = 1; i <= 147; i++) {
                    app.model.eventItem.create({
                        eventId: event._id,
                        name: i.toString(),
                        x: 100,
                        y: 100,
                        width: 50,
                        height: 50,
                    }, () => {});
                }
            });
        }
    });
};