const glob = require('glob');
const path = require('path');
const _merge = require('lodash/merge');

const resolvers = {
  Query: {},
  Mutation: {},
};

const resolverFiles = glob.sync(path.join(__dirname, 'graphql/**/*.+(directive|enum|field|input|mutation|scalar|query).js'));
resolverFiles.forEach((filePath) => {
  const { resolverMap } = require(filePath); // eslint-disable-line global-require, import/no-dynamic-require
  _merge(resolvers, resolverMap);
});

module.exports = {
  resolvers,
};
