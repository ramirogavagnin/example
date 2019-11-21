import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import Input from '../components/Input'
import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'
import UploadModal from '../components/UploadModal'

export default function Footer(props) {
    const [search, setSearch] = useState('')
    const [modalVisibility, setModalVisibility] = useState(false)
    const { gradientStart, gradientMiddle, primaryColor, whiteIcon } = Colors
    const {
        gradient,
        searchBar,
        searchIconContainer,
        addIconContainer,
    } = styles
    const { mediumIcon } = Sizes

    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={wp(30)}
        >
            <LinearGradient
                colors={[gradientStart, gradientMiddle, primaryColor]}
                style={[gradient, props.style]}
            >
                <Input
                    style={searchBar}
                    placeholder="Search Medical Record"
                    onChangeText={text => setSearch(text)}
                />
                <View style={searchIconContainer}>
                    <EvilIcons
                        name="search"
                        size={wp(mediumIcon)}
                        color={whiteIcon}
                        onPress={() => {}}
                    />
                </View>
                <View style={addIconContainer}>
                    <MaterialCommunityIcons
                        name="plus"
                        size={wp(mediumIcon)}
                        color={whiteIcon}
                        onPress={() => {
                            setModalVisibility(!modalVisibility)
                        }}
                    />
                </View>
                <UploadModal
                    title="ADD NEW MEDICAL RECORD"
                    icon="file-pdf"
                    onPress={() => {
                        setModalVisibility(!modalVisibility)
                    }}
                    visible={modalVisibility}
                    upload
                />
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}

const { blueIcon, greenIcon } = Colors
const { sideWrap, input, inputText, inputRadius } = Sizes

const styles = StyleSheet.create({
    gradient: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: wp(100),
        height: wp(20),
        paddingHorizontal: wp(sideWrap),
    },
    searchBar: {
        width: wp(60),
        height: wp(input),
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: wp(8),
        fontSize: wp(inputText),
        fontFamily: 'lato',
    },
    searchIconContainer: {
        backgroundColor: blueIcon,
        height: wp(13),
        width: wp(12),
        borderTopRightRadius: wp(inputRadius),
        borderBottomRightRadius: wp(inputRadius),
        alignItems: 'center',
        justifyContent: 'center',
    },
    addIconContainer: {
        backgroundColor: greenIcon,
        height: wp(13),
        width: wp(17),
        borderTopLeftRadius: wp(inputRadius),
        borderTopRightRadius: wp(inputRadius),
        borderBottomRightRadius: wp(8),
        borderBottomLeftRadius: wp(inputRadius),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: wp(3),
    },
})
