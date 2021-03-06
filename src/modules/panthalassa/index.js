// @flow

import { NativeModules } from 'react-native';

const { Panthalassa } = NativeModules;

/**
 * @desc Stops Panthalassa instance
 * @returns {Promise<*>} Boolean response about operation's state
 */
export async function panthalassaStop(): Promise<boolean> {
  return Panthalassa.PanthalassaStop();
}

/**
 * @desc Starts Panthalassa instance from configurationStore and password as data
 * @param {string} config Account's ConfigurationStore
 * @param {string} password Account's password
 * @returns {Promise<*>} Boolean response about operation's result
 */
export async function panthalassaStart(config: string, password: string): Promise<boolean> {
  return Panthalassa.PanthalassaStart({ config, password });
}

/**
 * @desc Starts Panthalassa instance from configurationStore and mnemonic phrase as data
 * @param {string} config Account's ConfigurationStore
 * @param {string} mnemonic Account's mnemonic phrase to recover it
 * @returns {Promise<*>} Boolean response about operation's result
 */
export async function panthalassaStartFromMnemonic(config: string, mnemonic: string): Promise<boolean> {
  return Panthalassa.PanthalassaStartFromMnemonic({ config, mnemonic });
}

/**
 * @desc Validates if a mnemonic phrase is valid
 * @param {string} mnemonic Phrase to restore account
 * @returns {Promise<*>} Boolean response about operation's result
 */
export async function panthalassaIsValidMnemonic(mnemonic: string): Promise<boolean> {
  return Panthalassa.PanthalassaIsValidMnemonic(mnemonic);
}

/**
 * @desc Creates new accounts keys (Account ConfigurationStore) from password as data
 * @param {string} password Account's password
 * @returns {Promise<*>} {string} Account's new account ConfigurationStore
 */
export async function panthalassaNewAccountKeys(password: string): Promise<string> {
  return Panthalassa.PanthalassaNewAccountKeys({
    pw: password,
    pwConfirm: password,
  });
}

/**
 * @desc Creates new accounts keys (Account ConfigurationStore) from mnemonic/password as data
 * @param {string} mnemonic Account's mnemonic
 * @param {string} password Account's password
 * @returns {Promise<*>} {string} Account's new account ConfigurationStore
 */
export async function panthalassaNewAccountKeysFromMnemonic(mnemonic: string, password: string): Promise<string> {
  return Panthalassa.PanthalassaNewAccountKeysFromMnemonic({
    mne: mnemonic,
    pw: password,
    pwConfirm: password,
  });
}

/**
 * @desc Exports Account's accounts keys (Account ConfigurationStore) from password as data
 * @param {string} password Account's password
 * @returns {Promise<*>} {string} Account's account ConfigurationStore
 */
export async function panthalassaExportAccountStore(password: string): Promise<string> {
  return Panthalassa.PanthalassaExportAccountStore({
    pw: password,
    pwConfirm: password,
  });
}

/**
 * @desc Retrieves Account's Ethereum private key
 * @returns {Promise<*>} {string} Account's Ethereum private key
 */
export async function panthalassaEthPrivateKey(): Promise<string> {
  return Panthalassa.PanthalassaEthPrivateKey();
}

/**
 * @desc Converts Account's Ethereum public key to an address
 * @param {string} publicKey User's public key
 * @returns {Promise<*>} {string} Account's Ethereum public key
 */
export async function panthalassaEthPubToAddress(publicKey: string): Promise<string> {
  return Panthalassa.PanthalassaEthPubToAddress({
    pub: publicKey,
  });
}

/**
 * @desc Retrieves Account's Ethereum address
 * @returns {Promise<*>} {string} An address
 */
export async function panthalassaEthAddress(): Promise<string> {
  return Panthalassa.PanthalassaEthAddress();
}

/**
 * @desc Retrieves Account's public key
 * @returns {Promise<*>} {string} Account's public key
 */
export async function panthalassaGetIdentityPublicKey(): Promise<string> {
  return Panthalassa.PanthalassaGetIdentityPublicKey();
}

/**
 * @desc Creates Account's signed profile
 * @param {string} name Profile's name to show
 * @param {string} location Profile's location
 * @param {string} image Profile's avatar
 * @param {string} keyManagerStore Account's ConfigurationStore
 * @param {string} password Account's password
 * @returns {Promise<*>} {string} Account's signed profile
 */
export async function panthalassaSignProfileStandAlone(name: string, location: string, image: string, keyManagerStore: string, password: string): Promise<string> {
  return Panthalassa.PanthalassaSignProfileStandAlone({
    name,
    location,
    image,
    keyManagerStore,
    password,
  });
}

/**
 * @desc Updates information to the Account's profile
 * @param {string} name Profile's name to show
 * @param {string} location Profile's location
 * @param {string} image Profile's avatar
 * @returns {Promise<*>} {
 */
export async function panthalassaSignProfile(name: string, location: string, image: string): Promise<string> {
  return Panthalassa.PanthalassaSignProfile({
    name,
    location,
    image,
  });
}

/**
 * @desc Retrieves Account's mnemonic phrase
 * @returns {Promise<*>} {string} Mnemonic phrase
 */
export async function panthalassaGetMnemonic(): Promise<string> {
  return Panthalassa.PanthalassaGetMnemonic();
}

/**
 * @desc Starts DApp's VM
 * @param {string} dAppSingingKeyStr DApp's Identifier
 * @param {string} timeout Value for timeout operation
 * @returns {Promise<*>} Boolean response about operation's result
 */
export async function panthalassaStartDApp(dAppSingingKeyStr: string, timeout: number): Promise<boolean> {
  return Panthalassa.PanthalassaStartDApp({
    dAppSingingKeyStr,
    timeout,
  });
}

/**
 * @desc Opens an specific Dapp
 * @param {string} id DApp's Id
 * @param {string} context TODO
 * @returns {Promise<*>} Boolean response about operation's result
 */
export async function panthalassaOpenDApp(id: string, context: string): Promise<boolean> {
  return Panthalassa.PanthalassaOpenDApp({
    id,
    context,
  });
}

/**
 * @desc Calls a DApp's function over th VM
 * @param {string} signingKey TODO
 * @param {string} id TODO
 * @param {string} args TODO
 * @returns {Promise<*>} Boolean response about operation's result
 */
export async function panthalassaCallDAppFunction(signingKey: string, id: number, args: string): Promise<boolean> {
  return Panthalassa.PanthalassaCallDAppFunction({
    signingKey,
    id,
    args,
  });
}

/**
 * @desc Connect the host to DApp development server
 * @param {string} address Server address
 * @returns {Promise<*>} Boolean response about operation's result
 */
export async function panthalassaConnectToDAppDevHost(address: string): Promise<boolean> {
  return Panthalassa.PanthalassaConnectToDAppDevHost({ address });
}

/**
 * @desc TODO
 * @param {string} signingKey TODO
 * @param {string} payload TODO
 * @returns {Promise<*>} {string}
 */
export async function panthalassaRenderMessage(signingKey: string, payload: string): Promise<string> {
  return Panthalassa.PanthalassaRenderMessage({
    signingKey,
    payload,
  });
}

/**
 * @desc TODO
 * @param {string} id TODO
 * @param {string} data TODO
 * @param {string} responseError TODO
 * @param {number} timeout TODO
 * @returns {Promise<*>} {string} TODO
 */
export async function panthalassaSendResponse(id: string, data: string, responseError: string, timeout: number): Promise<boolean> {
  return Panthalassa.PanthalassaSendResponse({
    id,
    data,
    responseError,
    timeout,
  });
}

/**
 * @desc Brings all chat conversation from the account
 * @returns {Promise<*>} string response with all the account's conversations
 */
export async function panthalassaAllChats(): Promise<string> {
  return Panthalassa.PanthalassaAllChats();
}

/**
 * @desc TODO
 * @param {string} address TODO
 * @returns {Promise<*>} Boolean response about operation's result
 */
export async function panthalassaConnectLogger(address: string): Promise<boolean> {
  return Panthalassa.PanthalassaConnectLogger({ address });
}

/**
 * @desc Brings all DApps available
 * @returns {Promise<*>} string response with all DApps available for the account
 */
export async function panthalassaDApps(): Promise<string> {
  return Panthalassa.PanthalassaDApps();
}

/**
 * @desc Retrieves Account's public key
 * @returns {Promise<*>} string Account's public key
 */
export async function panthalassaIdentityPublicKey(): Promise<string> {
  return Panthalassa.PanthalassaIdentityPublicKey();
}

/**
 * @desc TODO
 * @param {number} chatID TODO
 * @param {string} startStr TODO
 * @param {number} amount TODO
 * @returns {Promise<*>} {string} TODO
 */
export async function panthalassaMessages(chatID: number, startStr: string, amount: number): Promise<string> {
  return Panthalassa.PanthalassaMessages({
    chatID,
    startStr,
    amount,
  });
}

/**
 * @desc Sends a message to ? TODO
 * @param {number} chatID Receiver of the message
 * @param {string} message Message to send
 * @returns {Promise<*>} Boolean response about operation's result
 */
export async function panthalassaSendMessage(chatID: number, message: string): Promise<boolean> {
  return Panthalassa.PanthalassaSendMessage({
    chatID,
    message,
  });
}

/**
 * @desc TODO
 * @param {string} level TODO
 * @returns {Promise<*>} Boolean response about operation's result
 */
export async function panthalassaSetLogger(level: string): Promise<boolean> {
  return Panthalassa.PanthalassaSetLogger({ level });
}

/**
 * @desc Stops the execution of a DApp
 * @param {string} dAppSingingKeyStr Key of the DApp
 * @returns {Promise<*>} Boolean response about operation's result
 */
export async function panthalassaStopDApp(dAppSingingKeyStr: string): Promise<boolean> {
  return Panthalassa.PanthalassaStopDApp({ dAppSingingKeyStr });
}

/**
 * @desc Marks all messages in conversation as readed
 * @param {number} chatID Sender of the messages
 * @returns {Promise<*>} Boolean response about operation's result
 */
export async function panthalassaMarkMessagesAsRead(chatID: number): Promise<boolean> {
  return Panthalassa.PanthalassaMarkMessagesAsRead({ chatID });
}

/**
 * @desc TODO
 * @param {string} command TODO
 * @param {Object} payload TODO
 * @returns {string} TODO
 */
export async function panthalassaCall(command: string, payload: Object = {}): Promise<string> {
  return Panthalassa.PanthalassaCall({
    command,
    payload: JSON.stringify(payload),
  });
}

/**
 * @desc Add users to a Multiuser Chat
 * @param {string} users Users for the Chat
 * @param {number} chatID Id for the Chat
 * @returns {Promise<*>} Boolean response about operation's result
 */
export async function panthalassaAddUsersToGroupChat(users: string, chatID: number): Promise<boolean> {
  return Panthalassa.PanthalassaAddUsersToGroupChat({
    users,
    chatID,
  });
}

/**
 * @desc Creates a Multiuser Chat group
 * @param {string} users Users for the Chat
 * @param {string} name TODO
 * @returns {Promise<*>} Number response with Chat Id
 */
export async function panthalassaCreateGroupChat(users: string, name: string): Promise<number> {
  return Panthalassa.PanthalassaCreateGroupChat({
    users,
    name,
  });
}

/**
 * @desc Creates a private Chat session
 * @param {string} partnerStr Partner for the Chat
 * @returns {Promise<*>} Number response with Chat Id
 */
export async function panthalassaCreatePrivateChat(partnerStr: string): Promise<number> {
  return Panthalassa.PanthalassaCreatePrivateChat({
    partnerStr,
  });
}
