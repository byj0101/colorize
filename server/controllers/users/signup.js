// Local import
const model = require('../../models/users/signup');

module.exports = function(req, res) {
  console.log('[userMail  ]',req.body.userMail);
  console.log('[password  ]',req.body.userPassword);
  console.log('[userName  ]',req.body.userName);
  console.log('[toneName  ]',req.body.toneName);
  console.log('[birthDate ]',req.body.birthDate);
  console.log('[gender    ]',req.body.gender);
  console.log(`[controller] received request from client...`);
  
  let userMail = req.body.userMail;
  let userPassword = req.body.userPassword;
  let userName = req.body.userName;
  let toneName = req.body.toneName;
  let birthDate = req.body.birthDate;
  let gender = req.body.gender;
  
  let params = [userMail, userPassword, userName, toneName, birthDate, gender];

  model(params, function(err, rows) {
    if (err) { throw err }
    else {
      console.log(`[controller] received response from model...`);
      res.end('signup success');
    }
  })
};
