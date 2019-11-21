import React, { Fragment } from 'react'
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
import PartialDivider from '../../components/PartialDivider'
import NavWrapper from '../../components/NavWrapper'
import FileRow from '../../components/FileRow'
import Date from '../../components/Date'
import ShareHistoryCard from '../../components/ShareHistoryCard'

function ParentShareHistoryScreen(props) {
    const { row, flexEnd, center } = Styles

    const { card, contentContainer } = styles

    const { navigation, currentRecord } = props

    const record = currentRecord[0]

    return (
        <Fragment>
            <NavWrapper>
                <FileRow
                    onPress={() => navigation.goBack()}
                    title={
                        currentRecord.length > 0
                            ? record.file.name
                            : 'Name unavailable'
                    }
                />

                <PartialDivider />
                <FileRow
                    onPress={() => navigation.goBack()}
                    title={'Share History'}
                    email
                    share
                />
            </NavWrapper>
            <Layout style={contentContainer}>
                <Date />
                <ShareHistoryCard status={'ok'} />
                <ShareHistoryCard status={'warning'} />
                <ShareHistoryCard status={'error'} />
                <Date />
                <ShareHistoryCard status={'ok'} />
                <ShareHistoryCard status={'ok'} />
            </Layout>
        </Fragment>
    )
}

const { gradientStart, gradientMiddle, primaryColor } = Colors
const { sideWrap, headerHeight } = Sizes

ParentShareHistoryScreen.navigationOptions = props => ({
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
            title={'MEDICAL RECORDS'}
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
        paddingBottom: wp(8),
    },
})

const mapStateToProps = state => {
    return {
        currentRecord: state.currentRecord,
    }
}

export default connect(
    mapStateToProps,
    null
)(ParentShareHistoryScreen)
