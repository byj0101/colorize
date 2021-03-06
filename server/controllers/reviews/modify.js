// Local import
const model = require('../../models/reviews/modify');

module.exports = function(req, res) {
  console.log('[review_id ]',req.body.review_id);
  console.log('[photo     ]',req.body.reviewPhoto);
  console.log('[rating    ]',req.body.reviewRating);
  console.log('[message   ]',req.body.reviewMessage);
  console.log(`[controller] received request from client...`);
  
  let review_id = req.body.review_id;
  let reviewPhoto = req.body.reviewPhoto;
  let reviewRating = req.body.reviewRating;
  let reviewMessage = req.body.reviewMessage;
  
  let params = [reviewPhoto, reviewRating, reviewMessage, review_id];

  model(params, function(err, rows) {
    if (err) { throw err }
    else {
      console.log(`[controller] received response from model...`);
      res.end('selected review is updated');
    }
  })
};
