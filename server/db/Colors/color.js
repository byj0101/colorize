const query = `
SELECT id, itemColor, itemHex FROM itemColors;
`
module.exports = query;

/* result
+----+--------------------+---------+
| id | itemColor          | itemHex |
+----+--------------------+---------+
|  1 | 신당동할매         | #224466 |
|  2 | 신당동며느리       | #25626  |
|  3 | 일산칼국수         | #663362 |
|  4 | 일산26남           | #663363 |
|  5 | 대전텃밭           | #221156 |
|  6 | 대전과수원         | #225533 |
|  7 | 울산바위           | #115533 |
|  8 | 울산아구찜         | #994422 |
|  9 | 어둠제천           | #13839  |
| 10 | 분당천당           | #587333 |
+----+--------------------+---------+
*/
