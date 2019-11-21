import React, { Fragment, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { LinearGradient } from 'expo-linear-gradient'

import { connect } from 'react-redux'

import Layout from '../../constants/Layout'
import Colors from '../../constants/Colors'
import Sizes from '../../constants/Sizes'
import Styles from '../../constants/Styles'

import { LatoText } from '../../components/StyledText'
import { HeaderTitle, HeaderLeft, HeaderRight } from '../../components/Header'
import { Button } from '../../components/Button'
import Footer from '../../components/Footer'
import CriticalList from '../../components/CriticalList'
import CriticalModal from '../../components/CriticalModal'

import { routes } from '../../utils/routes'

const { gradientStart, gradientMiddle, primaryColor } = Colors
const { M_Text, sideWrap, headerHeight } = Sizes

function ParentCriticalDataScreen(props) {
    const [modalVisibility, setModalVisibility] = useState(false)

    const { button, buttonText, marginTop6 } = Styles
    return (
        <Fragment>
            <Layout style={styles.contentContainer}>
                <CriticalList {...props} />
                <Button
                    style={[button, marginTop6]}
                    onPress={() => {
                        setModalVisibility(!modalVisibility)
                    }}
                >
                    <LatoText style={buttonText} fontWeight={'lato-bold'}>
                        CREATE NEW CRITICAL DATA
                    </LatoText>
                </Button>
                <CriticalModal
                    title="ADD NEW CRITICAL DATA"
                    onPress={() => {
                        setModalVisibility(!modalVisibility)
                    }}
                    visible={modalVisibility}
                    critical
                />
            </Layout>
            <Footer />
        </Fragment>
    )
}

ParentCriticalDataScreen.navigationOptions = props => ({
    headerBackground: (
        <LinearGradient
            colors={[gradientStart, gradientMiddle, primaryColor]}
            style={{ flex: 1 }}
        />
    ),
    headerLeft: <HeaderLeft {...props} />,
    headerTitle: (
        <HeaderTitle
            name={'Elizabeth Doe'}
            title={'CRITICAL DATA'}
            {...props}
        />
    ),
    headerRight: <HeaderRight {...props} />,
    headerTitleContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerLeftContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: wp(sideWrap),
    },
    headerRightContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: wp(sideWrap),
    },
    headerStyle: {
        height: wp(headerHeight),
    },
})

const styles = StyleSheet.create({
    contentContainer: {
        paddingTop: 0,
        paddingBottom: wp(5),
    },
    filterText: {
        fontSize: wp(M_Text),
        color: primaryColor,
        textAlign: 'left',
    },
    row: {
        flexDirection: 'row',
    },
})

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, null)(ParentCriticalDataScreen)
