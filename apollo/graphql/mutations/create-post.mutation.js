const resolverMap = {
  Mutation: {
    createPost(_, args, { dataSources }) {
      return dataSources.exampleAPI.createPost(args.title);
    },
  },
};

module.exports = {
  resolverMap,
};
