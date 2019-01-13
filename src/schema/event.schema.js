const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,    
} = graphql;

const EventSchema = new GraphQLObjectType({
    name: 'event',
    fields: () => ({
        event_name: {type: GraphQLString},
        event_type: {type: GraphQLString}
    })
})

module.exports = EventSchema;