import { MediaQueryStyleSheet } from 'react-native-responsive';

import GlobalStyles from 'pangea-common-reactnative/styles';

const styles = MediaQueryStyleSheet.create({
  ...GlobalStyles,

  container: {

  },
  accessory: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  triangle: {
    fontSize: 20,
    color: 'gray',
  },
});

export default styles;
