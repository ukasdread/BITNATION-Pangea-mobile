// @flow

import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { MediaQueryStyleSheet } from 'react-native-responsive';

import GlobalStyles from 'pangea-common-reactnative/styles';
import Colors from 'pangea-common-reactnative/styles/colors';

type Props = {
  /**
   * @desc Text to display on item
   * @type string
   */
  nationName: string,
  /**
   * @desc Style object for basic text style
   * @type object
   */
  textStyle?: Text.propTypes.style,
  /**
   * @desc Status of the Nation to display on item
   * @type string
   */
  status?: string,
  /**
   * @desc Id that will be passed in onPress callback.
   * @type string
   */
  id: string,
  /**
   * @desc Text to display citizens
   * @type string
   */
  citizens?: string,
  /**
   * @desc Callback on press item.
   * @param Id of item that was pressed.
   */
  onPress: (id: string) => void,
  /**
   * @desc Resource to be rendered as icon with the button.
   */
  iconSource?: number,
}

type PropsList<IDType> = {
  /**
   * @desc Text to display on item
   * @type string
   */
  text?: string,
  /**
   * @desc Text to display citizens
   * @type string
   */
  citizens?: string,
  /**
   * @desc Id that will be passed in onPress callback.
   * @type IDType
   */
  id: IDType,
  /**
   * @desc Callback on press item.
   * @param {IDType} id Id of item that was pressed
   */
  onPress: (id: IDType) => any,
  /**
   * @desc Flag to enable/disable press on item.
   */
  disabled: boolean,
  /**
   * @desc Style to be applied on top of default.
   * @type object
   */
  style?: View.propTypes.style,

  /**
   * @desc Resource to be rendered as icon with the button.
   */
  iconSource?: number,
};

/**
 * @desc Component that renders common list item.
 * @return {React.Component} A component.
 */
// eslint-disable-next-line arrow-parens
const ListItem = <IDType>({
  id,
  onPress,
  disabled,
  style,
  text,
  iconSource,
  citizens = '0',
}: PropsList<IDType>) => {
  const styles = MediaQueryStyleSheet.create({
    ...GlobalStyles,
  });

  return (
    <View
      style={[
        styles.nationSectionListItemContainer,
        style,
      ]}
    >
      <TouchableOpacity
        testID='Touchable'
        onPress={() => onPress(id)}
        style={styles.sectionListTouchable}
        disabled={disabled}
      >
        <View style={styles.nationListItemContainer}>
          <Image source={iconSource} style={styles.chatListItemIcon} />
          <View style={styles.nationInfoView}>
            <View style={styles.nationTitleView}>
              <Text style={styles.nationTextTitleStyle}>{text}</Text>
            </View>
            <View style={styles.nationCitizensView}>
              <Text style={styles.nationCitizenText}>{`${citizens} citizens`}</Text>
            </View>
          </View>

        </View>
      </TouchableOpacity>
    </View>
  );
};

ListItem.defaultProps = {
  text: undefined,
  textStyle: undefined,
  disclosureIconVisible: true,
  id: null,
  onPress: () => undefined,
  disabled: false,
  AdditionalView: () => null,
  AdditionalLeftView: () => null,
  iconSource: undefined,
  subtitle: undefined,
  value: undefined,
  citizens: '0',
};

/**
    * @desc Component that renders nations list item.
    * @return {React.Component} A component.
*/
const NationListItem = ({
  id, textStyle, onPress, nationName, status, citizens, iconSource,
}: Props) => (
  <ListItem
    text={nationName}
    status={status}
    textStyle={textStyle}
    id={id}
    onPress={onPress}
    citizens={citizens}
    iconSource={iconSource}
  />
);

NationListItem.defaultProps = {
  statusColor: Colors.listItemTextState.default,
  textStyle: undefined,
  status: undefined,
  onPress: () => undefined,
  citizens: '0',
};

export default NationListItem;
