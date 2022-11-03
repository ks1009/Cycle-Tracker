const express = require('express');
const models = require('../models/models');
const router = express.Router();

// POST
// post to http://localhost:3000/api
router.post('/', async (req, res) => {
  try {
    let post = new models.Cycle(req.body);
    post = await post.save();
    res.status(200).json({
      status: 200,
      data: post,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

// LIST ALL POSTS
// list all the posts created to http://localhost:3000/api/list
router.get('/list', async (req, res) => {
  try {
    let posts = await models.Cycle.find();
    res.status(200).json({
      status: 200,
      data: posts,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

// FETCH ONE POST
// need to make the id into an easier number
// Ex. if getting this id it will find -> http://localhost:3000/api/6362c543041e20773f8accb0
// will need to pick a diff id bc deleted already
router.get('/:postId', async (req, res) => {
  try {
    let post = await models.Cycle.findOne({
      _id: req.params.postId,
    });
    if (post) {
      res.status(200).json({
        status: 200,
        data: post,
      });
    }
    res.status(400).json({
      status: 400,
      message: 'No post found',
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

// UPDATE
// need to make the id into an easier number
// Ex. if getting updating post id  ->
// http://localhost:3000/api/6362c543041e20773f8accb0
// will need to pick a diff id bc deleted already
router.put('/:postId', async (req, res) => {
  try {
    let post = await models.Cycle.findByIdAndUpdate(
      req.params.postId,
      req.body,
      {
        new: true,
      }
    );
    if (post) {
      res.status(200).json({
        status: 200,
        data: post,
      });
    }
    res.status(400).json({
      status: 400,
      message: 'No post found',
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

// DELETE
// http://localhost:3000/api/6362c543041e20773f8accb0
// will need to pick a diff id bc deleted already
router.delete('/:postId', async (req, res) => {
  const { postId } = req.params;
  try {
    let post = await models.Cycle.findByIdAndRemove(req.params.postId);
    if (post) {
      res.status(200).json({
        status: 200,
        message: 'Post deleted successfully',
      });
    } else {
      res.status(400).json({
        status: 400,
        message: 'No post found',
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

module.exports = router;
