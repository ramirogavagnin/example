import React, { useState, useEffect } from 'react'
import { View, ScrollView, StyleSheet, Image, Alert } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { connect } from 'react-redux'
import { loginUser } from '../../redux/actions'

import { routes } from '../../utils/routes'

import Styles from '../../constants/Styles'
import Colors from '../../constants/Colors'
import Sizes from '../../constants/Sizes'

import { LatoText } from '../../components/StyledText'
import Input from '../../components/Input'
import { AvoidingView } from '../../components/AvoidingView'
import { Button } from '../../components/Button'
import Terms from '../../components/Terms'
import CustomSpinner from '../../components/CustomSpinner'

import Logo from '../../assets/images/logo-login.png'

const { input, inputText, SM_Text, loginButtonText } = Sizes
const { blackText, primaryColor, whiteText, backgroundColor } = Colors

function LoginScreen({ loginUser, session, isLoading, error, navigation }) {
    const [form, setFormValue] = useState({
        email: '',
        password: '',
    })

    useEffect(() => {
        if (error) {
            setTimeout(() => Alert.alert('Esurguries', error), 300)
        }
    }, [error])

    const handleInput = (value, name) => {
        setFormValue({ ...form, [name]: value })
    }

    const handleOnSubmit = () => {
        loginUser(form, navigation)
    }

    const { logo, marginTop4, marginTop6, marginTop12 } = Styles

    const {
        container,
        contentContainer,
        logoContainer,
        input,
        forgotText,
        buttonContainer,
        button,
        buttonText,
        borderedButton,
        borderedButtonText,
        termsContainer,
    } = styles

    const { email, password } = form

    return (
        <AvoidingView style={container}>
            <ScrollView>
                <CustomSpinner visible={isLoading} />
                <View style={{ height: hp(20) }} />
                <View style={contentContainer}>
                    <Image source={Logo} style={logo} />
                    <Input
                        value={email}
                        style={[input, marginTop12]}
                        placeholder="email or user"
                        onChangeText={value => handleInput(value, 'email')}
                        autoCapitalize="none"
                    />

                    <Input
                        value={password}
                        style={input}
                        placeholder="password"
                        onChangeText={value => handleInput(value, 'password')}
                        secureTextEntry={true}
                        autoCapitalize="none"
                    />
                    <LatoText style={forgotText}>
                        Forgot your password?
                    </LatoText>
                    <Button
                        style={[button, marginTop6]}
                        onPress={handleOnSubmit}
                        disabled={email && password ? false : true}
                    >
                        <LatoText style={buttonText}>LOG IN</LatoText>
                    </Button>
                    <Button
                        style={[borderedButton, marginTop4]}
                        onPress={() =>
                            navigation.navigate(routes.signUpStepOne)
                        }
                        bordered
                    >
                        <LatoText style={borderedButtonText}>
                            New Member
                        </LatoText>
                    </Button>
                </View>
                <Terms style={{ height: hp(10) }} />
            </ScrollView>
        </AvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
    },
    contentContainer: {
        paddingHorizontal: wp(9),
        height: hp(70),
    },
    loginText: {
        color: primaryColor,
        fontSize: hp(4),
    },
    input: {
        height: wp(input),
        marginTop: wp(5),
        fontSize: wp(inputText),
        textAlign: 'center',
        fontFamily: 'lato',
    },
    forgotText: {
        color: primaryColor,
        fontSize: wp(SM_Text),
        marginTop: wp(3),
        textAlign: 'center',
    },

    button: {
        height: wp(input),
        backgroundColor: primaryColor,
        width: '100%',
        padding: wp(5),
        justifyContent: 'center',
    },
    buttonText: {
        color: whiteText,
        fontSize: wp(loginButtonText),
        fontFamily: 'lato-bold',
        textAlign: 'center',
    },
    borderedButton: {
        width: '100%',
        padding: wp(5),
        justifyContent: 'center',
        borderColor: 'transparent',
        color: primaryColor,
    },
    borderedButtonText: {
        color: primaryColor,
        fontSize: wp(loginButtonText),
        fontFamily: 'lato-bold',
        textAlign: 'center',
    },
})

const mapStateToProps = state => {
    return {
        isAuth: state.isAuth,
        isLoading: state.isLoading,
        error: state.error,
        session: state.session,
    }
}

const mapDispatchToProps = {
    loginUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
