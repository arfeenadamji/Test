import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
// import CustomIcon from '../CustomIcon';
import {TextNormal, TextSmall} from '../CustomTexts';
import { COLORS } from '../../utils/constants/theme';

const CustomTextInput = props => {
  const {
    value,
    onChangeText,
    containerStyle,
    placeholder,
    inputContainer,
    label,
    secureTextEntry,
    withIcon,
    iconName,
    iconColor,
    iconType,
    textForm,
    error,
    ...rest
  } = props;
  const [visible, setVisible] = useState(secureTextEntry ? true : false);
  return (
    <View style={[styles.container, containerStyle]}>
      {label ? (
        <TextNormal color='#999999' textStyle={{marginBottom:heightPercentageToDP(.5),fontSize: wp(4.0)}}>{label}</TextNormal>
      ) : null}
      <View
        style={[
          styles.textContainer,
          inputContainer,
          textForm && {borderWidth: 0},
        ]}>
        {/* {withIcon ? (
          <CustomIcon
          color={iconColor}
            type={iconType}
            icon={iconName}
            size={wp('5')}
          />
        ) : null} */}
        <TextInput
          style={[
            styles.textInput,
            textForm && {paddingHorizontal: 0, fontWeight: 'bold'},
          ]}
          placeholder={placeholder}
          placeholderTextColor={COLORS.placeholder}
          secureTextEntry={visible}
          {...rest}
          value={value}
          onChangeText={onChangeText}
        />
        {secureTextEntry && (
          <CustomIcon
            style={{paddingRight: wp(3)}}
            icon={!visible ? 'eye' : 'eye-off'}
            type="ionicons"
            onPress={() => setVisible(!visible)}
            color={COLORS.disabledGrey}
          />
        )}
      </View>

      <TextSmall
        bold
        textStyle={{
          color: 'red',
          fontSize: wp(3.5),
          marginTop: heightPercentageToDP(0.5),
        }}>
        {error ? `* ${error}` : ''}
      </TextSmall>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    height: hp(11),
  },
  textInput: {
    color: 'white',
    paddingHorizontal: 15,
    fontSize: hp(2),
    flex: 1,
    height: hp(6),
  },
  textContainer: {
    // width: '98%',
    height: hp(7),
    borderWidth: 1.5,
    borderRadius: 15,
    borderColor:'#999999',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(1),
    justifyContent: 'space-between',
    // borderColor: 'transparent',
    backgroundColor: 'transparent',
    paddingHorizontal: hp(1),
  },
});
