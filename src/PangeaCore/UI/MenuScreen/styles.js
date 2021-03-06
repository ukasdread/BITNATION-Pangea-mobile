// @flow

import { MediaQueryStyleSheet } from 'react-native-responsive';
import { Platform } from 'react-native';
import Colors from 'pangea-common-reactnative/styles/colors';
import GlobalStyles from 'pangea-common-reactnative/styles';

const styles = MediaQueryStyleSheet.create({
  ...GlobalStyles,

  container: {
    ...GlobalStyles.screenContainer,
  },
  containerMenu: {
    flex: 1,
    backgroundColor: Colors.gray20,
  },
  avatarView: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.BitnationDarkGrayColor,
  },
  nameText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: Colors.white,
    alignSelf: 'center',
  },
  publicKey: {
    marginTop: 10,
    marginHorizontal: 10,
    width: 240,
  },
  publicKeyText: {
    fontFamily: 'Roboto',
    fontSize: 13,
    color: Colors.white,
    textAlign: 'center',
  },
  actionButton: {
    borderRadius: 10,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.BitnationActionColor,
    marginTop: 5,
  },
  avatarLarge: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  navigateButtonView: {
    flex: 0.6,
    alignItems: 'center',
  },
  navigateButtonStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.BitnationDarkGrayColor,
  },
  wrapTextView: {
    flex: 0.85,
  },
  navigateTextStyle: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: Colors.white,
    paddingHorizontal: 10,
  },
  wrapIconView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 0.15,
  },
  iconStyle: {
    fontSize: 25,
    color: Colors.white,
    paddingTop: 5,
  },
  closeButtonStyle: {
    fontSize: 30,
    color: Colors.white,
    alignSelf: 'flex-start',
    padding: 16,
    marginTop: (Platform.OS === 'ios' ? 22 : 0),
  },
});

export default styles;
