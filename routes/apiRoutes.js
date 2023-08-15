const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/user-controller');

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require('../controllers/thought-controller');

// Define user routes
router.route('/users').get(getAllUsers).post(createUser);
router.route('/users/:userId').get(getUserById).put(updateUser).delete(deleteUser);

// Define thought routes
router.route('/thoughts').get(getAllThoughts).post(createThought);
router.route('/thoughts/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

module.exports = router;
const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../controllers/user-controller');

// Routes for /api/users
router.route('/users')
  .get(getAllUsers)       // Get all users
  .post(createUser);      // Create a new user

// Routes for /api/users/:userId
router.route('/users/:userId')
  .get(getUserById)      // Get a user by ID
  .put(updateUser)       // Update a user by ID
  .delete(deleteUser);   // Delete a user by ID

// Routes for adding and removing friends
router.route('/users/:userId/friends/:friendId')
  .post(addFriend)       // Add a friend to a user's friend list
  .delete(removeFriend); // Remove a friend from a user's friend list

module.exports = router;
