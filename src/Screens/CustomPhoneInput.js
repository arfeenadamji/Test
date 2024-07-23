import React, { useRef, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { View, Image } from 'react-native';
// import { COLORS } from '../../../utils/constants/theme';
import { TextNormal, TextSmall } from '../Components/CustomTexts';
import { COLORS } from '../utils/constants/theme';
// import { TextNormal,TextSmall } from '../../CustomTexts';



const CustomPhoneInput = props => {
    const { value, onChange, error, maxLength, label, defaultValue } = props;
    const phoneRef = useRef()

    useEffect(() => {
        if (phoneRef.current && defaultValue) {
            phoneRef.current.selectCountry(defaultValue.countryCode);
            phoneRef.current.onChangePhoneNumber(defaultValue.number);
        }
    }, [defaultValue]);

    const handlePhoneNumberChange = () => {
        if (phoneRef.current) {
            let countryCode = phoneRef.current.getCountryCode();
            let number = phoneRef.current.state.value;
            number = number?.replace(`+${countryCode}`, '');
            countryCode = countryCode?.replace('+', '');
            onChange({ code: countryCode, number });
        }
    };
// console.log('defaultValue on phone numberrrr',defaultValue)
    return (
        <View style={{ marginTop: hp(1) }}>
            {label ? (
                <TextNormal textStyle={{ marginVertical: hp(1), fontSize: wp(4.0),color:'#999999'  }}bold>
                    {label}
                </TextNormal>
            ) : null}
            <PhoneInput
                ref={phoneRef}
                autoFormat={true}
                placeholder={'ccd'}
                initialCountry='us'
                // initialValue={value ? value: (defaultValue ? `${defaultValue?.code}${defaultValue?.number}` : '')}
                // initialValue={value ? value: `${defaultValue?.code}${defaultValue?.number}` || ''}
                textProps={{ placeholder: 'Phone Number', maxLength }}
                style={styles.phoneInput}
                containerStyle={styles.container}
                allowZeroAfterCountryCode={false}
                textContainerStyle={styles.textContainerStyle}
                textInputStyle={styles.textInputStyle}
                textStyle={styles.textStyle}
                countryPickerProps={{ withEmoji: false }}
                onChangePhoneNumber={handlePhoneNumberChange}
                renderFlag={renderFlag}
            />
            <TextSmall bold textStyle={{ color: 'red', fontSize: wp(3.5), marginTop: hp(.5) }}>
                {error ? `* ${error}` : ''}
            </TextSmall>
        </View>
    );
};

const renderFlag = ({ imageSource }: { imageSource: number }) => {
    return (
        <View style={styles.flagContainerStyle}>
            <Image source={imageSource} style={styles.flagStyle} />
            <View style={styles.verticalBar} />
        </View>
    );
};

export default CustomPhoneInput;

const styles = StyleSheet.create({
    container: {
        height: hp(6),
    },
    phoneInput: {
        height: hp(6),
        borderRadius: 10,
        borderColor: '#858585',
        backgroundColor:'transparent',
        // backgroundColor:'blue',
        borderWidth: 1.2,
        paddingHorizontal: 10,
    },
    textContainerStyle: {
        height: hp(6),
        fontSize: 14,
        marginVertical: 0,
    },
    textInputStyle: {
        height: hp(6),
        // color: 'red'
    },
    textStyle: {
        fontWeight:'bold',
        color: 'white'
    },
    flagStyle: {
        backgroundColor: 'lightgrey',
        height: hp(2),
        width: wp(8),
    },
    flagContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    verticalBar: {
        height: hp(6),
        width: 1,
        backgroundColor: COLORS.lightGrey,
        marginHorizontal: wp(2),
    },
});
