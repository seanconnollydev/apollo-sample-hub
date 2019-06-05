const resolverMap = {
  Query: {
    user(_, args, { dataSources }) {
      return dataSources.users.getUser(args.id);
    },
  },
};

module.exports = {
  resolverMap,
};
