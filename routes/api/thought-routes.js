const router = require('express').Router();
const {
  addThought,
  removeThought,
  getAllThoughts,
  updateThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts/
router
  .route('/')
  .post(addThought)
  .get(getAllThoughts)

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .delete(removeThought)
  .put(updateThought);

// /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .put(addReaction)

// /api/thoughts/:thoughtId/reactions/reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;