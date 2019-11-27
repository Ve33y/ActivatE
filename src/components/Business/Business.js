import React from 'react';
import './Business.css';

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

class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src={this.props.business.image_url} alt="" />
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.business.location.address1}</p>
            <p>{this.props.business.location.city}</p>
            <p>{`${this.props.business.location.state} ${this.props.business.location.zipCode}`}</p>
          </div>
          <div className="Business-reviews">
            <h3 className="rating">{`${this.props.usiness.rating} stars`}</h3>
            <p>{`${this.props.business.review_count} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
