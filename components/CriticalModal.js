import React, { useState, useEffect } from 'react'
import {
    View,
    ScrollView,
    Modal,
    StyleSheet,
    Platform,
    Alert,
    // KeyboardAvoidingView,
} from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { Feather } from '@expo/vector-icons'
import * as DocumentPicker from 'expo-document-picker'
import { connect } from 'react-redux'
import { postMedicalRecord } from '../redux/actions'

import Styles from '../constants/Styles'
import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'

import { AvoidingView } from './AvoidingView'
import CustomSpinner from './CustomSpinner'
import ModalHeader from './ModalHeader'
import { LatoText } from './StyledText'
import { Button } from './Button'
import Input from './Input'

function CriticalModal(props) {
    const [form, setForm] = useState({ title: '', value: '', comment: '' })

    handleFormValue = (key, value) => {
        setForm({ ...form, [key]: value })
    }

    const { modal, marginTop4 } = Styles

    const { input, button, buttonText, container, textArea } = styles

    const { isLoading } = props

    const { title, value, comment } = form

    return (
        <Modal {...props} animationType="slide" transparent={false}>
            <CustomSpinner visible={isLoading} />
            <AvoidingView>
                <View style={modal}>
                    <ModalHeader {...props} />
                </View>
                <ScrollView contentContainerStyle={container}>
                    <Input
                        value={title}
                        style={input}
                        placeholder="Title (e.g. Blood Type)"
                        onChangeText={text => handleFormValue('title', text)}
                    />
                    <Input
                        value={value}
                        style={input}
                        placeholder="Value (e.g. B+)"
                        onChangeText={text => handleFormValue('value', text)}
                    />
                    <Input
                        value={comment}
                        style={[input, textArea]}
                        placeholder="Comment"
                        multiline={true}
                        onChangeText={text => handleFormValue('comment', text)}
                    />

                    <Button style={[button, marginTop4]}>
                        <LatoText style={buttonText}>SAVE</LatoText>
                    </Button>
                </ScrollView>
            </AvoidingView>
        </Modal>
    )
}

const { primaryColor, whiteText } = Colors
const { input, inputText, loginButtonText } = Sizes

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: wp(6),
        height: hp(100),
    },

    input: {
        height: wp(input),
        marginTop: wp(0.2),
        marginBottom: wp(4),
        fontSize: wp(inputText),
        textAlign: 'center',
        fontFamily: 'lato',
    },
    textArea: {
        height: wp(80),
        paddingTop: wp(3),
        paddingBottom: wp(3),
        textAlign: 'left',
    },
    button: {
        height: wp(input),
        backgroundColor: primaryColor,
        width: wp(90),
        padding: wp(5),
        justifyContent: 'center',
    },
    buttonText: {
        color: whiteText,
        fontSize: wp(loginButtonText),
        fontFamily: 'lato-bold',
        textAlign: 'center',
    },
})

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CriticalModal)
