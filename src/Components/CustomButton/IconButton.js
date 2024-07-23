import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {TextNormal} from '../CustomTexts';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../utils/constants/theme';
import FastImage from 'react-native-fast-image';
import {images} from '../../utils/constants/images';
import CustomIcon from '../../components/CustomIcon';

const IconButton = props => {
  const {
    title,
    onPress,
    secondary,
    style,
    google,
    icon,
    type,
    iconSource,
    center,
    iconColor,
    textColor,
    ...rest
  } = props;

  return (
    <TouchableOpacity
      style={[
        styles.btn,
        styles.primary,
        style,
        secondary && styles.secondary,
        !center && styles.leftIcon,
      ]}
      onPress={onPress}>
      {google && (
        <View>
          <FastImage
            style={styles.googleImg}
            source={images.google}
            resizeMode="contain"
          />
        </View>
      )}
      {icon && !center && (
        <View style={{width: wp(8)}}>
          {type && (
            <CustomIcon
              disabled
              icon={icon}
              type={type}
              color={COLORS.primary}
              size={wp(4)}
            />
          )}
          {iconSource && (
            <FastImage
              style={styles.googleImg}
              source={iconSource}
              resizeMode="contain"
            />
          )}
        </View>
      )}
      {icon && center && (
        <View style={{width: wp(8)}}>
          {type && (
            <CustomIcon
              disabled
              icon={icon}
              type={type}
              color={iconColor || COLORS.primary}
              size={wp(5)}
            />
          )}
          {iconSource && (
            <FastImage
              style={styles.googleImg}
              source={iconSource}
              resizeMode="contain"
            />
          )}
        </View>
      )}
      <TextNormal
        textStyle={{fontWeight: 'bold'}}
        color={textColor || (!secondary ? COLORS.white : COLORS.black)}>
        {!google ? title : title.toUpperCase()}
      </TextNormal>
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: hp(6.7),
    borderRadius: 10,
    borderWidth: 0.3,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: hp(0.8),
  },
  primary: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  secondary: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.disabledGrey,
  },
  googleImg: {
    borderRadius: 100,
    height: hp(5),
    width: wp(5),
    marginRight: 10,
  },
  leftIcon: {
    justifyContent: 'flex-start',
    paddingHorizontal: wp(5),
    borderWidth: 0,
  },
});
