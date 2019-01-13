const graphql = require('graphql');

const {
    GraphQLObjectType,    
    GraphQLInt,    
} = graphql;

const YearData = new GraphQLObjectType({
    name: 'year',
    fields: () => ({
        masehi: {type: GraphQLInt},
        caka: {type: GraphQLInt}
    })
});

module.exports = YearData;