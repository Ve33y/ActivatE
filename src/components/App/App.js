import React from 'react';
import './App.css';


import SearchBar from '../SearchBar/SearchBar';
import Venue from '../SearchBar/Venue';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      venues: [],
    };
  }

  handleSubmit(query) {
    this.getVenues(query);
  }

  componentDidMount() {
    this.getVenues('Outdoors & Recreation');
  }

  getLocation(callback) {
    navigator.geolocation.getCurrentPosition((location) => {
      callback(`${location.coords.latitude},${location.coords.longitude}`);
    });
  }

  getVenues(query) {
    const setVenueState = this.setState.bind(this);

    const venuesEndpoint = 'https://api.foursquare.com/v2/venues/explore?';

    this.getLocation((latlong) => {
      const params = {
        client_id: '',
        client_secret: '',
        limit: 25,
        query,
        v: '20130619',
        ll: latlong,
      };

      fetch(venuesEndpoint + new URLSearchParams(params), {
        method: 'GET',
      }).then((response) => response.json()).then((response) => {
        setVenueState({ venues: response.response.groups[0].items });
      });
    });
  }

  render() {
    const venueList = this.state.venues.map((item, i) => <Venue key={i} name={item.venue.name} />);

    return (
      <div>
        <SearchBar onSubmit={(value) => this.handleSubmit(value)} />
        <h4>
“The true New Yorker secretly believes that people living anywhere else have to be, in some sense, kidding.”
― John Updike

        </h4>
        <ul>
          {venueList}
        </ul>
      </div>
    );
  }
}

export default App;
