const router = require('express').Router();
const postController = require('../controllers/post.controller');

router
  .route('/')
  .post(postController.create)
  .get(postController.readAll);

router
  .route('/:id')
  .get(postController.read)
  .patch(postController.update)
  .delete(postController.delete);
