const resolverMap = {
  Query: {
    post(_, args, { dataSources }) {
      return dataSources.exampleAPI.getPost(args.id);
    },
  },
};

module.exports = {
  resolverMap,
};
