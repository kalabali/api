const express = require('express');
const { param, validationResult } = require('express-validator/check')
const router = express.Router();

const { dateChecker } = require('../helpers/validators');

//importing model
const MonthCalendar = require('../models/calendar_months.model');
const DateCalendar = require('../models/calendar_dates.model');

router.get('/calendar/:year/:month/', [
    param('year')
    .isNumeric({no_symbols: true})
    .custom(year => {        
        return year >= 1600 && year <= 3000;
    }),
    param('month')
    .isNumeric({no_symbols: true})
    .custom(month => {        
        return month >= 1 && month <= 12;
    }),
] , async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errs = errors.array({ onlyFirstError: true }).map(e => {
            return {
                param: e.param,
                msg: e.msg
            }
        })
        return res.status(422).json({ errors: errs });
    }

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

// router.get('/calendar/:year/:month/:date', (req, res) => {
//     console.log({ req: req.params });
// });

module.exports = router;