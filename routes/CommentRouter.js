const router = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

router.get('/all', controller.GetAllComments)
router.post(
  '/newcomment/:car_id',
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
router.get('all/:car_id', controller.GetAllCommentsForCar)
router.delete(
  '/delete/:comment_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteComment
)
router.delete('/delete/:comment_id', controller.DeleteComment)

module.exports = router
