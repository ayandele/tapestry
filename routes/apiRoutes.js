const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../controllers/user-controller.js');

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require('../controllers/thought-controller.js');

// Define user routes
router.route('/users').get(getAllUsers).post(createUser);
router.route('/users/:userId').get(getUserById).put(updateUser).delete(deleteUser);

// Define thought routes
router.route('/thoughts').get(getAllThoughts).post(createThought);
router.route('/thoughts/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

// Routes for adding and removing friends
router.route('/users/:userId/friends/:friendId')
  .post(addFriend)       // Add a friend to a user's friend list
  .delete(removeFriend); // Remove a friend from a user's friend list

module.exports = router;
