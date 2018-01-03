import { MediaQueryStyleSheet } from 'react-native-responsive';
import Colors from '../../../global/Colors';

const styles = MediaQueryStyleSheet.create(
  {
    container: {
      flexDirection: 'column',
      flex: 1,
      paddingTop: 20,
    },
    scrollView: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
    },
    baseTextInput: {
      flex: 1,
      paddingLeft: 4,
      paddingRight: 4,
      paddingTop: 4,
      paddingBottom: 4,
      backgroundColor: Colors.getBitNationLightBlue(0.2),
    },

    //1st
    sendMoneyContainer: {
      flex: 1.2,
      backgroundColor: Colors.Transparent,
    },
    sendMoneyText: {
      height: 41,
      width: 174,
      color: '#FFFFFF',
      //  fontFamily:"SF Pro Display",
      fontSize: 30,
      fontWeight: 'bold',
      lineHeight: 41,
    },

    //2nd
    fromContainer: {
      flex: 2,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '5%',
      //backgroundColor:'red',
      backgroundColor: Colors.Transparent,
    },
    fromTextContainer: {
      flex: 1.5,
      backgroundColor: Colors.Transparent,
    },
    fromText: {
      height: 20,
      width: 40,
      color: '#4A90E2',
      //    fontFamily: "SF Pro Display",
      fontSize: 17,
      lineHeight: 20,
      marginRight: '5%'
    },
    ethereumContainer: {
      flex: 5,
      flexDirection: 'row',
      height: 68,
      //width: 271,
      backgroundColor: '#1B395C',
    },
    ethereumLogoContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: Colors.Transparent,
      justifyContent: 'center',
      marginLeft: '4%'
    },
    ethereumLogo: {
      position: 'absolute',
      zIndex: -1,
      height: 80,
      width: 50,
    },
    ethereumDetailsContainer: {
      flex: 6,
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'center',
      backgroundColor: Colors.Transparent,
      marginLeft: 20,
    },
    ethereumTextContainer: {
      height: 20,
      color: '#FFFFFF',
      backgroundColor: Colors.Transparent,
      fontSize: 17,
      lineHeight: 20,
      marginBottom: '1%',
      textAlign: 'left',
    },
    ethereumNumberContainer: {
      height: 16,
      color: '#72A4DE',
      backgroundColor: Colors.Transparent,
      fontSize: 14,
      lineHeight: 16,
      textAlign: 'left',
    },

    //3rd
    amountContainer: {
      flex: 1.4,
      flexDirection: 'row',
      backgroundColor: Colors.Transparent,
      marginTop: '5%'
    },
    amountTextContainer: {
      flex: 1.2,
      backgroundColor: Colors.Transparent,
    },
    amountText: {
      color: '#4A90E2',
      //    fontFamily: "SF Pro Display",
      fontSize: 17,
      //lineHeight: 20,
      marginRight: '8%'
    },
    amountBoxContainer: {
      flex: 2.2,
      borderWidth: 1,
      backgroundColor: Colors.Transparent,
      borderColor: Colors.BitnationBlue,
      justifyContent: 'center',
    },
    amountTextInput: {
      color: '#FFFFFF',
      fontSize: 16,
      lineHeight: 10,
      textAlign: 'right',
    },
    amountCurrencyContainer: {
      flex: 1.8,
      backgroundColor: Colors.Transparent,
    },
    amountCurrency: {
      color: '#4A90E2',
      //    fontFamily: "SF Pro Display",
      fontSize: 17,
      marginLeft: '5%',
      marginTop: '4%'
    },

    //4th
    toContainer: {
      flex: 1.4,
      flexDirection: 'row',
      marginTop: '5%',
      backgroundColor: Colors.Transparent,
    },
    toTextContainer: {
      flex: 1.5,
      backgroundColor: Colors.Transparent,
    },
    toText: {
      color: '#4A90E2',
      //    fontFamily: "SF Pro Display",
      fontSize: 17,
      //lineHeight: 20,
      marginRight: '8%',
    },
    ethAddressBoxContainer: {
      flex: 4.35,
      borderWidth: 1,
      borderColor: Colors.BitnationBlue,
      backgroundColor: Colors.Transparent,
      justifyContent: 'center'
    },
    ethTextInput: {
      color: '#FFFFFF',
      //  fontFamily: "SF Pro Text",
      fontSize: 16,
    },
    qrCodeContainer: {
      flex: 0.7,
      marginLeft: '2%',
      width: 35,
      height: 37,
      backgroundColor: Colors.Transparent,
    },
    qrLogo: {
      width: 35,
      height: 37,
      borderRadius: 10
    },

    //5th
    noteContainer: {
      flex: 3,
      flexDirection: 'row',
      marginTop: '5%',
      backgroundColor: Colors.Transparent,
    },
    noteTextContainer: {
      flex: 2,
      backgroundColor: Colors.Transparent,
    },
    noteText: {
      color: '#4A90E2',
      //    fontFamily: "SF Pro Display",
      fontSize: 17,
      marginRight: '6%'
    },
    noteBoxContainer: {
      flex: 7,
      borderWidth: 1,
      borderColor: Colors.BitnationBlue,
      justifyContent: 'flex-start',
      backgroundColor: Colors.Transparent,
    },
    descriptionTextInput: {
      color: 'white',
      fontSize: 16,
    },

    //6th
    calculatedEmptyContainer: {
      flex: 3,
      flexDirection: 'row',
      marginTop: '5%',
      backgroundColor: Colors.Transparent,
    },
    empty: {
      flex: 1.16,
    },
    calculatedContainer: {
      flex: 4,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: Colors.BitnationBlue,
      backgroundColor: 'rgba(27,57,92,0.5)',
    },
    calculatedTextContainer: {
      flexDirection: 'column',
      marginLeft: '22%',
      backgroundColor: Colors.Transparent,
    },
    CalculatedText: {
      height: 20,
      width: 110,
      color: '#007AFF',
      //  fontFamily: "SF Pro Text",
      fontSize: 17,
      fontWeight: 'bold',
      lineHeight: 20,
      marginBottom: '5%',
      marginTop: '5%'

    },
    calculatedNumberContainer: {
      flexDirection: 'column',
      marginLeft: '43%',
      backgroundColor: Colors.Transparent,
    },
    calculatedCurrencyContainer: {
      flexDirection: 'column',
      marginLeft: '31%',
    },

    //7th
    sendContainer: {
      marginTop: 20,
      marginBottom: 20,
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sendButton: {
      width: 130,
    },

  });
export default styles;
