import React from 'react';
import { Controller } from 'react-hook-form';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomTextInput from '../CustomTextInput';
import CustomPhoneInput from '../../Screens/CustomPhoneInput';
import CustomOTPInput from '../CustomOTPInput';

const Fields = ({
  control,
  type,
  multiple,
  options,
  label,
  defaultValue,
  textForm,
  placeholder,
  venues,
  boroughs,
  name,
  data,
  rules,
  jobPositions,
  contStyle,
  errors,
  inputContainer,
  ...rest
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field: { onBlur, value, onChange } }) => {
        if (type == 'phoneNumber') {
          return (
            <CustomPhoneInput
              value={value}
              label={label}
              defaultValue={defaultValue}
              onChange={onChange}
              error={errors && errors[name]?.message}
            />
          );
        }
        if (type == 'otp') {
          return (
            <CustomOTPInput
              value={value}
              onChange={onChange}
              error={errors && errors[name]?.message}

            />
          )
        }
        return (
          <CustomTextInput
            textForm={textForm}
            label={label}
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            defaultValue={defaultValue}
            autoCapitalize={'none'}
            error={errors && errors[name]?.message}
            containerStyle={[{ marginTop: hp(2) }, contStyle]}
            inputContainer={inputContainer}
            {...rest}
            keyboardType={type == 'number' ? 'numeric' : 'default'}
          />
        );
      }}
    />
  );
};

export default Fields;
