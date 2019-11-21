import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { LinearGradient } from 'expo-linear-gradient'

// Parent Screens
import ParentHomeScreen from '../screens/parent/ParentHomeScreen'
import ParentCriticalDataScreen from '../screens/parent/ParentCriticalDataScreen'
import ParentRecordsScreen from '../screens/parent/ParentRecordsScreen'
import ParentRecordsDetailScreen from '../screens/parent/ParentRecordsDetailScreen'
import ParentShareFileScreen from '../screens/parent/ParentShareFileScreen'
import ParentShareHistoryScreen from '../screens/parent/ParentShareHistoryScreen'
import ParentInfoScreen from '../screens/parent/ParentInfoScreen'
import ParentAssessmentQuestionsScreen from '../screens/parent/ParentAssessmentQuestionsScreen'

// Children Screens
import ChildrenHomeScreen from '../screens/children/ChildrenHomeScreen'
import ChildrenCriticalDataScreen from '../screens/children/ChildrenCriticalDataScreen'
import ChildrenRecordsScreen from '../screens/children/ChildrenRecordsScreen'
import ChildrenRecordsDetailScreen from '../screens/children/ChildrenRecordsDetailScreen'
import ChildrenShareFileScreen from '../screens/children/ChildrenShareFileScreen'
import ChildrenShareHistoryScreen from '../screens/children/ChildrenShareHistoryScreen'
import ChildrenInfoScreen from '../screens/children/ChildrenInfoScreen'
import ChildrenAssessmentQuestionsScreen from '../screens/children/ChildrenAssessmentQuestionsScreen'

// Common Screens
import HelpScreen from '../screens/common/HelpScreen'

// Menu
import DrawerMenu from '../components/DrawerMenu'

// Default Config
const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
})

// -- Parent Stack -- //
const ParentHomeStack = createStackNavigator(
    {
        ParentHome: ParentHomeScreen,
        ParentCriticalData: ParentCriticalDataScreen,
    },
    {
        initialRouteName: 'ParentHome',
    }
)

const ParentRecordsStack = createStackNavigator(
    {
        ParentRecords: ParentRecordsScreen,
        ParentRecordsDetail: ParentRecordsDetailScreen,
        ParentShareFile: ParentShareFileScreen,
        ParentShareHistory: ParentShareHistoryScreen,
    },
    {
        initialRouteName: 'ParentRecords',
    }
)

const ParentInfoStack = createStackNavigator(
    {
        ParentInformation: ParentInfoScreen,
        ParentAssessmentQuestions: ParentAssessmentQuestionsScreen,
    },
    {
        initialRouteName: 'ParentInformation',
    }
)

// -- Children Stack -- //
const ChildrenHomeStack = createStackNavigator(
    {
        ChildrenHome: ChildrenHomeScreen,
        ChildrenCriticalData: ChildrenCriticalDataScreen,
    },
    {
        initialRouteName: 'ChildrenHome',
    }
)

const ChildrenRecordsStack = createStackNavigator(
    {
        ChildrenRecords: ChildrenRecordsScreen,
        ChildrenRecordsDetail: ChildrenRecordsDetailScreen,
        ChildrenShareFile: ChildrenShareFileScreen,
        ChildrenShareHistory: ChildrenShareHistoryScreen,
    },
    {
        initialRouteName: 'ChildrenRecords',
    }
)

const ChildrenInfoStack = createStackNavigator(
    {
        ChildrenInformation: ChildrenInfoScreen,
        ChildrenAssessmentQuestions: ChildrenAssessmentQuestionsScreen,
    },
    {
        initialRouteName: 'ChildrenInformation',
    }
)

// -- Common Stack -- //
const HelpStack = createStackNavigator(
    {
        Help: HelpScreen,
    },
    config
)

// -- App -- //
const AppStack = createDrawerNavigator(
    {
        ParentHome: ParentHomeStack,
        ParentRecords: ParentRecordsStack,
        ParentInformation: ParentInfoStack,

        ChildrenHome: ChildrenHomeStack,
        ChildrenRecords: ChildrenRecordsStack,
        ChildrenInformation: ChildrenInfoStack,

        Help: HelpStack,
    },
    {
        initialRouteName: 'ParentRecords',
        contentComponent: DrawerMenu,
        drawerPosition: 'right',
        drawerType: 'slide',
        drawerWidth: wp(100),
    }
)

export default AppStack
