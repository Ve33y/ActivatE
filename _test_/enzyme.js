import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SearchBar from '../src/components/SearchBar/SearchBar';
import Venue from '../src/components/SearchBar/Venue';

// Newer Enzyme versions require an adapter to a particular version of React
configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('LabeledText', () => {
    let wrapper;
    const props = {
      label: 'SearchBar',
    };

    beforeAll(() => {
      wrapper = shallow(<SearchBar {...props} />);
    });

    it('Renders a <form> tag with the label', () => {
      expect(wrapper.type()).toEqual('form');
      expect(wrapper.text()).toEqual('SearchBar');
    });
  });

  describe('SearchBar', () => {
    let wrapper;
    const props = {
      venue: '',
      location: '',
    };
    // TODO: Test the following:
    beforeAll(() => {
      wrapper = shallow(<SearchBar {...props} />);
    });
    it('displays all of its text props inside a LabeledText component', () => {
      expect(wrapper.find(LabeledText).text()).toMatch(props.index);
    });
  });
});

describe('React unit tests', () => {
  describe('LabeledText', () => {
    let wrapper;
    const props = {
      label: 'Venue',
    };
  });
  beforeAll(() => {
    wrapper = shallow(<Venue {...props} />);
  });

  it('Renders a <form> tag with the label', () => {
    expect(wrapper.type()).toEqual('li');
    expect(wrapper.text()).toEqual('name');
  });
});
