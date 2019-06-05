const { ApolloServer, gql } = require('apollo-server-micro')
const { UsersAPI } = require('./UsersAPI');

const typeDefs = gql`
  type Query {
    user(id: ID!): User
  }

  type User {
    id: ID!
    name: String!
  }
`

const resolvers = {
  Query: {
    user(_, args, { dataSources }) {
      return dataSources.users.getUser(args.id);
    },
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    users: new UsersAPI(),
  }),
  introspection: true,
  playground: true
})

module.exports = server.createHandler();