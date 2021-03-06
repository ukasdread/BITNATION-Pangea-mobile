// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { Navigator } from 'pangea-common-reactnative/ReactNativeNavigation-types';
import NavigatorComponent from '../../NavigatorComponent';
import { openNation } from '@pangea/nations/nations-actions';
import AccountAccessListScreen from './AccountAccessListScreen';
import { screen } from 'pangea-common-reactnative/Screens';
import { startAccountCreation, startRestoreAccountUsingMnemonic } from '@pangea/accounts/accounts-actions';
import { type State as AccountState } from '@pangea/accounts/accounts-reducers';
import type { Mnemonic } from 'pangea-common/types/Mnemonic-types';
import AccountsScreen from '../index';
import { loadSettings } from '@pangea/settings/settings-actions';

type Props = {
  /**
   * @desc React Native Navigation navigator object.
   */
  navigator: Navigator,
  /**
   * @desc Function to open an account
   * @param id Index of the account selected
   */
  openAccount: (id: string) => void,
};

type Actions = {
  /**
   * @desc Action to start account process.
   */
  startAccountCreation: () => void,
  /**
   * @desc Action to restore account with mnemonic.
   * @param {Mnemonic} mnemonic Mnemonic to be used.
   */
  startRestoreAccountUsingMnemonic: (mnemonic: Mnemonic) => void,
  /**
   * @desc Action to load settings for specific user.
   * @param {string} accountId Id of account whose settings needs to be loaded.
   * @param {function} callback Function that is called when loading is finished with boolean flag, which specifies if action was successful.
   */
  loadSettings: (accountId: string, callback: (success: boolean) => void) => void,
}

class AccountAccessContainer extends NavigatorComponent<Props & Actions & AccountState> {
  constructor(props) {
    super(props);

    this.props.navigator.setButtons({
      leftButtons: [],
      rightButtons: [],
    });
  }

  onSelectItem = (id) => {
    this.props.loadSettings(id, (success) => {
      if (success === false) {
        console.log('FATAL! Failed to open settings');
        return;
      }

      this.props.navigator.showModal({
        ...screen('ENTER_PASSCODE_SCREEN'),
        passProps: {
          accountId: id,
          onForget: () => AccountsScreen.onForgetPasswordAccount(this.props.navigator, id),
          onCancel: () => this.props.navigator.dismissModal(),
        },
        overrideBackPress: true,
      });
    });
  };
  render() {
    return (
      <AccountAccessListScreen
        onSelectItem={this.onSelectItem}
        onCreateAccount={() => AccountsScreen.onCreateAccount(this.props.navigator, this.props.startAccountCreation)}
        onRestoreAccount={() => AccountsScreen.onRestoreAccount(this.props.navigator, this.props.startRestoreAccountUsingMnemonic)}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => ({
  ...state.accounts,
});

const mapDispatchToProps = dispatch => ({
  openAccount(id) {
    dispatch(openNation(id));
  },
  startAccountCreation() {
    dispatch(startAccountCreation());
  },
  startRestoreAccountUsingMnemonic(mnemonic) {
    dispatch(startRestoreAccountUsingMnemonic(mnemonic));
  },
  loadSettings(id, callback) {
    dispatch(loadSettings(id, callback));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountAccessContainer);
