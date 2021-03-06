/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
} from 'react-native';

import Colors from 'pangea-common-reactnative/styles/colors';
import NavigatorComponent from '../../../NavigatorComponent';
import FakeNavigationBar from 'pangea-common-reactnative/UI/FakeNavigationBar';

export default class QRCodeScannerScreen extends NavigatorComponent {
  static navigatorButtons = {
    leftButtons: [{
      id: 'cancel',
      title: 'Cancel',
      buttonColor: Colors.navigationButtonColor,
    }],
    rightButtons: [],
  };

  onNavBarButtonPress(id) {
    if (id === 'cancel') {
      this.props.navigator.dismissModal();
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <FakeNavigationBar />
        <Text>
          Android QR code scanner is not supported yet.
        </Text>
      </View>
    );
  }
}

QRCodeScannerScreen.propTypes = {
  onReadCode: PropTypes.func,
};
