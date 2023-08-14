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
