const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,    
} = graphql;

const MonthData = new GraphQLObjectType({
    name: 'month',
    fields: () => ({
        index: {type: GraphQLInt},
        bahasa: {type: GraphQLString},
        english: {type: GraphQLString}
    })
});

module.exports = MonthData;