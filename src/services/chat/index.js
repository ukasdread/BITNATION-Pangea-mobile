// @flow

import { NativeModules } from 'react-native';
import Config from 'react-native-config';

import type { Profile } from '../../types/Account';

const { Panthalassa } = NativeModules;

export default class ChatService {
  static async uploadProfile(profile: string): Promise {
    console.log('profile upload: ', JSON.parse(profile));
    const URL = `${Config.CHAT_ENDPOINT}/profile`;
    await fetch(URL, {
      body: profile,
      headers: {
        'content-type': 'application/json',
        bearer: Config.CHAT_TOKEN,
      },
      method: 'PUT',
    });
    // await ChatService.uploadPreKeyBundle();
    const bundleCountResponse = await ChatService.getPreKeyBundleCount();
    if (bundleCountResponse.count === 0) {
      return ChatService.uploadPreKeyBundle();
    }
    return Promise.resolve({
      result: 'success',
    });
  }

  static async getProfile(publicKey: string): Promise {
    const URL = `${Config.CHAT_ENDPOINT}/profile/${publicKey}`;
    return fetch(URL, {
      headers: {
        'content-type': 'application/json',
        bearer: Config.CHAT_TOKEN,
      },
      method: 'GET',
    })
      .then(response => response.json())
      .then(response => JSON.parse(response.profile));
  }

  static async getPublicKey(): Promise<string> {
    const publicKey = await Panthalassa.PanthalassaIdentityPublicKey();
    return publicKey;
  }

  static async getPreKeyBundleCount(): Promise<number> {
    const publicKey = ChatService.getPublicKey();
    const URL = `${Config.CHAT_ENDPOINT}/pre-key-bundle/count/${publicKey}`;
    return fetch(URL, {
      headers: {
        'content-type': 'application/json',
        bearer: Config.CHAT_TOKEN,
      },
      method: 'GET',
    })
      .then(response => response.json());
  }

  static async getPreKeyBundle(publicKey: string): Promise {
    const URL = `${Config.CHAT_ENDPOINT}/pre-key-bundle/${publicKey}`;
    return fetch(URL, {
      headers: {
        'content-type': 'application/json',
        bearer: Config.CHAT_TOKEN,
      },
      method: 'GET',
    })
      .then(response => response.json());
  }

  static async uploadPreKeyBundle(): Promise {
    let preKeyBundle = await Panthalassa.PanthalassaNewPreKeyBundle();
    preKeyBundle = JSON.parse(preKeyBundle);
    console.log('pre key bundle: ', preKeyBundle);
    const URL = `${Config.CHAT_ENDPOINT}/pre-key-bundle`;
    return fetch(URL, {
      body: JSON.stringify(preKeyBundle.public_part),
      headers: {
        'content-type': 'application/json',
        bearer: Config.CHAT_TOKEN,
      },
      method: 'PUT',
    });
  }

  static async startChat(identityPublicKey: string, preKeyBundle: string): Promise<any> {
    const response = await Panthalassa.PanthalassaInitializeChat({ identityPublicKey, preKeyBundle });
    console.log('init chat: ', response);
    await ChatService.uploadMessage(JSON.parse(response).message);
    return response;
  }

  static async uploadMessage(message: string): Promise {
    const URL = `${Config.CHAT_ENDPOINT}/message`;
    return fetch(URL, {
      body: JSON.stringify(message),
      headers: {
        'content-type': 'application/json',
        bearer: Config.CHAT_TOKEN,
      },
      method: 'PUT',
    });
  }

  static async loadMessages(publicKey: string): Promise {
    const URL = `${Config.CHAT_ENDPOINT}/missing-messages/${publicKey}`;
    return fetch(URL, {
      headers: {
        'content-type': 'application/json',
        bearer: Config.CHAT_TOKEN,
      },
      method: 'GET',
    })
      .then(response => response.json());
  }
}
