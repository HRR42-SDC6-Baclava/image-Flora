const cassandra = require('cassandra-driver');

var client = new cassandra.Client({
  contactPoints:['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'zagat'
});

client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Cassandra database connected');
  }
});

client.execute(`CREATE TABLE images (
  id int PRIMARY KEY,
  names text,
  imageURLs text
);`);

module.exports = client;