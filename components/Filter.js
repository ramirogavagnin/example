import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'
import Shadows from '../constants/Shadows'

import { LatoText } from './StyledText'
import { TouchableHighlight } from 'react-native-gesture-handler'

export default function Filter(props) {
    const { mediumIcon } = Sizes
    const { handleOrderModal, handleFilterModal, style } = props
    return (
        <View style={[styles.filter, style]}>
            <LatoText style={styles.filterText} fontWeight={'lato-bold'}>
                Category
            </LatoText>
            <View style={styles.row}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={handleOrderModal}
                >
                    <MaterialCommunityIcons
                        name="filter-variant"
                        size={wp(mediumIcon - 1)}
                        color={Colors.primaryColor}
                        style={{ paddingRight: wp(2) }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={handleFilterModal}
                >
                    <MaterialCommunityIcons
                        name="filter-outline"
                        size={wp(mediumIcon - 1)}
                        color={Colors.primaryColor}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const { sideWrap, navRow, M_Text } = Sizes

const styles = StyleSheet.create({
    filter: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: wp(navRow),
    },
    filterText: {
        fontSize: wp(M_Text),
        color: Colors.primaryColor,
        textAlign: 'left',
    },
    row: {
        flexDirection: 'row',
    },
})
