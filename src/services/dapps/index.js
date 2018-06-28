// @flow

import { NativeModules } from 'react-native';

import type { DApp } from '../../types/DApp';
import { convertToPanthalassa } from '../../utils/mapping/dapp';

export default class DAppsService {
  static async startDApp(dApp: DApp): Promise<boolean> {
    const { Panthalassa } = NativeModules;
    return Panthalassa.PanthalassaStartDApp({
      dApp: JSON.stringify(convertToPanthalassa(dApp)),
    });
  }

  static async openDApp(publicKey: string, context: Object): Promise<boolean> {
    const { Panthalassa } = NativeModules;
    return Panthalassa.PanthalassaOpenDApp({
      id: publicKey,
      context: JSON.stringify(context),
    });
  }

  static async connectToDAppHost(address: string): Promise<boolean> {
    const { Panthalassa } = NativeModules;
    return Panthalassa.PanthalassaConnectToDAppDevHost({ address });
  }

  static async performDAppCallback(dappPublicKey: string, id: string, params: Object) {
    const { Panthalassa } = NativeModules;
    return Panthalassa.PanthalassaCallDAppFunction(dappPublicKey, id, params);
  }

  // async renderDAppMessage(publicKey: string, message: )
}
