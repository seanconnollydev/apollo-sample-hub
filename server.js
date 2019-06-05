const express = require('express');
const { createApolloServer } = require('./apollo/createApolloServer');
const server = express();

const port = process.env.PORT || 3000;

// Register middleware for Apollo server
const apolloServer = createApolloServer();
apolloServer.applyMiddleware({ app: server });

// Use the express server directly in dev mode to enable hot module reloading.
server.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Ready on port: ${port}`); // eslint-disable-line no-console
});