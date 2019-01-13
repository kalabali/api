const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,        
} = graphql;

const EventSchema = require('./event.schema');
const MonthData = require('./month_data.schema');
const YearData = require('./year_data.schema');

const DayNameData = new GraphQLObjectType({
    name: 'day_name',
    fields: () => ({
        balinese: {
            type: GraphQLString
        },
        bahasa: {
            type: GraphQLString
        },
        english: {
            type: GraphQLString
        }
    })
});

const WewaranData = new GraphQLObjectType({
    name: 'wewaran',
    fields: () => ({
        ekawara: {
            type: GraphQLString
        },
        dwiwara: {
            type: GraphQLString
        },
        triwara: {
            type: GraphQLString
        },
        caturwara: {
            type: GraphQLString
        },
        pancawara: {
            type: GraphQLString
        },
        sadwara: {
            type: GraphQLString
        },
        saptawara: {
            type: GraphQLString
        },
        astawara: {
            type: GraphQLString
        },
        sangawara: {
            type: GraphQLString
        },
        dasawara: {
            type: GraphQLString
        },
    })
});

const PenanggalPangelong = new GraphQLObjectType({
    name: 'penanggal_pangelong',
    fields: () => ({        
        status: {
            type: GraphQLString
        },
        value: {
            type: GraphQLInt
        }
    })
});

const CalendarDate = new GraphQLObjectType({
    name: 'date',
    fields: () => ({
        id: {
            type: GraphQLString
        },
        timestamp: {
            type: GraphQLString
        },
        date: {
            type: GraphQLInt
        },
        month: {
            type: MonthData
        },
        year: {
            type: YearData
        },
        day_name: {
            type: DayNameData
        },
        wewaran: {
            type: WewaranData
        },
        penanggal_pangelong: {
            type: PenanggalPangelong
        },
        wuku: {
            type: GraphQLString
        },
        ingkel: {
            type: GraphQLString
        },
        bhatara: {
            type: GraphQLString
        },
        sasih: {
            type: GraphQLString
        },
        urip: {
            type: GraphQLString
        },
        events: {
            type: new GraphQLList(EventSchema),
            args: {
                event_type: {type: GraphQLString}
            },
            resolve(parent, args){
                if(args.event_type){
                    return parent.events.filter(event => event.event_type === args.event_type);
                }                
                return parent.events;
            }
        }
    })
});

module.exports = CalendarDate;