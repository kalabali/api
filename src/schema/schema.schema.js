const graphql = require('graphql');

const {
    GraphQLObjectType,    
    GraphQLInt,    
    GraphQLSchema
} = graphql;

const CalendarMonth = require('./calendar_month.schema');
const CalendarDate = require('./calendar_date.schema');

const MonthCalendarModel = require('../models/calendar_months.model');
const DateCalendarModel = require('../models/calendar_dates.model');

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        calendar: {
            type: CalendarMonth,
            args: {
                month: {type: GraphQLInt},
                year: {type: GraphQLInt}
            },
            async resolve(parent, args){
                let data = await MonthCalendarModel.findOne({
                    'year.masehi': args.year,
                    'month.index': args.month
                });                
                if(!data){ //cannot find the month calendar
                    return null;
                }                
                return data;
            }
        },
        date: {
            type: CalendarDate,
            args: {
                month: {type: GraphQLInt},
                year: {type: GraphQLInt},
                date: {type: GraphQLInt}
            },
            async resolve(parent, args){
                let data = await DateCalendarModel.findOne({
                    date: args.date,
                    'year.masehi': args.year,
                    'month.index': args.month
                });

                if(!data){ // cannot found the date
                    return null;
                }

                const { id } = data;
                
                let { weeks } = await MonthCalendarModel.findOne({
                    'year.masehi': args.year,
                    'month.index': args.month
                });          
                      
                const week = weeks.find(week => {                    
                    let find = week.dates.findIndex(date => {                        
                        return date == id
                    });                    
                    console.log({find})
                    return find !== -1;
                })
                data.wuku = week.wuku;
                data.ingkel = week.ingkel;
                data.bhatara = week.bhatara;                
                return data;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: Query
});