// Local import
const db = require('../../db');
const queryStr = require('../../db/items/delete');

module.exports = function(params, cb) {
  console.log(`[model     ] received params from controller...`)
  console.log(`[model     ] send query to database...`);
  db.query(queryStr, params, function(err, rows) {
    cb(err, rows)
  })
}
