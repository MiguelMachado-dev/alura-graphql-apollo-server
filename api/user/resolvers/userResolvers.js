const userResolvers = {
  Query: {
    users: (root, args, { dataSources }) => dataSources.userAPI.getUsers(),
    user: (root, { id }, { dataSources }) => dataSources.userAPI.getUserById(id),
  },
};

module.exports = userResolvers;
