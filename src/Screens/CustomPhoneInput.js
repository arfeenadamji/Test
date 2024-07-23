import React, { useEffect, useState } from 'react'
import {
    Platform,
    ScrollView,
    StyleSheet, Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import Modal from 'react-native-modal'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CustomIcon from '../Components/CustomIcon'
import { TextHuge, TextSmall } from '../Components/CustomTexts'
import Wrapper from '../Components/Wrapper'
import COUNTRYJSON from '../utils/constants/coutries.json'
import { COLORS } from '../utils/constants/theme'

const CustomPhoneInput = ({ value, onChange, error, label, textStyle }) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [search, setSearch] = useState('')
    const [selected, setSelected] = useState('')
    const [country, setCountry] = useState({
        "name": "United States",
        "flag": "🇺🇸",
        "code": "US",
        "callingCode": "+1"

    })
    const onValueChange = (txt) => {
        onChange({ dialCode: country?.callingCode, phoneNumber: txt })
    }
    const { top } = useSafeAreaInsets()

    useEffect(() => {
        const selectedCountry = Object.values(COUNTRYJSON).find(
            (country) => country.dial_code === value?.dialCode
        );

        if (selectedCountry) {
            setCountry({
                name: selectedCountry.name,
                flag: selectedCountry.flag,
                callingCode: selectedCountry.dial_code,
                code: selectedCountry.code,
            });
        }
    }, [value?.dialCode]);


    const renderCountryModal = () => {
        return <Modal
            entry={"bottom"}
            animationType="slide"
            isVisible={modalVisible}
            hasBackdrop={true}
            backdropOpacity={0.7}
            backdropColor={'black'}
            onRequestClose={() => {
                setModalVisible(false)
            }}
            onBackdropPress={() => {
                setModalVisible(false)
            }}
            key={modalVisible}
            style={{ paddingTop: Platform.OS == 'android' ? 0 : top, margin: 0 }}

        >

            <Wrapper >
                    <TextHuge bold textStyle={{alignSelf:'center',marginBottom:heightPercentageToDP(2)}}>Country Code</TextHuge>
                <ScrollView style={{}}>
                    {
                        Object.keys(COUNTRYJSON).map((country, index) => {
                            const name = COUNTRYJSON[country].name;
                            const callingCode = COUNTRYJSON[country].dial_code;
                            const flag = COUNTRYJSON[country].flag;
                            if (search.length === 0 || name.toLowerCase().includes(search.toLowerCase())) {
                                return (
                                    <TouchableOpacity
                                        style={{ flexDirection: 'row', padding: 15 }}
                                        key={index}
                                        onPress={() => {
                                            setModalVisible(false);
                                            setCountry({
                                                name: COUNTRYJSON[country]?.name,
                                                flag: COUNTRYJSON[country]?.flag,
                                                callingCode: COUNTRYJSON[country].dial_code,
                                                code: COUNTRYJSON[country].code,
                                            });
                                            setSearch('')
                                            setSelected('')
                                            onChange({ dialCode: callingCode, phoneNumber: value?.phone });
                                        }}
                                    >
                                        <Text>{flag}</Text>
                                        <TextSmall textStyle={{ alignSelf: 'center', marginLeft: 15 }}>{callingCode}</TextSmall>
                                        <TextSmall textStyle={{ alignSelf: 'center', marginLeft: 15 }}>{name}</TextSmall>
                                    </TouchableOpacity>
                                );
                            } else {
                                return null;
                            }
                        })
                    }


                </ScrollView>
            </Wrapper>
        </Modal>
    }

    return (
        < >
            <TextSmall grey textStyle={textStyle} medium>
                {label}
            </TextSmall>
            <View style={styles.phoneCont}>
                <TouchableOpacity style={styles.codeCont}
                    onPress={() => setModalVisible(true)}>
                    {country ?
                        <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                            <TextSmall>{country.flag}</TextSmall>
                            <TextSmall textStyle={{ marginTop: heightPercentageToDP(0.2) }} >{value?.dialCode ? value?.dialCode : country.callingCode}</TextSmall>
                        </View>
                        :
                        <TextSmall style={{ color: 'grey', paddingHorizontal: 2 }}>US +1</TextSmall>
                    }
                    <View >
                        <CustomIcon name={'keyboard-arrow-down'} type={'material-icons'} color={COLORS.grey} />
                    </View>
                </TouchableOpacity>
                <View
                    style={{
                        width: '75%',
                        justifyContent: 'center'
                    }}>
                    <TextInput
                        value={value?.phoneNumber ? value?.phoneNumber : value}
                        onChangeText={(txt) => { onValueChange(txt) }}
                        style={styles.textInput}
                        placeholder={'+1 3453 3423'}
                        placeholderTextColor={COLORS.disabledGrey}
                        autoCapitalize={'none'}
                        keyboardType='phone-pad'
                        maxLength={15}
                    />
                </View>
            </View>
            {error && (
                <TextSmall color={COLORS.red} textStyle={{ marginVertical: heightPercentageToDP(0.5) }} semiBold>
                    {error ? '*' + error : ''}
                </TextSmall>
            )}
            {modalVisible && renderCountryModal()}
        </ >
    )
}

export default CustomPhoneInput

const styles = StyleSheet.create({
    textInput: {
        height: heightPercentageToDP(6),
        color: 'white',
        fontWeight:'bold',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        fontFamily: 'Poppins-Regular',
        fontSize: RFValue(13),

    },
    codeCont: {
        padding: 10, flexDirection: 'row',
        height: heightPercentageToDP(6),
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginRight: 10
    },
    phoneCont: {
        flexDirection: 'row',
        borderRadius: widthPercentageToDP(10),
        paddingHorizontal: 10,
        marginVertical: heightPercentageToDP(1),
        height: heightPercentageToDP(6),
        justifyContent: "center",
                borderColor: '#858585',
                backgroundColor:'transparent',
                borderWidth: 1.2,
    }

})