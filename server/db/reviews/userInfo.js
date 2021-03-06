const query = `
SELECT u.userName user, YEAR(NOW())-YEAR(u.birthDate) age, t.toneName tone
FROM users u, userDetails ud, tones t
WHERE t.id=ud.tones_id AND ud.id=u.userDetails_id AND u.id=?;
`
module.exports = query;
