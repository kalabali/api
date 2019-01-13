const mongoose = require('mongoose');

const DateSchema = mongoose.Schema({
    timestamp: Date,
    date: Number,
    day_name: {
        balinese: String,
        bahasa: String,
        english: String
    },
    month: {
        index: Number,
        english: String,
        bahasa: String
    },
    year: {
        masehi: Number,
        caka: Number
    },
    penanggal_pangelong: {
        status: String,
        value: Number
    },
    wewaran: {
        ekawara : String,
        dwiwara : String,
        triwara : String,
        caturwara : String,
        pancawara : String,
        sadwara : String,
        saptawara : String,
        astawara : String,
        sangawara : String,
        dasawara : String
    },
    purnama_tilem : {
        status : Boolean,
        type : String
    },
    wuku : String,
    ingkel : String,
    sasih : String,
    urip : String,
    events : [ 
        {
            event_name : String,
            event_type : String
        }
    ]
});

const DateCalendar = mongoose.model('calendar_dates', DateSchema);

module.exports = DateCalendar;