const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const path = require('path');
// this cors thing is because our backend and front are running on diff servers and it wont let us make the form request since it uses front and back
const cors = require('cors'); 
const { authMiddleware } = require('./util/auth');
const { typeDefs, resolvers } = require('./schemas');
const cwd = process.cwd();


const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

//using cors to try and see if form will submit
app.use(cors()); 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// trying to create formRoutes???
const formRoutes = require('./routes/formRoutes'); // Imports the form routes module
app.use('/api/createRequest', formRoutes); // Uses the form routes middleware

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer();
