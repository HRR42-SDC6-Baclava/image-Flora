const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');

const csvWriter = createCsvWriter({
  path:'images.csv',
  header: [
    {id:'id', title:'id'},
    {id:'name', title: 'names'},
    {id: 'imageUrls', title:'images'}
  ]
});

const records = [];
const seed = () => {
  for (let i = 0; i <= 100000; i++) {
    const name = faker.company.companyName();
    const imagePage = {
      id: i,
      name: name,
      imageUrls: []
    };

    //const numberPhotos = Math.floor(Math.random() * 200 + 5);

    for (let j = 100; j > 0; j--) {
      const num = Math.floor((Math.random() * 822 + 1));
      const url = `https://hrr42-fec5.s3-us-west-1.amazonaws.com/photo${num}.jpg`;
      imagePage.imageUrls.push(url);
    };
  records.push(imagePage);

}
  console.log(records);
};

seed();

csvWriter
  .writeRecords(records)
  .then(() => {
    console.log('csv file is set up successfully');
  })
  .catch((err) => {
    console.log(err)
  });


