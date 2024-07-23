// import React, { useState } from 'react';
// import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { TextBig, TextNormal } from '../Components/CustomTexts';
// import Wrapper from '../Components/Wrapper';
// import { genderData } from '../utils/data';
// import { heightPercentageToDP } from 'react-native-responsive-screen';
// import CustomButton from '../Components/CustomButton';
// import { COLORS } from '../utils/constants/theme';

// const Gender = () => {
//   const [selectedGender, setSelectedGender] = useState(null);
//   const text = "Select your Identity and let us Shape your Experience";

//   const handleSelectGender = (id) => {
//     setSelectedGender(id);
//   };

//   return (
//     <Wrapper
//       // onPress={handleSubmit(onSubmit)}
//     >
//       <TextBig>{text}</TextBig>
//       <View   style={{ marginTop: heightPercentageToDP(4),height:heightPercentageToDP(30) }}>
//       <FlatList
//         data={genderData}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item, index }) => (
//           <TouchableOpacity
//             style={[
//               styles.genderBtn,
//               { backgroundColor: selectedGender === item.id ? 'lightblue' : 'white' }
//             ]}
//             onPress={() => handleSelectGender(item.id)}
//           >
//             <TextNormal bold color="red">{item.name}</TextNormal>
//           </TouchableOpacity>
//         )}
//         showsVerticalScrollIndicator={false}
//       />
//       </View>
//          <CustomButton
//           // onPress={handleSubmit(onSubmit)}
//           title={'Verify'}
//           textColor={COLORS.white}
//           // withColor={true}
//           textStyle={{ textTransform: 'capitalize', letterSpacing: 0.8 }}
//         />
//     </Wrapper>
//   );
// };

// export default Gender;

// const styles = StyleSheet.create({
//   genderBtn: {
//     borderRadius: 50,
//     borderWidth: 1,
//     height: heightPercentageToDP(7),
//     marginBottom: heightPercentageToDP(2),
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor:'transparent'
//   },
// });




import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextBig, TextHuge, TextNormal } from '../Components/CustomTexts';
import Wrapper from '../Components/Wrapper';
import { genderData } from '../utils/data';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import CustomButton from '../Components/CustomButton';
import { COLORS } from '../utils/constants/theme';

const Gender = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const text = "Select your Identity and let us Shape your Experience";

  const handleSelectGender = (id) => {
    setSelectedGender(id);
  };

  return (
    <Wrapper
      // onPress={handleSubmit(onSubmit)}
    >
      {/* <TextBig>{text}</TextBig> */}
      <View style={{height:heightPercentageToDP(6)}}  />
          <TextHuge bold textStyle={{ marginTop: heightPercentageToDP(2),marginBottom:heightPercentageToDP(4) }}>{text}</TextHuge>

      <View style={{ marginTop: heightPercentageToDP(4), height: heightPercentageToDP(30) }}>
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
        title={'Verify'}
        textColor={COLORS.white}
        // withColor={true}
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

