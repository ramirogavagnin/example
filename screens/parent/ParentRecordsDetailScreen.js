import React, { Fragment } from 'react'
import { StyleSheet, View } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import moment from 'moment'

import { connect } from 'react-redux'

import Layout from '../../constants/Layout'
import Colors from '../../constants/Colors'
import Sizes from '../../constants/Sizes'

import { LatoText } from '../../components/StyledText'
import { HeaderTitle, HeaderLeft, HeaderRight } from '../../components/Header'
import FooterMessage from '../../components/FooterMessage'
import NavWrapper from '../../components/NavWrapper'
import FileRow from '../../components/FileRow'
import CategoryRow from '../../components/CategoryRow'
import FileCard from '../../components/FileCard'
import Date from '../../components/Date'
import PartialDivider from '../../components/PartialDivider'
import CommentsDivider from '../../components/CommentsDivider'
import CommentsList from '../../components/CommentsList'

import { routes } from '../../utils/routes'

const { gradientStart, gradientMiddle, primaryColor } = Colors
const { M_Text, sideWrap, headerHeight } = Sizes

function ParentRecordsDetailScreen(props) {
    const { mediumIcon } = Sizes

    const { navigation, currentRecord, medicalRecords } = props

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
                <CategoryRow
                    category={currentRecord.length > 0 ? record.category : []}
                />
            </NavWrapper>
            <Layout style={styles.contentContainer}>
                <Date
                    date={
                        currentRecord.length > 0
                            ? moment(record.date).format('LLL')
                            : 'Date unavailable'
                    }
                    upload
                />
                <FileCard
                    record={record.length > 0 ? record : []}
                    onPress={() => navigation.navigate(routes.parentShareFile)}
                />
                <CommentsDivider />
                <CommentsList data={medicalRecords} />
            </Layout>
            <FooterMessage placeholder="Write a comment" message />
        </Fragment>
    )
}

ParentRecordsDetailScreen.navigationOptions = props => ({
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
    return {
        medicalRecords: state.medicalRecords,
        currentRecord: state.currentRecord,
    }
}

export default connect(mapStateToProps, null)(ParentRecordsDetailScreen)
