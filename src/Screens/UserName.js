import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import Wrapper from '../Components/Wrapper';
import CustomHeader from '../Components/Header';
import Fields from '../Components/Fields';
import { TextHuge } from '../Components/CustomTexts';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import CustomButton from '../Components/CustomButton';
import { COLORS } from '../utils/constants/theme';
// import Fields from '../../components/Fields';
// import CustomHeader from '../../components/Header';
// import Wrapper from '../../utils/Wrapper';

const UserName = (props) => {
  const navigation = useNavigation();
  const [cityData, setCityData] = useState(null);
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    getValues,
    setError,
  } = useForm();

  ;

  const onSubmit = async data => {
   navigation.navigate('Gender')
  };
  return (
    <Wrapper>
        <View style={{height:heightPercentageToDP(6)}}  />
          <TextHuge bold textStyle={{ marginTop: heightPercentageToDP(2),marginBottom:heightPercentageToDP(4) }}>{"Get Creative Choose \n Your Name"}</TextHuge>

      <Fields
        label={'User Name'}
        placeholder={'John'}
        rules={{
          required: {value: true, message: 'Please enter first name'},
        }}
        control={control}
        type={'text'}
        name={'userName'}
        errors={errors}
      />
      <CustomButton
          // isLoading={loading}
          // disabled={loading}
          onPress={handleSubmit(onSubmit)}
          title={'Great? Lets proceed'}
          textColor={COLORS.white}
          // withColor={true}
          style={{marginTop:heightPercentageToDP(10)}}
          textStyle={{ textTransform: 'capitalize', letterSpacing: 0.8 }}
        />
    </Wrapper>
  );
};

export default UserName;

const styles = StyleSheet.create({});
