import React, { useState, useEffect } from 'react'
import {
    View,
    ScrollView,
    TouchableOpacity,
    Modal,
    StyleSheet,
    Picker,
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

import ModalHeader from './ModalHeader'
import { LatoText } from './StyledText'
import Select from './Select'
import Input from './Input'
import { Button } from './Button'
import { AvoidingView } from './AvoidingView'
import CustomSpinner from './CustomSpinner'

function UploadModal(props) {
    const {
        modal,
        checkText,
        row,
        align,
        center,
        spaceBetween,
        marginRight3,
        marginTop4,
        marginTop6,
    } = Styles

    const { primaryColor } = Colors

    const { input, button, buttonText, uploadBadge, container } = styles

    const {
        postMedicalRecord,
        isLoading,
        error,
        success,
        medicalRecords,
        visible,
    } = props

    const [category, setCategory] = useState('')
    // const [newCategory, setNewCategory] = useState('')
    const [uploadDocument, setNewDocument] = useState({})

    useEffect(() => {
        if (error && visible) {
            setTimeout(() => Alert.alert('Esurguries', error), 300)
        }
    }, [error])

    useEffect(() => {
        if (success && visible) {
            setTimeout(() => Alert.alert('Esurguries', success), 300)
        }
    }, [success])

    const uploadFile = async () => {
        const result = await DocumentPicker.getDocumentAsync({})
        if (result.type === 'success') {
            setNewDocument({
                url: 'https://{{server}}/file',
                name: result.name,
            })
            //setNewDocument({ uri: result.uri, name: result.name })
        }
    }

    handleOnSave = () => {
        if (category && Object.keys(uploadDocument).length > 0) {
            const form = {
                _id: Math.floor(Math.random() * 1000000),
                userId: Math.floor(Math.random() * 1000000),
                date: new Date().toISOString(),
                file: uploadDocument,
                category: [
                    {
                        id: Math.floor(Math.random() * 1000000),
                        title: category,
                    },
                ],
                favorite: false,
            }
            setCategory('')
            // setNewCategory('')
            setNewDocument({})
            postMedicalRecord(form)
        } else if (Object.keys(uploadDocument).length === 0) {
            Alert.alert('Esurguries', 'You have to upload a file.')
        } else if (!category) {
            Alert.alert(
                'Esurguries',
                'You have to choose an existing Category or create it.'
            )
        }
    }

    return (
        <Modal {...props} animationType="slide" transparent={false}>
            <CustomSpinner visible={isLoading} />
            <AvoidingView>
                <View style={modal}>
                    <ModalHeader
                        {...props}
                        fileName={
                            Object.keys(uploadDocument).length > 0
                                ? uploadDocument.name
                                : 'No file selected'
                        }
                    />
                </View>
                <ScrollView contentContainerStyle={container}>
                    <TouchableOpacity
                        style={uploadBadge}
                        activeOpacity={0.8}
                        onPress={uploadFile}
                    >
                        <Feather
                            name="upload"
                            size={wp(20)}
                            color={primaryColor}
                        />
                    </TouchableOpacity>

                    <Select
                        selectedValue={category}
                        onValueChange={value => setCategory(value)}
                    />

                    <Input
                        value={category}
                        style={input}
                        placeholder="Or write a new Category"
                        // onChangeText={text => setNewCategory(text)}
                        onChangeText={text => setCategory(text)}
                    />
                    <Button style={[button, marginTop6]} onPress={handleOnSave}>
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
        alignItems: 'center',
        height: hp(100),
    },
    uploadBadge: {
        height: wp(40),
        width: wp(40),
        marginTop: wp(20),
        marginBottom: wp(5),
        borderRadius: wp(20),
        borderWidth: wp(0.8),
        borderColor: primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: wp(input),
        marginTop: Platform.OS === 'android' ? wp(6) : wp(24),
        fontSize: wp(inputText),
        width: wp(90),
        textAlign: 'center',
        fontFamily: 'lato',
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
    return {
        medicalRecords: state.medicalRecords,
        isLoading: state.isLoading,
        error: state.error,
        success: state.success,
    }
}

const mapDispatchToProps = {
    postMedicalRecord,
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadModal)
