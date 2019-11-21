import React from 'react'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { TextInput, StyleSheet, Platform } from 'react-native'

import Colors from '../constants/Colors'
import Shadows from '../constants/Shadows'
import Sizes from '../constants/Sizes'

export default class Input extends React.Component {
    state = {
        hidePlaceholder: false,
    }

    handleFocus = () => this.setState({ hidePlaceholder: true })
    handleBlur = () => this.setState({ hidePlaceholder: false })
    render() {
        const { placeholder, style, ...props } = this.props

        return (
            <TextInput
                {...props}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                placeholder={this.state.hidePlaceholder ? '' : placeholder}
                style={[styles.input, Shadows.input, style]}
            />
        )
    }
}
const { inputRadius } = Sizes
const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        borderRadius: wp(inputRadius),
        padding: wp(3.5),
    },
})
