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
import AvatarRow from '../../components/AvatarRow'
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

function ChildrenRecordsDetailScreen(props) {
    const { mediumIcon } = Sizes

    const { navigation, currentChildren, currentChildrenRecord } = props

    const childrenRecord = currentChildrenRecord[0]

    return (
        <Fragment>
            <NavWrapper>
                <AvatarRow
                    name={
                        currentChildren.length > 0
                            ? `${currentChildren[0].firstName} ${currentChildren[0].lastName}`
                            : 'Name unavailable'
                    }
                />
                <PartialDivider />
                <FileRow
                    onPress={() => navigation.goBack()}
                    title={
                        currentChildrenRecord.length > 0
                            ? childrenRecord.file.name
                            : 'Name unavailable'
                    }
                />
                <PartialDivider />
                <CategoryRow
                    category={
                        currentChildrenRecord.length > 0
                            ? childrenRecord.category
                            : []
                    }
                />
            </NavWrapper>
            <Layout style={styles.contentContainer}>
                <Date
                    date={
                        currentChildrenRecord.length > 0
                            ? moment(childrenRecord.date).format('LLL')
                            : 'Date unavailable'
                    }
                    upload
                />
                <FileCard
                    record={
                        currentChildrenRecord.length > 0 ? childrenRecord : []
                    }
                    onPress={() =>
                        navigation.navigate(routes.childrenShareFile)
                    }
                />
                <CommentsDivider />
                <CommentsList
                    data={
                        currentChildren.length > 0
                            ? currentChildren[0].medicalRecords
                            : []
                    }
                />
            </Layout>
            <FooterMessage placeholder="Write a comment" message />
        </Fragment>
    )
}

ChildrenRecordsDetailScreen.navigationOptions = props => ({
    headerBackground: (
        <LinearGradient
            colors={[gradientStart, gradientMiddle, primaryColor]}
            style={{ flex: 1 }}
        />
    ),
    headerLeft: <HeaderLeft {...props} />,
    headerTitle: (
        <HeaderTitle {...props} name={'Elizabeth Doe'} title={'MOTHER'} />
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
        ...state,
        currentChildren: state.currentChildren,
        currentChildrenRecord: state.currentChildrenRecord,
    }
}

export default connect(mapStateToProps, null)(ChildrenRecordsDetailScreen)
