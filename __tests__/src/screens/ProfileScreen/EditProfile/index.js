import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import EditProfileScreen from '../../../../../src/screens/ProfileScreen/EditProfile';

describe('ProfileScreenContainer', () => {
  let editProfileScreen;

  const initialStateMock = {};
  const storeMock = configureStore([]);
  const propsMock = {
    navigator: {
      setButtons: jest.fn(),
      setOnNavigatorEvent: jest.fn(),
    },
    editingUser: {
      _id: 1,
      name: 'Pangea',
      location: 'NYC',
      avatar: null,
    },
  };

  beforeEach(() => {
    editProfileScreen = shallow(<EditProfileScreen
      {...propsMock}
      store={storeMock(initialStateMock)}
    />);
  });

  test('Rendering', () => {
    expect(editProfileScreen).toMatchSnapshot();
  });
});