const { ApolloServer } = require('apollo-server-express');
const { UsersAPI } = require('./data-sources/UsersAPI');
const { createSchema } = require('./createSchema');

const createApolloServer = () => {
  const schema = createSchema();

  return new ApolloServer({
    schema,
    dataSources: () => ({
      users: new UsersAPI(),
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
