import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import CustomButton from '../Components/CustomButton';
import { TextHuge, TextNormal } from '../Components/CustomTexts';
import Wrapper from '../Components/Wrapper';
import { COLORS } from '../utils/constants/theme';
import { genderData } from '../utils/data';

const Gender = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const text = "Select your Identity and let us Shape your Experience";

  const handleSelectGender = (id) => {
    setSelectedGender(id);
  };

  return (
    <Wrapper>
      <View style={{height:heightPercentageToDP(6)}}  />
          <TextHuge bold textStyle={{ marginTop: heightPercentageToDP(2),marginBottom:heightPercentageToDP(4) }}>{text}</TextHuge>

      <View style={{ marginTop: heightPercentageToDP(4), height: heightPercentageToDP(28) }}>
        <FlatList
          data={genderData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.genderBtn,
                { backgroundColor: selectedGender === item.id ? 'white' : 'transparent',color:selectedGender === item.id ? 'black' : 'whitw' }
              ]}
              onPress={() => handleSelectGender(item.id)}
            >
              <TextNormal bold textStyle={{color:selectedGender === item.id ? 'black' : 'white'}}>{item.name}</TextNormal>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <CustomButton
        // onPress={handleSubmit(onSubmit)}
        title={'Continue'}
        textColor={COLORS.white}
        textStyle={{ textTransform: 'capitalize', letterSpacing: 0.8 }}
      />
    </Wrapper>
  );
};

export default Gender;

const styles = StyleSheet.create({
  genderBtn: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor:'#858585',
    height: heightPercentageToDP(7),
    marginBottom: heightPercentageToDP(2),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"yellow"
  },
});

