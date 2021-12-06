const router = require('express').Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, deleteFriend }
    = require('../../controllers/user-controller');

router
    .route('/api/users')
    .get(getAllUsers)
    .post(createUser)

router
    .route('/api/users/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

router
    .route('/api/users/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend)

module.exports = router;