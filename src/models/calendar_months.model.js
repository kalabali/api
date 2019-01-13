const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

// const Year = mongoose.Schema({
//     masehi: Number,
//     caka: Number
// });

const MonthSchema = mongoose.Schema({
    month: {
        index: Number,
        english: String,
        bahasa: String
    },
    year: {
        masehi: Number,
        caka: Number
    },
    timestamp: Date,
    weeks: [
        {
            wuku: String,
            ingkel: String,
            bhatara: String,
            dates: [{ type: ObjectId, ref: 'calendar_dates' }]
        }
    ]
});


const MonthCalendar = mongoose.model('calendar_months', MonthSchema);

module.exports = MonthCalendar;