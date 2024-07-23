import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
// import {COLORS} from '../../utils/constants/theme';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { COLORS } from '../utils/constants/theme';
const CustomIcon = props => {
  const {icon, type, color, onPress, size, disabled, style, ...rest} = props;
  return (
    <TouchableOpacity
      underlayColor={'transparent'}
      style={style}
      onPress={onPress}
      disabled={disabled}>
      {type == 'entypo' && (
        <Entypo
          underlayColor={'transparent'}
          disabled={disabled}
          name={icon}
          color={color || COLORS.black}
          size={size || wp(5)}
          {...rest}
        />
      )}
      {type == 'ionicons' && (
        <Ionicons
          underlayColor={'transparent'}
          disabled={disabled}
          name={icon}
          color={color || COLORS.black}
          size={size || wp(5)}
          {...rest}
        />
      )}
      {type == 'fontawesome' && (
        <FontAwesome
          underlayColor={'transparent'}
          disabled={disabled}
          name={icon}
          color={color || COLORS.black}
          size={size || wp(5)}
          {...rest}
        />
      )}
      {type == 'fontisto' && (
        <Fontisto
          underlayColor={'transparent'}
          disabled={disabled}
          name={icon}
          color={color || COLORS.black}
          size={size || wp(5)}
          {...rest}
        />
      )}
      {type == 'font-awesome5' && (
        <FontAwesome5
          underlayColor={'transparent'}
          disabled={disabled}
          name={icon}
          color={color || COLORS.black}
          size={size || wp(5)}
          {...rest}
        />
      )}
      {type == 'feather' && (
        <Feather
          underlayColor={'transparent'}
          disabled={disabled}
          name={icon}
          color={color || COLORS.black}
          size={size || wp(5)}
          {...rest}
        />
      )}
      {type == 'material-icons' && (
        <MaterialIcons
          underlayColor={'transparent'}
          disabled={disabled}
          name={icon}
          color={color || COLORS.black}
          size={size || wp(5)}
          {...rest}
        />
      )}
      {type == 'materialCommunityIcons' && (
        <MaterialCommunityIcons
          underlayColor={'transparent'}
          disabled={disabled}
          name={icon}
          color={color || COLORS.black}
          size={size || wp(5)}
          {...rest}
        />
      )}
      {type == 'foundation' && (
        <Foundation
          underlayColor={'transparent'}
          disabled={disabled}
          name={icon}
          color={color || COLORS.black}
          size={size || wp(5)}
          {...rest}
        />
      )}
      {type == 'antdesign' && (
        <AntDesign
          underlayColor={'transparent'}
          disabled={disabled}
          name={icon}
          color={color || COLORS.black}
          size={size || wp(5)}
          {...rest}
        />
      )}
      {type == 'simplelineicons' && (
        <SimpleLineIcons
          underlayColor={'transparent'}
          disabled={disabled}
          name={icon}
          color={color || COLORS.black}
          size={size || wp(5)}
          {...rest}
        />
      )}
      {type == 'evilIcons' && (
        <EvilIcons
          underlayColor={'transparent'}
          disabled={disabled}
          name={icon}
          color={color || COLORS.black}
          size={size || wp(5)}
          {...rest}
        />
      )}
      {type == 'octicons' && (
        <Octicons
          underlayColor={'transparent'}
          disabled={disabled}
          name={icon}
          color={color || COLORS.black}
          size={size || wp(5)}
          {...rest}
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomIcon;
