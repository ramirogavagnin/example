import React from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    SafeAreaView,
} from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Styles from '../constants/Styles'
import Sizes from '../constants/Sizes'
import Colors from '../constants/Colors'

import PartialDivider from './PartialDivider'
import { LatoText } from './StyledText'

export default function ModalHeader(props) {
    const { row, align, spaceBetween, flexEnd, marginTop4 } = Styles
    const { primaryColor, blackText } = Colors
    const { mediumIcon, smallIcon } = Sizes

    const { type, file } = styles

    const { title, icon, upload, critical, fileName } = props
    return (
        <SafeAreaView>
            <View style={[row, align, critical ? flexEnd : spaceBetween]}>
                {upload ? (
                    <View style={[row, align]}>
                        <MaterialCommunityIcons
                            name={icon}
                            size={wp(smallIcon)}
                            color={blackText}
                        />
                        <LatoText
                            style={file}
                            fontWeight="lato-bold"
                            numberOfLines={1}
                        >
                            {fileName}
                        </LatoText>
                    </View>
                ) : critical ? null : (
                    <MaterialCommunityIcons
                        name={icon}
                        size={wp(mediumIcon - 1)}
                        color={primaryColor}
                    />
                )}

                <TouchableOpacity activeOpacity={0.8} {...props}>
                    <MaterialCommunityIcons
                        name="close"
                        size={wp(mediumIcon - 1)}
                        color={primaryColor}
                    />
                </TouchableOpacity>
            </View>
            <LatoText style={type} fontWeight="lato-bold">
                {title}
            </LatoText>
            <PartialDivider style={marginTop4} />
        </SafeAreaView>
    )
}

const { primaryColor, blackText } = Colors
const { M_Text } = Sizes
const styles = StyleSheet.create({
    type: {
        fontSize: wp(M_Text),
        color: primaryColor,
        paddingTop: wp(4),
        textAlign: 'left',
    },
    file: {
        fontSize: wp(M_Text),
        color: blackText,
        marginLeft: wp(2),
        textAlign: 'left',
        width: '80%',
    },
})
