// import React from 'react';
// import {
//     Platform,
//     StatusBar,
//     StyleSheet,
//     View
// } from 'react-native';
// import {
//   heightPercentageToDP,
//     heightPercentageToDP as hp,
//     widthPercentageToDP,
//     widthPercentageToDP as wp
// } from 'react-native-responsive-screen';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { COLORS } from '../utils/constants/theme';
// import CustomButton from './CustomButton';
// import { TextHuge } from './CustomTexts';

// const Wrapper = ({
//   children,
//   loading,
//   style,
//   onPress,
//   childStyle,
//   title,
//   bottomBtn,
// }) => {
//   const childrenContainerHeight = bottomBtn ? '90%' : '100%'; // Adjusted height based on bottomBtn prop

//   return (
//     // <ImageBackground source={background} style={{ flex: 1 }}>
//     <SafeAreaView
//       style={[styles.cont, style]}
//       edges={['left', 'right', 'top', 'bottom']}>
//       {/* <View style={[styles.childrenContainer,childStyle]}> */}
//       <View style={[styles.childrenContainer, { height: childrenContainerHeight }, childStyle]}>

//         <StatusBar
//           barStyle={Platform.OS == 'ios' ? 'dark-content' : 'light-content'}
//           backgroundColor={COLORS.primary}
//         />
//         {/* {internetStatus == false && <InternetConnection />} */}
//         {children}
//       </View>
//       {/* <ReactNativeModal isVisible={loading} style={styles.modal}>
//                     <View style={styles.modalInside}>
//                         <ActivityIndicator color={COLORS.primary} size="large" style={{ marginHorizontal: wp(3) }} />
//                         <TextBig>Loading</TextBig>
//                     </View>
//                 </ReactNativeModal> */}
//       {bottomBtn && (
//         <View style={{height: '30%'}}>
//         <View style={{
//           // height: '30%',
//           //  justifyContent: 'center',
//            backgroundColor:'yellow'}}>
//           <CustomButton
//             isLoading={loading}
//             disabled={loading}
//             textColor={'white'}
//             onPress={onPress}
//             style={{
//               width: '90%',
//               alignSelf: 'center',
//               paddingHorizontal: widthPercentageToDP(5),
//             }}
//             withColor={true}
//             title={title}
//           />
//         </View>
//           <TextHuge bold color={'red'} textStyle={{ marginTop: heightPercentageToDP(2) }}>{"Skip"}</TextHuge>
//           </View>
//       )}

//     </SafeAreaView>
//     // </ImageBackground>
//   );
// };

// export default Wrapper;

// const styles = StyleSheet.create({
//   cont: {
//     flex: 1,
//     backgroundColor: 'white',
//     backgroundColor: 'black',
//     marginTop: hp('0'),
//     paddingHorizontal: wp(0),
//   },
//   childrenContainer: {
//     // flex: 1,
//     backgroundColor: 'transparent',
//     backgroundColor: 'blue',
//     paddingHorizontal: widthPercentageToDP(5),
//     height: '70%',
//   },
//   modal: {
//     margin: 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   modalInside: {
//     backgroundColor: 'transparent',
//     height: hp(10),
//     width: wp(90),
//     borderRadius: 10,
//     padding: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
// });



import React from 'react';
import {
    Platform,
    StatusBar,
    StyleSheet,
    View
} from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../utils/constants/theme';
import CustomButton from './CustomButton';
import { TextHuge, TextNormal } from './CustomTexts';

const Wrapper = ({
    children,
    loading,
    style,
    onPress,
    childStyle,
    title,
    bottomBtn,
}) => {
    const childrenContainerHeight = bottomBtn ? '80%' : '100%'; // Adjusted height based on bottomBtn prop

    return (
        <SafeAreaView
            style={[styles.cont, style]}
            edges={['left', 'right', 'top', 'bottom']}
        >
            <View style={[styles.childrenContainer, { height: childrenContainerHeight }, childStyle]}>
                <StatusBar
                    barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
                    backgroundColor={COLORS.primary}
                />
                {children}
            </View>
            {bottomBtn && (
                <View style={styles.bottomContainer}>
                    <View style={styles.buttonContainer}>
                        <CustomButton
                            isLoading={loading}
                            disabled={loading}
                            textColor={'white'}
                            onPress={onPress}
                            style={styles.customButton}
                            withColor={true}
                            title={title}
                        />
                    </View>
                    <TextNormal color={'#badefe'} textStyle={styles.skipText}>{"Skip"}</TextNormal>
                </View>
            )}
        </SafeAreaView>
    );
};

export default Wrapper;

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: wp(0),
    },
    childrenContainer: {
        // backgroundColor: 'blue',
        paddingHorizontal: wp(5),
        height: '80%',
    },
    bottomContainer: {
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'yellow',
    },
    buttonContainer: {
        width: '90%',
        alignSelf: 'center',
        paddingHorizontal: wp(5),
    },
    customButton: {
        width: '100%',
    },
    skipText: {
        marginTop: hp(2),
    },
    modal: {
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalInside: {
        backgroundColor: 'transparent',
        height: hp(10),
        width: wp(90),
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
});
