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
  '/update',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateComment
)

module.exports = router
