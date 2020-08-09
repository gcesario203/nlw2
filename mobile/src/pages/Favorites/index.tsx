import React, {  useState } from 'react'
import { View , ScrollView} from 'react-native'
import PageHeader from '../../components/PageHeader'
import AsyncStorage from '@react-native-community/async-storage'
import {useFocusEffect} from '@react-navigation/native'

import styles from './styles'
import TeacherItem, {Teacher} from '../../components/TeacherItem'

function Favorites(){
    const[favorites,setFavorite] = useState([])

    function loadingFavorites(){
        AsyncStorage.getItem('favorites')
        .then(res=>{
            if(res){
                const favoritedTeachers = JSON.parse(res)

                setFavorite(favoritedTeachers)
            }
        })
    }

    useFocusEffect(()=>{loadingFavorites()})

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
                {favorites.map((teacher:Teacher)=>{
                    return <TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        favorited
                    >
                    </TeacherItem>
                })}
            </ScrollView>
        </View>
    )
}

export default Favorites