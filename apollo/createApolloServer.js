const { ApolloServer } = require('apollo-server-express');
const { ExampleAPI } = require('./data-sources/ExampleAPI');
const { createSchema } = require('./createSchema');

const createApolloServer = () => {
  const schema = createSchema();

  return new ApolloServer({
    schema,
    dataSources: () => ({
      exampleAPI: new ExampleAPI(),
    }),
    debug: process.env.NODE_ENV !== 'production',
    tracing: true,
    cacheControl: true,
    introspection: true,
  });
};

module.exports = {
  createApolloServer,
};
