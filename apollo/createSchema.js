const _compact = require('lodash/compact');
const _concat = require('lodash/concat');
const fs = require('fs');
const glob = require('glob');
const gql = require('graphql-tag');
const { makeExecutableSchema } = require('graphql-tools');
const path = require('path');
const { resolvers } = require('./resolvers');

let definitions = [];

const schemaFiles = glob.sync(path.join(__dirname, 'graphql/**/*.gql'));
schemaFiles.forEach((filePath) => {
  const schema = gql(fs.readFileSync(filePath, 'utf8'));
  definitions = _compact(_concat(definitions, schema));
});

const baseSchema = `
  type Query
  type Mutation

  schema {
    query: Query
    mutation: Mutation
  }
`;

const createSchema = () => makeExecutableSchema({
  typeDefs: [baseSchema, ...definitions],
  resolvers,
});

module.exports = {
  createSchema,
};
