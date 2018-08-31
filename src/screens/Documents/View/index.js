// @flow

import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Image,
  ScrollView,
  Text,
} from 'react-native';

import type { Navigator } from '../../../types/ReactNativeNavigation';
import NavigatorComponent from '../../../components/common/NavigatorComponent';
import { screen } from '../../../global/Screens';
import styles from './styles';
import i18n from '../../../global/i18n';
import { startDocumentEditing } from '../../../actions/documents';
import type { State as DocumentsState } from '../../../reducers/documents';
import Colors from '../../../global/colors';
import AssetsImages from '../../../global/AssetsImages';
import { imageSource } from '../../../utils/profile';
import { getOpenedDocument } from '../../../reducers/documents';

type Props = {
  /**
   * @desc React Native Navigation navigator object.
   */
  navigator: Navigator,
};

type Actions = {
  /**
   * @desc Function to initiate document creation.
   * @param id Id of document to edit.
   */
  startDocumentEditing: (id: number) => void,
}

const MORE_MENU_BUTTON = 'MORE_MENU_BUTTON';

class DocumentsViewScreen extends NavigatorComponent<Props & DocumentsState & Actions> {
  constructor(props) {
    super(props);

    this.props.navigator.setButtons({
      leftButtons: [{
        id: 'cancel',
        icon: AssetsImages.closeIcon,
        title: i18n.t('common.cancel'),
        buttonColor: Colors.navigationButtonColor,
      }],
      rightButtons: [{
        id: MORE_MENU_BUTTON,
        icon: AssetsImages.moreMenuIcon,
        buttonColor: Colors.navigationButtonColor,
      }],
    });
  }

  onNavBarButtonPress(id: string) {
    switch (id) {
      case MORE_MENU_BUTTON:
        break;
      case 'cancel':
        this.props.navigator.dismissModal();
        break;
      default:
        break;
    }
  }

  onSelectEdit = () => {
    const { openedDocumentId } = this.props;
    if (openedDocumentId == null) return;

    this.props.startDocumentEditing(openedDocumentId);
    this.props.navigator.showModal(screen('ENTER_PASSCODE_SCREEN'));
  };

  render() {
    const document = getOpenedDocument(this.props);
    if (document == null) return (<View />);

    return (
      <View style={styles.screenContainer}>
        <View style={styles.previewContainer}>
          <Image source={imageSource(document.data, document.mimeType)} style={styles.preview} resizeMode='contain' />
        </View>
        <View style={styles.metadataContainer}>
          <Text style={styles.headline}>
            {document.name}
          </Text>
          <Text style={styles.footnote}>
            {document.description}
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state.documents,
});

const mapDispatchToProps = dispatch => ({
  startDocumentEditing(documentId) {
    dispatch(startDocumentEditing(documentId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentsViewScreen);