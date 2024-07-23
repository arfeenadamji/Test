import React from 'react';
import { Controller } from 'react-hook-form';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import CustomPhoneInput from '../common/CustomPhoneInput';
// import CustomOTPInput from '../CustomOTPInput';
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
        // if (type == 'option') {
        //   let customOptions = options || [];
        //   if (name == 'venue_type') customOptions = venues;
        //   else if (
        //     name.toLowerCase() == 'borough' ||
        //     name == 'Preferred Borroughs to work'
        //   )
        //     customOptions = boroughs;
        //   else if (name == 'job_title') customOptions = jobPositions;
        //   else if (
        //     name.toLowerCase() == 'positions' ||
        //     name == 'Shifter Position'
        //   )
        //     customOptions = jobPositions;

        //   return (
        //     <CustomOptionSelect
        //       textForm={textForm}
        //       value={value}
        //       defaultValue={defaultValue}
        //       label={label}
        //       onBlur={onBlur}
        //       onSelectOption={value => onChange(value)}
        //       options={customOptions}
        //       multiple={multiple}
        //       error={errors && errors[name]?.message}
        //     />
        //   );
        // }

        // if (type == 'textArea') {
        //   return (
        //     <CustomTextArea
        //       textForm={textForm}
        //       label={label}
        //       placeholder={placeholder}
        //       onBlur={onBlur}
        //       onChangeText={value => onChange(value)}
        //       value={value}
        //       defaultValue={defaultValue}
        //       autoCapitalize={'none'}
        //       error={errors && errors[name]?.message}
        //       {...rest}
        //     />
        //   );
        // }
        // if (type == 'date') {
        //   return (
        //     <CustomTimePicker
        //       label={label}
        //       onChange={onChange}
        //       value={value}
        //       defaultValue={defaultValue}
        //       // minDate={minDate}
        //       defaultOption={moment(new Date).format("dddd")}
        //       error={errors && errors[name]?.message}
        //       {...rest} />
        //   );
        // }

        // if (type == 'time') {
        //   return (
        //     <CustomTimeInput
        //       textForm={textForm}
        //       label={label}
        //       value={value}
        //       defaultValue={defaultValue}
        //       onChange={onChange}
        //       error={errors && errors[name]?.message}
        //     />
        //   );
        // }
        // if (type == 'gender') {
        //   return (
        //     <CustomGenderBtn
        //       label={label}
        //       value={value}
        //       defaultValue={defaultValue}
        //       onChange={onChange}
        //       error={errors && errors[name]?.message}
        //     />
        //   );
        // }
        // if (type == 'date') {
        //   return (
        //     <CustomDateInput
        //       value={value}
        //       onChange={onChange}
        //       label={label}
        //       name={name}
        //       defaultValue={defaultValue}
        //       error={errors && errors[name]?.message}
        //     />
        //   );
        // }
        // if (type == 'time') {
        //   return (
        //     <CustomTimeInput
        //       // eventDate={eventDate}
        //       // startTime={startTime}
        //       // textForm={textForm}
        //       label={label}
        //       value={value}
        //       defaultValue={defaultValue}
        //       onChange={onChange}
        //       error={errors && errors[name]?.message}
        //     />
        //   );
        // }
        if (type == 'phoneNumber') {
          return (
            <CustomPhoneInput
              value={value}
              label={label}
              defaultValue={defaultValue}
              onChange={onChange}
              error={errors && errors[name]?.message}
            // maxLength={maxLength}
            />
          );
        }

        // if (type == 'dropdown') {
        //   return (
        //     <CustomDropdown
        //       textForm={textForm}
        //       label={label}
        //       defaultValue={defaultValue}
        //       placeholder={placeholder}
        //       onBlur={onBlur}


        //       value={value}
        //       onChange={onChange}
        //       error={errors && errors[name]?.message}
        //       items={data}
        //       // items={name == 'job_title' ? jobPositions : []}
        //       {...rest}
        //     />
        //   );
        // }
        if (type == 'otp') {
          return (
            <CustomOTPInput
              value={value}
              onChange={onChange}
              error={errors && errors[name]?.message}

            />
          )
        }

        // if (type == 'uploadPhoto') {
        //   return (
        //     <ImageUpload
        //       value={value}
        //       defaultValue={defaultValue}
        //       onChange={onChange}
        //       label={label}
        //       {...rest}
        //       multiple={multiple}
        //       error={errors && errors[name]?.message}
        //     />
        //   );
        // }
        // if (type == 'file') {
        //   return (
        //     <DocumentPicker
        //       value={value}
        //       defaultValue={defaultValue}
        //       onChange={onChange}
        //       label={label}
        //       multiple={multiple}
        //       {...rest}
        //       error={errors && errors[name]?.message}
        //     />
        //   );
        // }

        // if (type == 'currencyInput') {
        //   return (
        //     <CustomCurrencyInput
        //       textForm={textForm}
        //       value={value}
        //       defaultValue={defaultValue}
        //       label={label}
        //       onChange={onChange}
        //       placeholder={placeholder}
        //       error={errors && errors[name]?.message}
        //     />
        //   );
        // }
        // if (type == 'image') {
        //   return (
        //     <ImageUpload
        //       text={'Upload a picture of yourself'}
        //       // edit={edit}
        //       value={value}
        //       defaultValue={defaultValue}
        //       onChange={onChange}
        //       label={label}
        //       {...rest}
        //       error={errors && errors[name]?.message}
        //     />
        //   );
        // }
        // if (type == 'textArea') {
        //   return (
        //     <CustomTextArea
        //     textForm={textForm}
        //     label={label}
        //     placeholder={placeholder}
        //     onBlur={onBlur}
        //     onChangeText={value => onChange(value)}
        //     value={value}
        //     defaultValue={defaultValue}
        //     autoCapitalize={'none'}
        //     error={errors && errors[name]?.message}
        //     containerStyle={[{ marginTop: hp(2)},contStyle]}
        //     inputContainer={inputContainer}
        //     {...rest}
        //     keyboardType={type == 'number' ? 'numeric' : 'default'}
        //   />
        //   );
        // }

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
            containerStyle={[{ marginTop: hp(2)},contStyle]}
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
