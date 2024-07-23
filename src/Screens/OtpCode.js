import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Wrapper from '../Components/Wrapper';
import { TextHuge, TextNormal } from '../Components/CustomTexts';
import Fields from '../Components/Fields';
import CustomButton from '../Components/CustomButton';
import { COLORS } from '../utils/constants/theme';
import CustomHeader from '../Components/Header';
import { useNavigation } from '@react-navigation/native';


const OTPCode = (props) => {
  const [remainingTime, setRemainingTime] = useState(30);
  const [timer, setTimer] = useState(false);
  const [loading, setLoading] = useState(false)

  const number = props?.route?.params?.data
  const otp = props?.route?.params?.data?.otp
  const navigation = useNavigation()
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setError,
  } = useForm();
  const onSubmit = async (data) => {
navigation.navigate('UserName')
    return
    setLoading(true)
    const dataToSend = {
      numberId: number?.numberId,
      code: data?.code
    }
    // const res = await verifyNumber(dataToSend, setLoading)
    setLoading(false)
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);
    if (remainingTime === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [remainingTime, timer]);

  const formattedTime = `${String(Math.floor(remainingTime / 60)).padStart(2, '0')}:${String(
    remainingTime % 60
  ).padStart(2, '0')}`;

  const resendCode = async () => {
  }
  return (
    <Wrapper>

      <View style={styles.container}>
          <CustomHeader  />
          <TextHuge bold textStyle={{ marginTop: heightPercentageToDP(2),marginBottom:heightPercentageToDP(6) }}>{"Enter Your Code to \n Jump into the Action"}</TextHuge>


        <View >
          <Fields
            rules={{
              required: { value: true, message: 'Please enter OTPCode' },
            }}
            control={control}
            type={'otp'}
            name={'code'}
            errors={errors}
          />
        </View>

        <View>
          <View style={{ 
            // flexDirection: 'row',
            // backgroundColor:'yellow',
            alignItems:'center',
            marginVertical: heightPercentageToDP(2)
            //  justifyContent: 'center' 
             }}>
            <TextNormal color={COLORS.white}>{"Didn't receive an SMS code?"}</TextNormal>
            <Pressable
              onPress={resendCode}
            >
              <TextNormal bold color={COLORS.white} textStyle={{marginTop:heightPercentageToDP(1)}}>Resend</TextNormal>
            </Pressable>
          </View>
        </View>

        <CustomButton
          isLoading={loading}
          disabled={loading}
          onPress={handleSubmit(onSubmit)}
          title={'Verify'}
          textColor={COLORS.white}
          // withColor={true}
          style={styles.buttonContainer}
          textStyle={{ textTransform: 'capitalize', letterSpacing: 0.8 }}
        />
      </View>
    </Wrapper>
  );
};

export default OTPCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  forgotContainer: {
    alignSelf: 'flex-end',
  },
  buttonContainer: {
    marginTop: hp(2),
    // backgroundColor:'red'
  },
  textSign: {
    marginTop: hp(6),
    alignSelf: 'center',
  },
  logoMainContainer: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: wp(33),
    marginTop: hp(3),
  },
  logoContainer: {
    borderWidth: 1.5,
    borderColor: COLORS.darkBlue,
    width: wp(15),
    height: hp(8),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});

