const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,    
    GraphQLID
} = graphql;

const CalendarMonth = new GraphQLObjectType({
    name: 'calendar_month',
    fields: () => ({
        _id: {
            type: GraphQLID
        },
        month: {
            type: new GraphQLObjectType({
                name: 'month',
                fields: () => ({
                    index: {type: GraphQLInt},
                    bahasa: {type: GraphQLString},
                    english: {type: GraphQLString}
                })
            })
        },
        year: {
            type: new GraphQLObjectType({
                name: 'year',
                fields: () => ({
                    masehi: {type: GraphQLInt},
                    caka: {type: GraphQLInt}
                })
            })
        },
        timestamp: {
            type: GraphQLString
        },
        weeks: {
            type: new GraphQLList(new GraphQLObjectType({
                name: 'week',
                fields: () => ({
                    wuku: {type: GraphQLString},
                    ingkel: {type: GraphQLString},
                    bhatara: {type: GraphQLString}
                })
            }))
        }
    })
})

module.exports = CalendarMonth;