const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,    
    GraphQLID
} = graphql;

const CalendarDateSchema = require('./calendar_date.schema');
const MonthData = require('./month_data.schema');
const YearData = require('./year_data.schema');
const CalendarDate = require('../models/calendar_dates.model');

const WeekData = new GraphQLObjectType({
    name: 'week',
    fields: () => ({
        wuku: {type: GraphQLString},
        ingkel: {type: GraphQLString},
        bhatara: {type: GraphQLString},
        dates: {
            type: new GraphQLList(CalendarDateSchema),
            args: {
                date: {type: GraphQLInt}
            },
            async resolve(parent, args){
                const { dates }= parent;
                let data = await CalendarDate.find({_id: {$in: dates}});
                if(args.date){
                    return data.filter(({date}) => date === args.date);
                }
                // console.log(data)
                // console.log({parent})
                // console.log({args})
                return data;
            }
        }
    })
});

const CalendarMonth = new GraphQLObjectType({
    name: 'calendar_month',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        month: {
            type: MonthData,            
        },
        year: {
            type: YearData
        },
        timestamp: {
            type: GraphQLString
        },
        weeks: {
            type: new GraphQLList(WeekData)            
        }
    })
})

module.exports = CalendarMonth;