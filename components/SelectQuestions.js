import React from 'react'
import { Picker, Platform, StyleSheet } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import Styles from '../constants/Styles'
import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'
import Shadows from '../constants/Shadows'

export default function SelectQuestions(props) {
    const { backgroundWhiteColor } = Colors
    const { inputRadius, input } = Sizes

    return (
        <Picker
            {...props}
            mode="dropdown"
            itemStyle={[
                {
                    height: wp(9.8),
                    width: '95%',
                    alignSelf: 'center',
                    textAlign: 'left',
                    fontSize: wp(4.2),
                    fontFamily: 'lato-bold',
                },
            ]}
        >
            <Picker.Item label="Select" value="" />
            <Picker.Item label="Option 1" value="Option 1" />
            <Picker.Item label="Option 2" value="Option 2" />
            <Picker.Item label="Option 3" value="Option 3" />
            <Picker.Item label="Option 4" value="Option 4" />
        </Picker>
    )
}
