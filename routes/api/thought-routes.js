const router = require('express').Router();
const {
  addThought,
  removeThought,
  addReaction,
  removeReaction,
  getAllThoughts,
  updateThought
} = require('../../controllers/thought-controller');

// /api/thoughts/
router
  .route('/')
  .post(addThought)
  .get(getAllThoughts)

// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  //.put(addReaction)
  .delete(removeThought)
  .put(updateThought);

// /api/thoughts/<userId>/<thoughtId>/<replyId>
router.route('/:userId/:thoughtId/:replyId').delete(removeReaction);

module.exports = router;