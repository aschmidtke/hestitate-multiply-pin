const router = require('express').Router()
const { getAllThoughts, getThoughtById, createThought, updateThoughtById, deleteThought, createReaction, deleteReaction }
    = require('../../controllers/thought-controller');

router
    .route('/api/thoughts')
    .get(getAllThoughts)
    .get(getThoughtById)
    .post(createThought)
    .put(updateThoughtById)
    .delete(deleteThought)

router
    .route('/api/thought/:thoughtId/reactions')
    .post(createReaction)
    .delete(deleteReaction)

module.exports = router;