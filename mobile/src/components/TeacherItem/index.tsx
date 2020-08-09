import React, { useState } from 'react'
import { View , Text , Image, Linking} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import AsynStorage from '@react-native-community/async-storage'

import styles from './styles'
import api from '../../services/api'

export interface Teacher{
    id:number,
    user_id: number,
    subject:string,
    cost:number,
    name:string,
    avatar:string,
    whatsapp:string,
    bio: string
}

interface TeacherProps{
    teacher:Teacher,
    favorited:boolean
}

const TeacherItem: React.FC<TeacherProps> = ({teacher,favorited}) =>{
    const [isFavorited,setIsFavorited] = useState(favorited)

    function handleZipzip(){
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
        api.post('connections',{
            user_id:teacher.id
        })
    }

    async function handleFavorite(){
        const favoritos = await AsynStorage.getItem('favorites')
        let favoritosArray = []


        if(favoritos){
            favoritosArray = JSON.parse(favoritos)
        }

        if(isFavorited){
            const favoriteIndex = favoritosArray.findIndex((teacherItem:Teacher)=>{
                return teacherItem.id = teacher.id
            })

            favoritosArray.splice(favoriteIndex,1)
            setIsFavorited(false)
        }else{

            favoritosArray.push(teacher)

            setIsFavorited(true)
        }

        await AsynStorage.setItem('favorites', JSON.stringify(favoritosArray))
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{uri:teacher.avatar}}
                >
                </Image>
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>
                        {teacher.name}
                    </Text>
                    <Text style={styles.subject}>
                        {teacher.subject}
                    </Text>
                </View>
            </View>
            <Text style={styles.bio}>
                {teacher.bio}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'    '}
                    <Text style={styles.priceValue}>
                        R$  {teacher.cost}.00
                    </Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton
                        style={
                            [
                                styles.favorite,
                                isFavorited?styles.favorited:{}
                            ]
                        }
                        onPress={handleFavorite}
                    >
                        {isFavorited?<Image source={unfavoriteIcon}></Image>:<Image source={heartOutlineIcon}></Image>}

                    </RectButton>

                    <RectButton
                        style={styles.contact}
                        onPress={handleZipzip}
                    >
                        <Image source={whatsappIcon}></Image>
                        <Text style={styles.contactText}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem