const userResolvers = {
  Query: {
    users: (root, args, { dataSources }) => dataSources.userAPI.getUsers(),
  },
};

module.exports = userResolvers;
