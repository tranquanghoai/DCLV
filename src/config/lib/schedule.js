module.exports = app => {
    const schedule = require('node-schedule');
    app.scheduleJobs = [];

    app.schedule = (time, task) => {
        schedule.scheduleJob(time, task);
    };

    app.activeJobs = () => {
        for (let i = 0; i < app.scheduleJobs.length; i++) {
            schedule.scheduleJob(app.scheduleJobs[i].time, app.scheduleJobs[i].task);
        }
    };

    // Hourly
    // schedule.scheduleJob('0 * * * *', () => {
    // });

    // Daily
    // schedule.scheduleJob('59 23 * * *', () => {
    // });
};