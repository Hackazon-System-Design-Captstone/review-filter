const pg = require('pg');

const client = new pg.Client({
  user: 'jun',
  host: 'ec2-54-90-167-78.compute-1.amazonaws.com',
  database: 'sdc',
  password: 'sd7763sd',
  port: 5432,
});
client.connect();
client.query(
  `CREATE TABLE products(
    id INTEGER PRIMARY KEY, 
    productName VARCHAR(40) not null
  )`
)
client.query(
  `CREATE TABLE reviews(
    idd SERIAL,
    productId INTEGER REFERENCES products(id) ON DELETE RESTRICT, 
    reviewId INTEGER, 
    username TEXT, 
    stars SMALLINT, 
    title TEXT, 
    text TEXT, 
    timestamp TEXT, 
    numHelpful SMALLINT, 
    verifiedPurchase BOOLEAN, 
    imageUrl TEXT,
    PRIMARY KEY (idd, reviewId)
  )`
);

// productId, reviewId, username, stars, title, text, timestamp, numHelpful, verifiedPurchase, imageUrl

// let getReviews = (productId, cb) => {
//   client.query(`SELECT * FROM products INNER JOIN reviews ON reviews.productId = products.id WHERE id=${productId}`, (err, res) => {
//     if (err) {
//       cb(err, null);
//     }
//     cb(null, res.rows);
//   });
// }

// let incrementHelpfulness = (idd, cb) => {
//   client.query(`SELECT numhelpful FROM reviews WHERE idd = ${idd}`, (err, res) => {
//     client.query(`UPDATE reviews SET numhelpful = ${res.rows[0].numhelpful+1} WHERE idd = ${idd}`, (err, result) => {
//       cb(err, res.rows[0]);
//     });
//   });
// }

// let createReview = (data, cb) => {
//   console.log(data, typeof data.username);
//   client.query(`INSERT INTO reviews (productId, reviewId, username, stars, title, text, timestamp, numHelpful, verifiedPurchase, imageUrl) VALUES (${data.productId}, ${data.reviewId}, '${data.username}', ${data.stars}, '${data.title}', '${data.text}', '${data.timestamp}', ${data.numHelpful}, ${data.verifiedPurchase}, '${data.imageUrl}');`, (err, res) => {
//     console.log(err);
//     cb(err, null);
//   });
// }

// exports.getReviews = getReviews;
// exports.incrementHelpfulness = incrementHelpfulness;
// exports.createReview = createReview;