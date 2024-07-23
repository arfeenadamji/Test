// import {
//   ActivityIndicator,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React from 'react';
// import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { COLORS } from '../../utils/constants/theme';
// import CustomIcon from '../CustomIcon';
// import { TextSmall, TextNormal } from '../CustomTexts';
// import LinearGradient from 'react-native-linear-gradient';

// const CustomButton = props => {
//   const {
//     title,
//     onPress,
//     icon,
//     secondary,
//     style,
//     tertiary,
//     textSmall,
//     textStyle,
//     isLoading,
//     loaderColor,
//     containerStyle,
//     primary,
//     withColor,
//     disabled,
//     withoutColor,
//     ...rest
//   } = props;

//   return (
//     <LinearGradient
//       colors={['#5AABF5', '#007EF3',]}
//       style={[styles.btn, containerStyle]}>
//       <TouchableOpacity
//         disabled={disabled}
//         style={[
//           // containerStyle,
//           styles.btn,
//           styles.primary,
//           style,
//           secondary && styles.secondary,
//           tertiary && styles.tertiary,
//           withColor && {
//             // backgroundColor: COLORS.darkBlue,
//             // borderColor: COLORS.darkBlue,
//           },

//           withoutColor && {
//             // backgroundColor: 'transparent',
//             border: 'none',
//             borderWidth: 0,
//           },
//         ]}
//         onPress={onPress}
//         {...rest}>
//         {isLoading ? (
//           <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//             <ActivityIndicator color={loaderColor ? loaderColor : COLORS.white} />
//           </View>
//         ) : textSmall ? (
//           <>
//             <TextSmall
//               textStyle={[{ fontWeight: 'bold', ...textStyle }]}
//               color={
//                 !secondary
//                   ? tertiary
//                     ? COLORS.primary
//                     : COLORS.white
//                   : COLORS.black
//               }>
//               {title}
//             </TextSmall>
//           </>
//         ) : (
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <TextNormal
//               textStyle={[
//                 {
//                   fontWeight: 'bold',
//                   marginRight: hp(icon ? '2' : '0'),
//                   textTransform: 'uppercase',
//                 },
//                 textStyle,
//               ]}
//               color={
//                 !secondary
//                   ? tertiary
//                     ? COLORS.primary
//                     : COLORS.white
//                   : COLORS.black
//               }>
//               {title}
//             </TextNormal>
//             {icon && (
//               <CustomIcon
//                 disabled
//                 icon={icon.name}
//                 type={icon.type}
//                 color="black"
//               />
//             )}
//           </View>
//         )}
//       </TouchableOpacity>
//     </LinearGradient>
//   );
// };

// export default CustomButton;

// const styles = StyleSheet.create({
//   btn: {
//     width: '100%',
//     height: hp(6),
//     maxHeight: 50,
//     borderRadius: 10,
//     // borderWidth: 1,
//     alignSelf: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     // textTransform: 'capitalize',
//     borderColor: 'transparent',
//     // backgroundColor: 'red',

//   },
//   primary: {
//     // backgroundColor: COLORS.darkBlue,
//     // borderColor: COLORS.darkBlue,
//     textTransform: 'capitalize',
//   },
//   secondary: {
//     // backgroundColor: COLORS.white,
//     // borderColor: 'rgba(32, 55, 20, 0.6)',
//     textTransform: 'capitalize',
//   },
//   tertiary: {
//     backgroundColor: COLORS.red,
//     // borderColor: COLORS.lightPrimary,
//     textTransform: 'capitalize',
//   },
//   linearGradient: {
//     // borderColor: COLORS.darkBlue,

//   }
// });

import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
// import { COLORS } from '../../../utils/constants/theme';
import { TextNormal, TextSmall } from '../CustomTexts';
import { COLORS } from '../../utils/constants/theme';

const CustomButton = props => {
  const {
    title,
    onPress,
    secondary,
    primary,
    style,
    textColor,
    tertiary,
    textSmall,
    textStyle,
    isLoading,
    loaderColor,
    disabled,
    ...rest
  } = props;

  return (
    <TouchableOpacity
      style={[
        styles.btn,
        styles.primary,

        secondary && styles.secondary,
        disabled && styles.disabled,
        style,
      ]}
      disabled={isLoading || disabled}
      onPress={onPress}
      {...rest}>
      {isLoading ? (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator color={loaderColor ? loaderColor : COLORS.white} />
        </View>
      ) : textSmall ? (
        <TextSmall
          color={
            !secondary
              ? tertiary
                ? COLORS.primary
                : COLORS.white
              : COLORS.black
          }
          textStyle={[{ fontWeight: 'bold', textAlign: 'center', ...textStyle }]}

        >
          {title.toUpperCase()}
        </TextSmall>
      ) : (
        <TextNormal
        bold
          color={
            textColor ? textColor : primary ? COLORS.white : COLORS.primary
          }
          textStyle={[{ textAlign: 'center', ...textStyle }]}>
          {title}
        </TextNormal>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: hp(7),
    borderRadius:50,
    borderWidth: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  primary: {
    backgroundColor: COLORS.primary,
    // borderColor: COLORS.primary,
    borderColor: 'transparent',
    borderWidth: 1,
  },
  secondary: {
    backgroundColor: COLORS.white,
    borderColor: 'transparent',
        borderWidth: 1,
  },
  tertiary: {
    backgroundColor: COLORS.lightPrimary,
    borderColor: 'transparent',
    borderWidth: 1,
  },
  disabled: {
    backgroundColor: COLORS.disabledGrey,
  },
});
