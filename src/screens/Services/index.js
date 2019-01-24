import { compose, nest, withHandlers, lifecycle, withState, withProps } from 'recompose';
import ServiceScreen from './view';
import Colors from '../../global/colors';
import AssetsImages from '../../global/AssetsImages';
import { screen } from '../../global/Screens';
import webView from './components/WebViewModal/view';

const MENU_BUTTON = 'MENU_BUTTON';

export default compose(
  withProps(() => ({
    selectedItem: { uri: 'https://github.com/Bit-Nation/GOVMARKET/blob/master/README.md' },
  })),
  withState('showModal', 'setShowModal', ''),
  withState('isShowWebViewModal', 'setIsShowWebViewModal', false),
  withHandlers({

    onPressHelp: ({ setShowModal, navigator }) => () => {
      setShowModal('');
      navigator.push({
        ...screen('CHAT_SCREEN'),
        passProps: {
          isBot: true,
        },
      });
    },
    onPressMainButtonDapp: ({ navigator }) => () => {
      navigator.push(screen('DOCUMENTS_LIST_SCREEN'));
    },
  }),
  lifecycle({
    componentWillMount() {
      this.props.navigator.setButtons({
        leftButtons: [
          {
            id: MENU_BUTTON,
            icon: AssetsImages.menuIcon,
            buttonColor: Colors.navigationButtonColor,
          },
        ],
        rightButtons: [],
      });
      this.props.navigator.setOnNavigatorEvent((event) => {
        if (event.type === 'NavBarButtonPress') {
          if (event.id === MENU_BUTTON) {
            this.props.navigator.toggleDrawer({
              side: 'left',
              animated: true,
            });
          }
        }
      });
    },
  }),
)(nest(ServiceScreen, webView));

