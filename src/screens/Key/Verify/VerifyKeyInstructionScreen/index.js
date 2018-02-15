import React, { Component } from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';
import { screen } from '../../../../global/Screens';
import Button from '../../../../components/common/Button';
import FakeNavigationBar from '../../../../components/common/FakeNavigationBar';
import BackgroundImage from '../../../../components/common/BackgroundImage';
import PanelView from '../../../../components/common/PanelView';
import KeyBaseScreen from '../../KeyBaseScreen';
import { KEY_LENGTH } from '../../../../global/Constants';
import { changeEnteredMnemonic, removePrivateKey } from '../../../../actions/key';
import BodyParagraphs from '../../../../components/common/BodyParagraphs';
import i18n from '../../../../global/i18n';

class VerifyKeyInstructionScreen extends KeyBaseScreen {

  onNextButtonPressed() {
    this.props.navigator.push(screen('VERIFY_KEY_PROCESS_SCREEN'));
  }

  render() {
    return (
      <View style={styles.screenContainer}>
        <BackgroundImage/>
        <FakeNavigationBar/>

        <View style={styles.bodyContainer}>
          <PanelView style={styles.panelViewTransparent}
                     childrenContainerStyle={{ flex: 0, }}
                     buttonTitle={i18n.t('screens.verifyKey.startButton')}
                     onButtonClick={() => this.onNextButtonPressed()}
          >
            <BodyParagraphs paragraphs={i18n.t('screens.verifyKey.instructions', { KEY_LENGTH })}/>
          </PanelView>
        </View>
      </View>
    );
  }
}

VerifyKeyInstructionScreen.propTypes = {};

VerifyKeyInstructionScreen.defaultProps = {};

const mapStateToProps = state => ({
  ...state.key,
});

const mapDispatchToProps = dispatch => ({
  removePrivateKey() {
    dispatch(removePrivateKey());
  },
  changeMnemonic(mnemonic) {
    dispatch(changeEnteredMnemonic(mnemonic));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(VerifyKeyInstructionScreen);