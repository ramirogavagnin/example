import React from 'react'
import { createStackNavigator } from 'react-navigation'

import LoginScreen from '../screens/common/LoginScreen'
import SignUpStepOneScreen from '../screens/parent/SignUpStepOneScreen'
import SignUpStepTwoScreen from '../screens/parent/SingUpStepTwoScreen'
import SignUpStepThreeScreen from '../screens/parent/SignUpStepThreeScreen'
import SignUpStepFourScreen from '../screens/parent/SignUpStepFourScreen'

const AuthStack = createStackNavigator(
    {
        Login: LoginScreen,
        SignUpStepOne: SignUpStepOneScreen,
        SignUpStepTwo: SignUpStepTwoScreen,
        SignUpStepThree: SignUpStepThreeScreen,
        SignUpStepFour: SignUpStepFourScreen,
    },
    { initialRouteName: 'Login', headerMode: 'none' }
)

export default AuthStack
