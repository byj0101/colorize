const query = `
INSERT INTO users (userMail, userPassword, userName, tones_id, birthDate, gender)
VALUES (?, ?, ?, (SELECT id FROM tones WHERE toneName=?), ?, ?);
`
module.exports = query;
