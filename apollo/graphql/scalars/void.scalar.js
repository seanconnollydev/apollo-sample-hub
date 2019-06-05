const { GraphQLScalarType } = require('graphql');

const resolverMap = {
  Void: new GraphQLScalarType({
    name: 'Void',

    description: 'Represents a void return value',

    serialize() {
      return null;
    },

    parseValue() {
      return null;
    },

    parseLiteral() {
      return null;
    },
  }),
};

module.exports = {
  resolverMap,
};
