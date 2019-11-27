const client_id = 'NOUD0LPSHSM34YRM4GYGF1K0S5XQSJNRG3H1FKMVYFO4V5C0';
const client_secret = '0O2PS11FOHL23UESJTRGUMH412NGIKKWCO2DDO3S2QG5S31Y';


fetch(`https://api.foursquare.com/v2/venues/explore?client_id=${client_id}&client_secret=${client_secret}&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee`)
  .then((business) => {
    res.body = business;
  })
  .catch((error) => {
    console.error(error);
  });
