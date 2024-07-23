import React from 'react';
import { StyleSheet, View } from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useForm } from 'react-hook-form';
import { TextSmall } from './CustomTexts';

const CustomOTPInput = props => {
  const { error, inputStyles, style, value,
    onChange,
    containerStyle, ...rest } = props;
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setError,
  } = useForm();
  return (
    <View style={[styles.container, containerStyle]}>
      <OtpInputs
        value={value == undefined && ''}
        handleChange={(code) => onChange(code)}
        numberOfInputs={5}
        inputContainerStyles={{}}
        inputStyles={[styles.inputStyles, { ...inputStyles }]}
        style={[styles.containerStyle, { ...style }]}
        {...rest}
      />
      <TextSmall textStyle={{ paddingLeft: wp(1), }} color="red" bold>
        {error && `*${error}`}
      </TextSmall>
    </View>
  );
};

export default CustomOTPInput;

const styles = StyleSheet.create({
  container: {
    height: hp(12),
    width: '100%',
  },
  inputStyles: {
    width: wp(14),
    height: hp(7),
    textAlign: 'center',
    borderColor: '#858585',
    borderWidth: 1,
    borderRadius: 10,
    fontFamily: Platform.OS == 'android' ? 'Baskerville Normal' : 'Baskerville',
    fontSize: wp(5),
    color:'white',
    fontWeight:'bold'
  },
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
});