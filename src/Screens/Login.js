import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  StyleSheet,
  View
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { TextHuge } from '../Components/CustomTexts';
import Fields from '../Components/Fields';
import Wrapper from '../Components/Wrapper';
import { COLORS } from '../utils/constants/theme';

const Login = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setError,
  } = useForm();

  const onSubmit = () => {
    navigation.navigate('OtpCode')
  };

  return (
    <Wrapper bottomBtn  paddingX title={'Send Code'} onPress={handleSubmit(onSubmit)}>
      <View style={{height:heightPercentageToDP(6)}}  />

      <TextHuge bold textStyle={{ marginTop: heightPercentageToDP(2) }}>{"Let’s get you \n verified"}</TextHuge>


      <View style={{ marginTop: heightPercentageToDP(4) }}>

        <Fields
          label={'Phone Number'}
          placeholder={'(480) 555-0103'}
          rules={{
            required: { value: true, message: 'Please enter Phone Number' },
          }}
          control={control}
          name={'number'}
          type={'phoneNumber'}
          errors={errors}
        />
      </View>

    </Wrapper>

  );
};
export default Login;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    marginTop: heightPercentageToDP(3),
  },
  googleImgCont: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: heightPercentageToDP(8),
    borderRadius: heightPercentageToDP(2),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: heightPercentageToDP(1),
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  btn: {
    width: '90%',
    alignSelf: 'center',
    marginTop: heightPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(5),
  },
  text: {
    paddingLeft: heightPercentageToDP(2),
    textAlign: 'center',
    width: '80%',
    alignSelf: 'center',
    marginTop: heightPercentageToDP(2),
    color: COLORS.lableText,
  },
});

