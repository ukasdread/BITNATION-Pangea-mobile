// @flow

import { MediaQueryStyleSheet } from 'react-native-responsive';

import Colors from 'pangea-common-reactnative/styles/colors';
import GlobalStyles from 'pangea-common-reactnative/styles';

const styles = MediaQueryStyleSheet.create({
  ...GlobalStyles,

  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  textColumn: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  icon: {
    marginLeft: -5,
    width: 35,
    marginRight: 20,
    marginTop: 10,
  },
  textInputContainer: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingLeft: 25,
  },
  pannelViewRow: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  textInputInContainer: {
    ...GlobalStyles.textInput,
    marginBottom: 0,
    marginTop: 0,
    borderBottomWidth: 0,
  },
  currencyNumber: { fontWeight: 'normal', color: Colors.BitnationDarkGrayColor },
  currencyPlaceholder: {
    ...GlobalStyles.currencyLarge,
    color: Colors.placeholderTextColor,
    marginTop: 6,
    fontSize: 15,
    marginRight: 12,
  },
  amountLabelText: {
    ...GlobalStyles.footnote,
    marginLeft: 5,
  },
  toLabelText: {
    ...GlobalStyles.footnote,
    marginLeft: 5,
    marginTop: 10,
  },
  toTextInput: {
    ...GlobalStyles.textInput,
    marginTop: 0,
  },
});
export default styles;
