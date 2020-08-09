import React from 'react'
import { View , ScrollView} from 'react-native'
import PageHeader from '../../components/PageHeader'

import styles from './styles'
import TeacherItem from '../../components/TeacherItem'

function Favorites(){
    return (
        <View style={styles.containter}>
            <PageHeader title="Meus Proffys favoritos"></PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal:16,
                    paddingBottom:24
                }}
            >
                {/* <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem> */}
            </ScrollView>
        </View>
    )
}

export default Favorites