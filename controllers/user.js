const User = require('../models/user');

exports.follow = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.user.id} });
    if (user) { // req.user.id가 followerId, req.body.id가 followingId
      await user.addFollowing(parseInt(req.params.id, 10));
      res.send('success');
    } else {
      res.status(400).send('no user');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};