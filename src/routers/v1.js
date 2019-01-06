const express = require('express');
const router = express.Router();

const MonthCalendar = require('../models/calendar_months');
const DateCalendar = require('../models/calendar_dates');

router.get('/calendar/:year/:month/', async (req, res) => {
    console.log({ req: req.params });
    const { year, month } = req.params;
    let monthCalendar = await MonthCalendar.findOne({
        'year.masehi': year,
        'month.index': month
    }, { _id: 0, 'timestamp': 0})
        .populate({
            path: 'weeks.dates',
            select: '-_id -year -month -wuku -ingkel'
        });    

    res.status(200).json(monthCalendar);
});

router.get('/calendar/:year/:month/:date', (req, res) => {
    console.log({ req: req.params });
});

module.exports = router;