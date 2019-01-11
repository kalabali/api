const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,    
    GraphQLID,
    GraphQLSchema
} = graphql;

const CalendarMonth = require('./calendar_month.schema');

const MonthCalendar = require('../models/calendar_months');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        calendar: {
            type: CalendarMonth,
            args: {
                month: {type: GraphQLInt},
                year: {type: GraphQLInt}
            },
            async resolve(parent, args){
                const data = await MonthCalendar.findOne({
                    'year.masehi': args.year,
                    'month.index': args.month
                });
                console.log({data});
                const month = {
                    _id:`${data._id}`,
                    month: data.month,
                    year: data.year,
                    timestamp: data.timestamp,
                    weeks: data.weeks
                }
                console.log(month)
                return month;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})