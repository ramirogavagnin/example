import React from 'react'
import { CheckBox } from 'native-base'

import Styles from '../constants/Styles'
import Colors from '../constants/Colors'
import Shadows from '../constants/Shadows'

export default function CustomCheckBox(props) {
    const { checkBox } = Styles
    const { primaryColor } = Colors
    const { input } = Shadows
    const { style } = props

    return (
        <CheckBox
            {...props}
            color={primaryColor}
            style={[checkBox, input, style]}
        />
    )
}
