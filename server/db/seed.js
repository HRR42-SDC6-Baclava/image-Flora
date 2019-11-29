const Restaurants = require('./restaurant.js');

const populate = () => {
  const data = [];

  for (let i = 1; i <= 100; i++) {
    const restaurant = {
      id: i,
      imageUrls: [],
    }

    let numberPhotos = Math.floor(Math.random() * 12 + 4);

    for (let j = numberPhotos; j > 0; j--) {
      const num = Math.floor((Math.random() * 822 + 1));
      const url = `https://hrr42-fec5.s3-us-west-1.amazonaws.com/photo${num}.jpg`;
      restaurant.imageUrls.push(url);
    }
    data.push(restaurant);
  }

  Restaurants.insertMany(data)
    .then(() => console.log('Database populated'))
    .catch(err => console.log(err));

};

populate();