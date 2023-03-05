const router = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

router.get('/all', controller.GetAllComments)
router.post(
  '/newcomment',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateComment
)
router.put(
  '/update/:comment_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateComment
)

module.exports = router
