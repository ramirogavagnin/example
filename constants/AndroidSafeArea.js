import { StyleSheet, Platform } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

export default StyleSheet.create({
    SafeArea: {
        paddingTop: Platform.OS === 'android' ? hp(4) : 0,
    },
})
