import React from 'react'
import { Picker, Platform, StyleSheet } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import Styles from '../constants/Styles'

export default function Select(props) {
    const { selectAndroid, selectIOS } = Styles
    return (
        <Picker
            {...props}
            style={selectAndroid}
            mode="dropdown"
            itemStyle={selectIOS}
        >
            <Picker.Item label="Select existent Category" value="" />
            <Picker.Item label="Category 1" value="Category 1" />
            <Picker.Item label="Category 2" value="Category 2" />
            <Picker.Item label="Category 3" value="Category 3" />
            <Picker.Item label="Category 4" value="Category 4" />
        </Picker>
    )
}
