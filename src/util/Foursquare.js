const client_id = '';
const client_secret = '';


fetch(`https://api.foursquare.com/v2/venues/explore?client_id=${client_id}&client_secret=${client_secret}&v=20180323&limit=1&ll=40.7243,-74.0018`)
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error);
  });
