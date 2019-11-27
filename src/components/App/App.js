import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

const business = {
  image_url: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
  name: 'Four Barrel Coffee',
  // this is probably accessed as res.body.location.city, etc
  // removed category since it comes back as an array of more than one alias
  address1: '375 Valencia St',
  city: 'San Francisco',
  state: 'CA',
  zipCode: '10101',
  rating: 4.5,
  review_count: 90,
};

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business,
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ĀctivatĒ Æ</h1>
        <SearchBar />

      </div>
    );
  }
}

export default App;
