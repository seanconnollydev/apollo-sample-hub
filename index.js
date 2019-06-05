const { ApolloServer, gql } = require('apollo-server-micro');
const { buildFederatedSchema } = require("@apollo/federation");
const { UsersAPI } = require('./UsersAPI');

const typeDefs = gql`
  type Query {
    user(id: ID!): User
  }

  type User @key(fields: "id") {
    id: ID!
    name: String!
  }
`

const resolvers = {
  Query: {
    user(_, args, { dataSources }) {
      return dataSources.users.getUser(args.id);
    },
  },
  User: {
    __resolveReference(object, other) {
      console.log('object', object);
      console.log('other', other);
     return { id: '1' };
   }
  }
}

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs,
      resolvers
    }
  ]),
  dataSources: () => ({
    users: new UsersAPI(),
  }),
  introspection: true,
  playground: true
})

module.exports = server.createHandler();