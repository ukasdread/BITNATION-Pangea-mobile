// @flow

import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import RNShake from 'react-native-shake';
import { ActionSheet } from 'native-base';

import styles from './styles';
import BackgroundImage from '../../components/common/BackgroundImage';
import FakeNavigationBar from '../../components/common/FakeNavigationBar';
import PanelView from '../../components/common/PanelView';
import i18n from '../../global/i18n';
import WalletPanel from './WalletPanel';
import ActivityPanel from './ActivityPanel';
import NationsPanel from './NationsPanel';
import { openNation } from '../../actions/nations';
import { screen } from '../../global/Screens';
import { addNewMessage } from '../../actions/activity';
import type { NationIdType } from '../../types/Nation';
import type { State } from '../../reducers';
import type { Navigator } from '../../types/ReactNativeNavigation';
import { getCurrentAccount } from '../../reducers/accounts';
import { openDApp } from '../../actions/dApps';

type Props = {
  /**
   * @desc React Native Navigation navigator object.
   */
  navigator: Navigator,
  openDApp: (publicKey: string) => void,
};

type Actions = {
  /**
   * @desc Callback on nation select.
   * @param {NationIdType} id Id of selected nation.
   */
  onSelectNation: (id: NationIdType) => void
};

type TestingModeProps = {
  /**
   * @desc Function to add dummy log activity message for testing.
   */
  onAddDummyMessage: () => void
};

class Dashboard extends Component<Props & Actions & State & TestingModeProps> {
  componentWillMount() {
    RNShake.addEventListener('shake', this.onShake);
  }

  componentWillUnmount() {
    RNShake.removeEventListener('shake', this.onShake);
  }

  onSelectNation = (id) => {
    this.props.onSelectNation(id);
    this.props.navigator.push(screen('NATION_DETAILS_SCREEN'));
  };

  onStartKeyConfirmation = () => {
    this.props.navigator.showModal({
      ...screen('CONFIRM_KEY_INSTRUCTION_SCREEN'),
      passProps: {
        shouldShowCancel: true,
      },
    });
  };

  onShake = async () => {
    if (__DEV__) {
      await new Promise(res => setTimeout(res, 2000));
    }

    const dApps = this.props.dApps.availableDApps;
    const options = dApps.map(dApp => (dApp.name + (this.props.dApps.startedDAppIds.includes(dApp.publicKey) === false ? ' (loading)' : '')));

    if (this.actionSheet !== null) {
      this.actionSheet._root.showActionSheet(
        {
          options: [
            ...options,
            i18n.t('common.cancel'),
          ],
          cancelButtonIndex: dApps.length,
          title: 'Select DApp to open',
        },
        (buttonIndex) => {
          switch (buttonIndex) {
            case dApps.length:
              return;
            default:
              if (this.props.dApps.startedDAppIds.includes(dApps[buttonIndex].publicKey)) {
                this.props.openDApp(dApps[buttonIndex].publicKey);
              } else {
                Alert.alert('DApp is not yet initialized. Try again in several seconds');
              }
          }
        },
      );
    }
  };

  actionSheet: any;

  render() {
    const currentAccount = getCurrentAccount(this.props.accounts);

    return (
      <View style={styles.screenContainer}>
        <BackgroundImage/>
        <FakeNavigationBar navBarHidden/>
        <View style={styles.gridContainer}>
          <View style={styles.activityPanelContainer}>
            <ActivityPanel
              style={styles.activityPanel}
              messages={this.props.activity.messages}
              testingMode={this.props.testingMode}
              onAddDummyMessage={this.props.onAddDummyMessage}
            />
          </View>
          <View style={styles.bottomContainer}>
            <NationsPanel
              nations={this.props.nations.nations}
              onSelectNation={this.onSelectNation}
              style={styles.nationsPanel}
              loadingInProgress={this.props.nations.inProgress}
            />
            <View style={styles.rightContainer}>
              <WalletPanel
                wallets={this.props.wallet.wallets || []}
                style={styles.walletPanel}
              />
              {
                (currentAccount === null || currentAccount.confirmedMnemonic === true) ?
                  <PanelView
                    title={i18n.t('screens.dashboard.warningPanel.title')}
                    style={styles.warningPanel}
                    titleStyle={styles.panelViewTitle}
                  >
                    <Text style={styles.warningPanelBody}>{i18n.t('screens.dashboard.warningPanel.body')}</Text>
                  </PanelView>
                  :
                  <PanelView
                    title={i18n.t('screens.dashboard.confirmKeyPanel.title')}
                    style={styles.confirmKeyPanel}
                    titleStyle={styles.alertPanelViewTitle}
                    buttonTitle={i18n.t('screens.dashboard.confirmKeyPanel.button')}
                    onButtonClick={this.onStartKeyConfirmation}
                  >
                    <Text style={styles.confirmKeyBody}>{i18n.t('screens.dashboard.confirmKeyPanel.body')}</Text>
                  </PanelView>
              }
            </View>
          </View>
        </View>
        <ActionSheet
          ref={(c) => {
            this.actionSheet = c;
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  onSelectNation(id) {
    dispatch(openNation(id));
  },
  onAddDummyMessage() {
    dispatch(addNewMessage('dummy message'));
  },
  openDApp(publicKey) {
    dispatch(openDApp(publicKey));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
