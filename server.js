const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/social-network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Use API routes
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
