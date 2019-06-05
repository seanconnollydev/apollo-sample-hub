const resolverMap = {
  Post: {
    async user(post, args, { dataSources }) {
      return dataSources.exampleAPI.getUser(post.userId);
    },
  },
};

module.exports = {
  resolverMap,
};
